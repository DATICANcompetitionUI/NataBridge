-- email index
CREATE UNIQUE INDEX unique_patient_email
ON patients(email)
WHERE email IS NOT NULL;

-- phone number index 
CREATE UNIQUE INDEX unique_patient_phone
ON patients(phone)
WHERE phone IS NOT NULL;