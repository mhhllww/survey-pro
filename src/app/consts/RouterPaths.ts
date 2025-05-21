export enum RouterPaths {
  HOME = '/',
  ANALYTICS = '/dashboard/analytics',
  LOGIN = '/login',
  REGISTER = '/register',
  DASHBOARD = '/dashboard',
  SURVEYS = '/dashboard/surveys',
  SURVEY = 'surveys/survey-${id}/mode',
  RESULT = 'dashboard/analytics?survey=survey-{id}',
}
