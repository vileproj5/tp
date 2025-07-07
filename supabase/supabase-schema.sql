-- Schema para a tabela de respostas da anamnese
-- Execute este SQL no editor SQL do Supabase

CREATE TABLE IF NOT EXISTS anamnese_responses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    patient_name TEXT,
    birth_date DATE,
    age INTEGER,
    address TEXT,
    neighborhood TEXT,
    zip_code TEXT,
    city TEXT,
    phone TEXT,
    mother_name TEXT,
    mother_age INTEGER,
    mother_profession TEXT,
    father_name TEXT,
    father_age INTEGER,
    father_profession TEXT,
    consultation_reason TEXT,
    pregnancy_complications TEXT,
    special_needs TEXT,
    special_needs_details TEXT,
    coordination_issues TEXT,
    coordination_details TEXT,
    visual_impairment TEXT,
    visual_details TEXT,
    communication_issues TEXT,
    communication_details TEXT,
    reaction_when_opposed TEXT,
    reaction_to_health_professionals TEXT,
    previous_surgery TEXT,
    surgery_details TEXT,
    blood_disorders TEXT,
    respiratory_problems TEXT,
    liver_problems TEXT,
    heart_problems TEXT,
    gastric_problems TEXT,
    medication_allergies TEXT,
    food_allergies TEXT,
    respiratory_allergies TEXT,
    current_treatments TEXT,
    toothbrush_type TEXT,
    toothpaste_type TEXT,
    oral_hygiene_responsible TEXT,
    daily_hygiene_frequency INTEGER,
    gum_bleeding TEXT,
    previous_extractions TEXT,
    tongue_brushing TEXT,
    dental_floss_use TEXT,
    sti_carrier TEXT,
    currently_breastfeeding TEXT,
    previously_breastfed TEXT,
    breastfeeding_duration TEXT,
    currently_bottle_feeding TEXT,
    previously_bottle_fed TEXT,
    bottle_feeding_duration TEXT,
    choking_vomiting TEXT,
    thumb_sucking TEXT,
    pacifier_use TEXT,
    other_habits TEXT,
    teeth_grinding TEXT,
    previous_dentist_visit TEXT,
    previous_dentist_name TEXT,
    additional_information TEXT,
    responsible_name TEXT NOT NULL,
    all_answers JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_anamnese_responses_patient_name ON anamnese_responses(patient_name);
CREATE INDEX IF NOT EXISTS idx_anamnese_responses_created_at ON anamnese_responses(created_at);
CREATE INDEX IF NOT EXISTS idx_anamnese_responses_responsible_name ON anamnese_responses(responsible_name);

-- Trigger para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_anamnese_responses_updated_at 
    BEFORE UPDATE ON anamnese_responses 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Política de segurança (RLS) - ajuste conforme necessário
ALTER TABLE anamnese_responses ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção (ajuste conforme suas necessidades de segurança)
CREATE POLICY "Allow insert for all users" ON anamnese_responses
    FOR INSERT WITH CHECK (true);

-- Política para permitir leitura (ajuste conforme suas necessidades de segurança)
CREATE POLICY "Allow read for all users" ON anamnese_responses
    FOR SELECT USING (true);

-- Comentários para documentação
COMMENT ON TABLE anamnese_responses IS 'Tabela para armazenar as respostas da anamnese odontológica';
COMMENT ON COLUMN anamnese_responses.all_answers IS 'JSON com todas as respostas para backup e flexibilidade';
COMMENT ON COLUMN anamnese_responses.responsible_name IS 'Nome do responsável que assinou o documento';

