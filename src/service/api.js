import { get, post } from './http'

export const get_company_type = p => post('/api/base/get_company_type', p),//企业类型
get_profession = p => post('/api/base/get_profession', p),//行业
get_company_appraise = p => post('/api/base/get_company_appraise', p),//企业印象
get_company_scale = p => post('/api/base/get_company_scale', p)//企业规模;