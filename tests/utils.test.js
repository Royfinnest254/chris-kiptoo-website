const { validateContactForm, getTabContent } = require('../js/utils');

describe('validateContactForm', () => {
  test('should fail when fields are empty', () => {
    const result = validateContactForm('', '', '');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Name is required');
    expect(result.errors).toContain('Email is required');
    expect(result.errors).toContain('Message is required');
  });

  test('should fail on invalid email', () => {
    const result = validateContactForm('Chris', 'invalid-email', 'Hello');
    expect(result.valid).toBe(false);
    expect(result.errors).toContain('Invalid email format');
  });

  test('should pass on valid inputs', () => {
    const result = validateContactForm('Chris Kiptoo', 'ps@treasury.go.ke', 'Official Inquiry');
    expect(result.valid).toBe(true);
    expect(result.errors.length).toBe(0);
  });
});

describe('getTabContent', () => {
  test('should return correct details for treasury tab', () => {
    const content = getTabContent('treasury');
    expect(content.title).toBe('The National Treasury & Economic Planning');
    expect(content.details).toContain('fiscal consolidation');
  });

  test('should return empty/error content for unknown tab', () => {
    const content = getTabContent('unknown');
    expect(content.title).toBe('');
    expect(content.details).toBe('');
  });
});
