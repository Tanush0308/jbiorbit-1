import { StudentConfig } from './student';
import { EntrepreneurConfig } from './entrepreneur';
import { EnterpriseConfig } from './enterprise';
import { AdminConfig } from './admin';

export const RoleRegistry = {
  'Student': StudentConfig,
  'Entrepreneur / MSME': EntrepreneurConfig,
  'Enterprise': EnterpriseConfig,
  // Future roles can be added here
  // 'Mentor / JBI Alliance Partner': MentorConfig,
  'JBI Team / Super Admin': AdminConfig
};
