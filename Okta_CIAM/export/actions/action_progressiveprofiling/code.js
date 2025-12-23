/**
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onExecutePostLogin = async (event, api) => {
  
  
  const formId = event.secrets.formId;
  const full_name= event.user.user_metadata.full_name;
  const job_title = event.user.user_metadata.job_title;
  const account_type = event.user.user_metadata.account_type;
  const company_name = event.user.user_metadata.company_name;
  const company_size= event.user.user_metadata.company_size;
 


  if(!account_type){
      api.prompt.render(formId,{
        fields: {
          "full_name": full_name,
          "job_title": job_title,
          "account_type": account_type,
          "company_name": company_name,
          "company_size": company_size
        }
      });
      
  }
 
}

/**
* @param {Event} event - Details about the user and the context in which they are logging in.
* @param {PostLoginAPI} api - Interface whose methods can be used to change the behavior of the login.
*/
exports.onContinuePostLogin = async (event, api) => {}