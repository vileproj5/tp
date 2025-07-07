import { createClient } from '@supabase/supabase-js';

// Configurações do Supabase
// IMPORTANTE: Substitua estas URLs e chaves pelas suas configurações reais do Supabase
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Função para salvar as respostas da anamnese
export const saveAnamneseData = async (answers, responsibleName) => {
  try {
    const anamneseData = {
      patient_name: answers[1] || '',
      birth_date: answers[2] || '',
      age: answers[3] || '',
      address: answers[4] || '',
      neighborhood: answers[5] || '',
      zip_code: answers[6] || '',
      city: answers[7] || '',
      phone: answers[8] || '',
      mother_name: answers[9] || '',
      mother_age: answers[10] || '',
      mother_profession: answers[11] || '',
      father_name: answers[12] || '',
      father_age: answers[13] || '',
      father_profession: answers[14] || '',
      consultation_reason: answers[15] || '',
      pregnancy_complications: answers[16] || '',
      special_needs: answers[17] || '',
      special_needs_details: answers[18] || '',
      coordination_issues: answers[19] || '',
      coordination_details: answers[20] || '',
      visual_impairment: answers[21] || '',
      visual_details: answers[22] || '',
      communication_issues: answers[23] || '',
      communication_details: answers[24] || '',
      reaction_when_opposed: answers[25] || '',
      reaction_to_health_professionals: answers[26] || '',
      previous_surgery: answers[27] || '',
      surgery_details: answers[28] || '',
      blood_disorders: answers[29] || '',
      respiratory_problems: answers[30] || '',
      liver_problems: answers[31] || '',
      heart_problems: answers[32] || '',
      gastric_problems: answers[33] || '',
      medication_allergies: answers[34] || '',
      food_allergies: answers[35] || '',
      respiratory_allergies: answers[36] || '',
      current_treatments: answers[37] || '',
      toothbrush_type: answers[38] || '',
      toothpaste_type: answers[39] || '',
      oral_hygiene_responsible: answers[40] || '',
      daily_hygiene_frequency: answers[41] || '',
      gum_bleeding: answers[42] || '',
      previous_extractions: answers[43] || '',
      tongue_brushing: answers[44] || '',
      dental_floss_use: answers[45] || '',
      sti_carrier: answers[46] || '',
      currently_breastfeeding: answers[47] || '',
      previously_breastfed: answers[48] || '',
      breastfeeding_duration: answers[49] || '',
      currently_bottle_feeding: answers[50] || '',
      previously_bottle_fed: answers[51] || '',
      bottle_feeding_duration: answers[52] || '',
      choking_vomiting: answers[53] || '',
      thumb_sucking: answers[54] || '',
      pacifier_use: answers[55] || '',
      other_habits: answers[56] || '',
      teeth_grinding: answers[57] || '',
      previous_dentist_visit: answers[58] || '',
      previous_dentist_name: answers[59] || '',
      additional_information: answers[60] || '',
      responsible_name: responsibleName,
      created_at: new Date().toISOString(),
      all_answers: JSON.stringify(answers)
    };

    const { data, error } = await supabase
      .from('anamnese_responses')
      .insert([anamneseData])
      .select();

    if (error) {
      throw error;
    }

    return data[0];
  } catch (error) {
    console.error('Erro ao salvar dados no Supabase:', error);
    throw error;
  }
};

// Função para buscar todas as respostas
export const getAnamneseResponses = async () => {
  try {
    const { data, error } = await supabase
      .from('anamnese_responses')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar dados do Supabase:', error);
    throw error;
  }
};

// Função para buscar uma resposta específica
export const getAnamneseResponse = async (id) => {
  try {
    const { data, error } = await supabase
      .from('anamnese_responses')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Erro ao buscar resposta específica do Supabase:', error);
    throw error;
  }
};

