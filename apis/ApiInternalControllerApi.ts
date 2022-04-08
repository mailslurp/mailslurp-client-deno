// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { GetOrCreateSamlUserOptions } from '../models/GetOrCreateSamlUserOptions.ts';
import { UserDto } from '../models/UserDto.ts';

/**
 * no description
 */
export class ApiInternalControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param key 
     * @param getOrCreateSamlUserOptions 
     */
    public async getSamlUserOrCreate(key: string, getOrCreateSamlUserOptions: GetOrCreateSamlUserOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'key' is not null or undefined
        if (key === null || key === undefined) {
            throw new RequiredError('Required parameter key was null or undefined when calling getSamlUserOrCreate.');
        }


        // verify required parameter 'getOrCreateSamlUserOptions' is not null or undefined
        if (getOrCreateSamlUserOptions === null || getOrCreateSamlUserOptions === undefined) {
            throw new RequiredError('Required parameter getOrCreateSamlUserOptions was null or undefined when calling getSamlUserOrCreate.');
        }


        // Path Params
        const localVarPath = '/internal/saml/user';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (key !== undefined) {
            requestContext.setQueryParam("key", ObjectSerializer.serialize(key, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(getOrCreateSamlUserOptions, "GetOrCreateSamlUserOptions", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

        let authMethod = null;
        // Apply auth methods
        authMethod = config.authMethods["API_KEY"]
        if (authMethod) {
            await authMethod.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class ApiInternalControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSamlUserOrCreate
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSamlUserOrCreate(response: ResponseContext): Promise<UserDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: UserDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserDto", ""
            ) as UserDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: UserDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "UserDto", ""
            ) as UserDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
