// params can have be passed as any type of object
// tslint:disable-next-line:no-any
export const ValidationMessage: {[key: string]: (params: any, label: string) => string} = {
  'required': (params, label) => `${label} is required.`,
  'minlength': (params, label) => `${label} should be at least ${params.requiredLength} characters.`,
  'maxlength': (params, label) => `${label} should be up to ${params.requiredLength} characters.`
};
