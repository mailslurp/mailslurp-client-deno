// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';


/**
 * no description
 */
export class FormControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * @param to The email address that submitted form should be sent to.
     * @param subject Optional subject of the email that will be sent.
     * @param redirectTo Optional URL to redirect form submitter to after submission. If not present user will see a success message.
     * @param emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param successMessage Optional success message to display if no _redirectTo present.
     * @param spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     */
    public async submitForm(to?: string, subject?: string, redirectTo?: string, emailAddress?: string, successMessage?: string, spamCheck?: string, otherParameters?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/forms';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (to !== undefined) {
            requestContext.setQueryParam("_to", ObjectSerializer.serialize(to, "string", ""));
        }
        if (subject !== undefined) {
            requestContext.setQueryParam("_subject", ObjectSerializer.serialize(subject, "string", ""));
        }
        if (redirectTo !== undefined) {
            requestContext.setQueryParam("_redirectTo", ObjectSerializer.serialize(redirectTo, "string", ""));
        }
        if (emailAddress !== undefined) {
            requestContext.setQueryParam("_emailAddress", ObjectSerializer.serialize(emailAddress, "string", ""));
        }
        if (successMessage !== undefined) {
            requestContext.setQueryParam("_successMessage", ObjectSerializer.serialize(successMessage, "string", ""));
        }
        if (spamCheck !== undefined) {
            requestContext.setQueryParam("_spamCheck", ObjectSerializer.serialize(spamCheck, "string", ""));
        }
        if (otherParameters !== undefined) {
            requestContext.setQueryParam("otherParameters", ObjectSerializer.serialize(otherParameters, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class FormControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to submitForm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async submitForm(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", ""
            ) as string;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
