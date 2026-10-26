// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { McpOAuthClientRegistrationOptions } from '../models/McpOAuthClientRegistrationOptions.ts';

/**
 * no description
 */
export class ApiMcpOAuthControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     */
    public async authorizationServerMetadata(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/oauth-authorization-server/mcp';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

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

    /**
     */
    public async authorizationServerMetadata1(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/oauth-authorization-server';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

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

    /**
     * @param clientId 
     * @param redirectUri 
     * @param responseType 
     * @param codeChallenge 
     * @param codeChallengeMethod 
     * @param resource 
     * @param scope 
     * @param state 
     */
    public async authorize(clientId: string, redirectUri: string, responseType: string, codeChallenge: string, codeChallengeMethod: string, resource: string, scope?: string, state?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError('Required parameter clientId was null or undefined when calling authorize.');
        }


        // verify required parameter 'redirectUri' is not null or undefined
        if (redirectUri === null || redirectUri === undefined) {
            throw new RequiredError('Required parameter redirectUri was null or undefined when calling authorize.');
        }


        // verify required parameter 'responseType' is not null or undefined
        if (responseType === null || responseType === undefined) {
            throw new RequiredError('Required parameter responseType was null or undefined when calling authorize.');
        }


        // verify required parameter 'codeChallenge' is not null or undefined
        if (codeChallenge === null || codeChallenge === undefined) {
            throw new RequiredError('Required parameter codeChallenge was null or undefined when calling authorize.');
        }


        // verify required parameter 'codeChallengeMethod' is not null or undefined
        if (codeChallengeMethod === null || codeChallengeMethod === undefined) {
            throw new RequiredError('Required parameter codeChallengeMethod was null or undefined when calling authorize.');
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError('Required parameter resource was null or undefined when calling authorize.');
        }




        // Path Params
        const localVarPath = '/mcp/oauth/authorize';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (clientId !== undefined) {
            requestContext.setQueryParam("client_id", ObjectSerializer.serialize(clientId, "string", ""));
        }
        if (redirectUri !== undefined) {
            requestContext.setQueryParam("redirect_uri", ObjectSerializer.serialize(redirectUri, "string", ""));
        }
        if (responseType !== undefined) {
            requestContext.setQueryParam("response_type", ObjectSerializer.serialize(responseType, "string", ""));
        }
        if (scope !== undefined) {
            requestContext.setQueryParam("scope", ObjectSerializer.serialize(scope, "string", ""));
        }
        if (state !== undefined) {
            requestContext.setQueryParam("state", ObjectSerializer.serialize(state, "string", ""));
        }
        if (codeChallenge !== undefined) {
            requestContext.setQueryParam("code_challenge", ObjectSerializer.serialize(codeChallenge, "string", ""));
        }
        if (codeChallengeMethod !== undefined) {
            requestContext.setQueryParam("code_challenge_method", ObjectSerializer.serialize(codeChallengeMethod, "string", ""));
        }
        if (resource !== undefined) {
            requestContext.setQueryParam("resource", ObjectSerializer.serialize(resource, "string", ""));
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

    /**
     */
    public async protectedResourceMetadata(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/oauth-protected-resource/mcp';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

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

    /**
     */
    public async protectedResourceMetadata1(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/.well-known/oauth-protected-resource';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

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

    /**
     * @param mcpOAuthClientRegistrationOptions 
     */
    public async register(mcpOAuthClientRegistrationOptions: McpOAuthClientRegistrationOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'mcpOAuthClientRegistrationOptions' is not null or undefined
        if (mcpOAuthClientRegistrationOptions === null || mcpOAuthClientRegistrationOptions === undefined) {
            throw new RequiredError('Required parameter mcpOAuthClientRegistrationOptions was null or undefined when calling register.');
        }


        // Path Params
        const localVarPath = '/mcp/oauth/register';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(mcpOAuthClientRegistrationOptions, "McpOAuthClientRegistrationOptions", ""),
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

    /**
     * @param grantType 
     * @param clientId 
     * @param resource 
     * @param code 
     * @param redirectUri 
     * @param codeVerifier 
     * @param refreshToken 
     */
    public async token(grantType: string, clientId: string, resource: string, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'grantType' is not null or undefined
        if (grantType === null || grantType === undefined) {
            throw new RequiredError('Required parameter grantType was null or undefined when calling token.');
        }


        // verify required parameter 'clientId' is not null or undefined
        if (clientId === null || clientId === undefined) {
            throw new RequiredError('Required parameter clientId was null or undefined when calling token.');
        }


        // verify required parameter 'resource' is not null or undefined
        if (resource === null || resource === undefined) {
            throw new RequiredError('Required parameter resource was null or undefined when calling token.');
        }






        // Path Params
        const localVarPath = '/mcp/oauth/token';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (grantType !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('grant_type', grantType as any);
        }
        if (clientId !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('client_id', clientId as any);
        }
        if (resource !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('resource', resource as any);
        }
        if (code !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code', code as any);
        }
        if (redirectUri !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('redirect_uri', redirectUri as any);
        }
        if (codeVerifier !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('code_verifier', codeVerifier as any);
        }
        if (refreshToken !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('refresh_token', refreshToken as any);
        }
        requestContext.setBody(localVarFormParams);

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

export class ApiMcpOAuthControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authorizationServerMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authorizationServerMetadata(response: ResponseContext): Promise<{ [key: string]: any; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authorizationServerMetadata1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authorizationServerMetadata1(response: ResponseContext): Promise<{ [key: string]: any; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to authorize
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async authorize(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to protectedResourceMetadata
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async protectedResourceMetadata(response: ResponseContext): Promise<{ [key: string]: any; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to protectedResourceMetadata1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async protectedResourceMetadata1(response: ResponseContext): Promise<{ [key: string]: any; } > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: { [key: string]: any; } = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "{ [key: string]: any; }", ""
            ) as { [key: string]: any; };
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to register
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async register(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to token
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async token(response: ResponseContext): Promise<any > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: any = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "any", ""
            ) as any;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
