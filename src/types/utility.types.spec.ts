import { InstanceTypes, Require } from './utility.types';

describe('UtilityTypes', () => {

  it('should test type Require', () => {
    type Summary = {
      id: string,
      content?: string,
      aiPrompt: any | undefined,
      log?: string
    }

    type RequiredSummary = Require<Summary, 'content' | 'aiPrompt'>;

    const summary: RequiredSummary = {
      id: '1',
      content: 'content',
      aiPrompt: 'aiPrompt'
    };

    expect(summary).toBeTruthy();
  });

  it('should test InstanceTypes', () => {
    const types = [String, Number, Boolean] as const;

    const instances: InstanceTypes<typeof types> = [
      '1',
      1,
      false
    ];

    expect(instances).toBeTruthy();
  });
});
