export interface IUser {
  email: string;
  password: string;
}

export interface IUserResponse {
  airtable_api_key?: string,
  created_at: string,
  email: string,
  encrypted_password: string,
  fb_id?: number,
  id: number,
  jwt: string,
  last_name?: string,
  remember_created_at?: string,
  reset_password_sent_at?: string,
  reset_password_token?: string,
  updated_at: string,
}
