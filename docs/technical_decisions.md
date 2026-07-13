# Technical Decisions & Observations

This document summarizes the key decisions made throughout the machine learning pipeline for the Maternal Risk Prediction System and explains the reasoning behind each choice.

---

# 1. Dataset Overview

The dataset consists of maternal health indicators collected during pregnancy.

## Input Features

- Age
- Systolic Blood Pressure
- Diastolic Blood Pressure
- Blood Sugar
- Body Temperature
- Heart Rate

## Target Variable

RiskLevel

Classes:

- Low Risk
- Mid Risk
- High Risk

---

# 2. Exploratory Data Analysis (EDA)

EDA was conducted before any preprocessing or model training to understand the structure and quality of the dataset.

The following analyses were performed:

- Feature distributions
- Correlation analysis
- Class distribution

This helped identify potential issues before training and informed subsequent preprocessing decisions.

---

# 3. Class Distribution

The dataset contains three target classes.

| Risk Level | Samples |
|------------|---------|
| Low Risk | 406 |
| Mid Risk | 336 |
| High Risk | 272 |

Although the classes are not perfectly equal, the imbalance is relatively small.

### Decision

No oversampling or undersampling techniques were applied.

### Reason

The distribution was considered sufficiently balanced for tree-based ensemble models. Applying synthetic balancing methods could introduce unnecessary bias while offering little improvement.

---

# 4. Label Encoding

The target variable was encoded as:

| Original Label | Encoded Value |
|---------------|--------------|
| Low Risk | 0 |
| Mid Risk | 1 |
| High Risk | 2 |

### Reason

Machine learning models require numerical target labels for classification.

---

# 5. Train-Test Split

The dataset was separated into:

- Training Set (80%)
- Test Set (20%)

using a fixed random seed.

```python
random_state = 42
```

### Reason

Using a fixed random state ensures that experiments are reproducible and allows fair comparison between different machine learning models.

---

# 6. Stratified Sampling

The train-test split used:

```python
stratify=y
```

### Reason

This preserves the proportion of each maternal risk class in both the training and testing datasets.

Without stratification, one split could accidentally contain too few High Risk samples, leading to unreliable evaluation.

---

# 7. Feature Scaling

Feature scaling was intentionally omitted.

### Reason

The selected algorithms (Random Forest and XGBoost) are tree-based models.

Unlike distance-based algorithms (such as KNN, SVM, and Logistic Regression), tree-based models make decisions using learned feature thresholds rather than geometric distances.

Consequently, scaling numerical features provides little to no performance benefit while introducing unnecessary preprocessing.

---

# 8. Model Selection

Two machine learning algorithms were selected:

- Random Forest
- XGBoost

### Why Random Forest?

Random Forest is a robust ensemble learning algorithm that combines multiple Decision Trees using bootstrap aggregation (bagging).

Advantages:

- Handles nonlinear relationships
- Naturally resistant to overfitting compared to a single Decision Tree
- Works well on structured tabular datasets
- Requires minimal preprocessing
- Provides interpretable feature importance

---

### Why XGBoost?

XGBoost is a gradient boosting algorithm that builds trees sequentially, with each tree correcting errors made by previous trees.

Advantages:

- Frequently achieves state-of-the-art performance on structured datasets
- Strong regularization to reduce overfitting
- Efficient implementation
- Excellent predictive performance

---

### Why compare both?

Rather than assuming one algorithm is superior, both models were evaluated under the same preprocessing pipeline.

This enables objective model selection based on empirical performance rather than assumptions.

---

# 9. Hyperparameter Tuning

Default hyperparameters rarely produce the best-performing model.

Hyperparameter tuning was therefore performed to identify better model configurations.

The tuning process explored multiple combinations of parameters affecting model complexity and learning behaviour.

---

## Random Forest Parameters Tuned

- n_estimators
- max_depth
- min_samples_split
- min_samples_leaf

Best-performing configuration:

```text
n_estimators = 200
max_depth = 15
min_samples_split = 2
min_samples_leaf = 1
```

Observed validation accuracy:

```text
0.8298
```

Increasing the number of trees beyond 200 did not improve performance, indicating diminishing returns.

---

## XGBoost Parameters Tuned

- learning_rate
- max_depth
- n_estimators
- subsample
- colsample_bytree

Best-performing configuration:

```text
learning_rate = 0.1
max_depth = 7
n_estimators = 100
subsample = 0.8
colsample_bytree = 1.0
```

Observed validation accuracy:

```text
0.8298
```

A lower learning rate (0.1) produced slightly better performance than 0.2, suggesting that more gradual learning improved generalization.

---

# 10. Cross-Validation

Cross-validation was performed during hyperparameter tuning.

### Reason

Using the test set for hyperparameter selection would indirectly bias model selection toward that specific test data.

Instead, cross-validation evaluates candidate models using only the training data.

This preserves the integrity of the unseen test set for final evaluation.

---

# 11. Final Model Selection Process

The final Random Forest and XGBoost configurations were selected based on cross-validation performance.

Both achieved comparable validation accuracy (~82.98%), therefore the final selection was deferred until evaluation on the unseen test dataset.

Rather than relying on accuracy alone, both models were compared using:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix
- Classification Report
- Feature Importance

The outcome of this evaluation informed the final model selected for deployment.

---

# 12. Evaluation Strategy

The held-out test dataset remains completely untouched during preprocessing, hyperparameter tuning, and cross-validation.

It will only be used once to evaluate the final trained models.

This provides an unbiased estimate of real-world performance on previously unseen maternal health records.

---

# 13. Model Evaluation Results

Both Random Forest and XGBoost were evaluated on the held-out test dataset using the same evaluation metrics to ensure a fair comparison.

The following metrics were considered:

- Accuracy
- Precision
- Recall
- F1-score
- Confusion Matrix
- Classification Report
- Feature Importance

## Performance Comparison

Both models achieved identical overall predictive performance on the test dataset.

| Metric | Random Forest | XGBoost |
|---------|---------------|----------|
| Accuracy | 0.85 | 0.85 |
| Macro F1-score | 0.86 | 0.86 |
| Weighted F1-score | 0.85 | 0.85 |

The confusion matrices and classification reports further showed that both algorithms classified the three maternal risk levels with comparable effectiveness.

This indicates that either model is capable of accurately predicting maternal risk using the available clinical measurements.

---

# 14. Feature Importance Analysis

Although both models produced nearly identical predictive performance, their interpretation of feature importance differed slightly.

## Random Forest Feature Importance

| Rank | Feature |
|------|---------|
|1|Blood Sugar (BS)|
|2|Systolic Blood Pressure|
|3|Age|
|4|Diastolic Blood Pressure|
|5|Heart Rate|
|6|Body Temperature|

## XGBoost Feature Importance

| Rank | Feature |
|------|---------|
|1|Systolic Blood Pressure|
|2|Blood Sugar (BS)|
|3|Body Temperature|
|4|Age|
|5|Diastolic Blood Pressure|
|6|Heart Rate|

### Observation

Both models consistently identified Blood Sugar (BS) and Systolic Blood Pressure as the two most influential predictors of maternal risk, providing strong evidence that these measurements are the primary clinical indicators within the dataset.

The remaining features showed minor differences in ranking, reflecting the different learning strategies employed by each ensemble algorithm.

Random Forest tends to distribute importance among features that are consistently useful across many independently constructed decision trees.

In contrast, XGBoost assigns greater importance to features that provide additional predictive information after previous trees have corrected existing classification errors.

Consequently, XGBoost elevated Body Temperature as a more influential feature while assigning slightly less importance to Age compared to Random Forest.

These differences do not indicate disagreement between the models but rather different methods of measuring feature contribution.

---

# 15. Final Model Selection

Although Random Forest and XGBoost achieved identical predictive performance, XGBoost was selected as the final deployment model.

### Reasons for Selection

- It achieved the same classification accuracy while providing more informative feature importance estimates.
- Its sequential boosting strategy better captures complex interactions among maternal health indicators.
- It includes built-in regularization techniques that help reduce overfitting.
- It naturally supports missing feature values during prediction, making it more suitable for real-world clinical environments where complete patient measurements may not always be available.
- XGBoost is widely regarded as one of the strongest-performing algorithms for structured tabular healthcare datasets.

### Final Decision

The final Maternal Risk Prediction System therefore uses the tuned XGBoost model for deployment.

Random Forest remains an important benchmark model and serves as independent validation that the predictive patterns learned by XGBoost are consistent and reliable.

# Summary

The machine learning pipeline was intentionally designed to follow standard supervised learning best practices:

1. Perform Exploratory Data Analysis.
2. Preprocess and encode the dataset.
3. Split into training and testing datasets.
4. Preserve class distribution using stratified sampling.
5. Avoid unnecessary feature scaling for tree-based models.
6. Train multiple candidate models.
7. Optimize hyperparameters using cross-validation.
8. Select the best-performing configurations.
9. Evaluate the final models once on an untouched test set.
10. Compare models using multiple performance metrics before deployment.