function validateContactForm(name, email, message) {
  const errors = [];
  if (!name || name.trim() === '') {
    errors.push('Name is required');
  }
  if (!email || email.trim() === '') {
    errors.push('Email is required');
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push('Invalid email format');
    }
  }
  if (!message || message.trim() === '') {
    errors.push('Message is required');
  }
  return {
    valid: errors.length === 0,
    errors: errors
  };
}

const tabContents = {
  treasury: {
    title: 'The National Treasury & Economic Planning',
    details: 'Managing fiscal consolidation, expenditure rationalization, public debt administration (including Eurobond restructuring), revenue mobilization, and structural reforms for State-Owned Enterprises (SOEs).'
  },
  trade: {
    title: 'State Department of Trade',
    details: 'Spearheading bilateral trade agreements, regional integration within the East African Community (EAC), export promotion policies, and structural enhancements for private sector growth.'
  },
  environment: {
    title: 'Ministry of Environment & Forestry',
    details: 'Leading environmental conservation policy frameworks, nationwide reforestation programs, watershed management (including the KICP initiative), and securing sustainable resource use.'
  }
};

function getTabContent(tabId) {
  return tabContents[tabId] || { title: '', details: '' };
}

module.exports = {
  validateContactForm,
  getTabContent
};
