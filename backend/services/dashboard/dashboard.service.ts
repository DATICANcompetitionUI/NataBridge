import { FastifyInstance } from "fastify";

const getDashboard = async (
     server: FastifyInstance,
) => {
     const client = await server.pg.connect();
     const rows = await client.query('SELECT * FROM get_dashboard_details');

     const assessments = rows.rows.map((row) => ({
          id: row.assessment_id,
          patientId: row.patient_id,

          name: row.name,
          age: Number(row.age),
          gestationalAge: row.gestational_age
               ? Number(row.gestational_age)
               : null,

          currentRiskLevel: row.prediction,
          confidence: Number(row.confidence),

          lastAssessment: row.created_at,

          systolicBP: Number(row.systolic_bp),
          diastolicBP: Number(row.diastolic_bp),
          bloodSugar: Number(row.blood_sugar),
          bodyTemperatureCelsius: Number(
               row.body_temperature_celsius
          ),
          heartRate: Number(row.heart_rate),

          factors: row.factors.map((factor: any) => ({
               feature: factor.feature,
               impact: Number(factor.impact)
          }))
     }));

     return {
          summary: {
               high: assessments.filter(
                    (item) => item.currentRiskLevel === 'High Risk'
               ).length,

               mid: assessments.filter(
                    (item) => item.currentRiskLevel === 'Mid Risk'
               ).length,

               low: assessments.filter(
                    (item) => item.currentRiskLevel === 'Low Risk'
               ).length
          },

          priorityAssessments: assessments.filter(
               (item) => item.currentRiskLevel === 'High Risk'
          ),

          recentAssessments: assessments
     };
}

export {
     getDashboard
}