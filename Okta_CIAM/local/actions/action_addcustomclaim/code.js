exports.onExecutePostLogin = async (event, api) => {
    try {
      const organization = event.organization || {};
      const { id: orgId, name: orgName } = organization;
      const assignedRoles = event.authorization?.roles || [];
      
      // Set organization details in the ID token if available
      if (orgId) {
        api.idToken.setCustomClaim(`organization_id`, orgId);
      }
  
      if (assignedRoles.length > 0) {
        api.idToken.setCustomClaim(`customRole`, assignedRoles);
        console.log('Assigned Roles:', assignedRoles);
      }
  
      if (orgName) {
        api.idToken.setCustomClaim(`organization_name`, orgName);
      }

    } catch (error) {
      console.error('Error in PostLogin action:', error);
      // Handle errors gracefully; here we just log them, but you may want to take other actions
    }
  };