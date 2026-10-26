// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { ScimGroupResource } from '../models/ScimGroupResource.ts';
import { ScimPatchRequest } from '../models/ScimPatchRequest.ts';
import { ScimUserResource } from '../models/ScimUserResource.ts';

/**
 * no description
 */
export class SCIMApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * @param slug 
     * @param scimGroupResource 
     */
    public async createGroup(slug: string, scimGroupResource: ScimGroupResource, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling createGroup.');
        }


        // verify required parameter 'scimGroupResource' is not null or undefined
        if (scimGroupResource === null || scimGroupResource === undefined) {
            throw new RequiredError('Required parameter scimGroupResource was null or undefined when calling createGroup.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimGroupResource, "ScimGroupResource", ""),
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
     * @param slug 
     * @param scimUserResource 
     */
    public async createUser(slug: string, scimUserResource: ScimUserResource, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling createUser.');
        }


        // verify required parameter 'scimUserResource' is not null or undefined
        if (scimUserResource === null || scimUserResource === undefined) {
            throw new RequiredError('Required parameter scimUserResource was null or undefined when calling createUser.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimUserResource, "ScimUserResource", ""),
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
     * @param slug 
     * @param groupId 
     */
    public async deleteGroup(slug: string, groupId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling deleteGroup.');
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError('Required parameter groupId was null or undefined when calling deleteGroup.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups/{groupId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * @param slug 
     * @param userId 
     */
    public async deleteUser(slug: string, userId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling deleteUser.');
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling deleteUser.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users/{userId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * @param slug 
     * @param groupId 
     */
    public async getGroup(slug: string, groupId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getGroup.');
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError('Required parameter groupId was null or undefined when calling getGroup.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups/{groupId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

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
     * @param slug 
     * @param resourceType 
     */
    public async getResourceType(slug: string, resourceType: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getResourceType.');
        }


        // verify required parameter 'resourceType' is not null or undefined
        if (resourceType === null || resourceType === undefined) {
            throw new RequiredError('Required parameter resourceType was null or undefined when calling getResourceType.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/ResourceTypes/{resourceType}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'resourceType' + '}', encodeURIComponent(String(resourceType)));

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
     * @param slug 
     */
    public async getResourceTypes(slug: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getResourceTypes.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/ResourceTypes'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

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
     * @param slug 
     * @param schemaId 
     */
    public async getSchema(slug: string, schemaId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getSchema.');
        }


        // verify required parameter 'schemaId' is not null or undefined
        if (schemaId === null || schemaId === undefined) {
            throw new RequiredError('Required parameter schemaId was null or undefined when calling getSchema.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Schemas/{schemaId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'schemaId' + '}', encodeURIComponent(String(schemaId)));

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
     * @param slug 
     */
    public async getSchemas(slug: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getSchemas.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Schemas'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

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
     * @param slug 
     */
    public async getServiceProviderConfig(slug: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getServiceProviderConfig.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/ServiceProviderConfig'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

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
     * @param slug 
     * @param userId 
     */
    public async getUser(slug: string, userId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling getUser.');
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling getUser.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users/{userId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

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
     * @param slug 
     * @param filter 
     * @param startIndex 
     * @param count 
     */
    public async listGroups(slug: string, filter?: string, startIndex?: number, count?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling listGroups.');
        }





        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (startIndex !== undefined) {
            requestContext.setQueryParam("startIndex", ObjectSerializer.serialize(startIndex, "number", "int32"));
        }
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
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
     * @param slug 
     * @param filter 
     * @param startIndex 
     * @param count 
     */
    public async listUsers(slug: string, filter?: string, startIndex?: number, count?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling listUsers.');
        }





        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (filter !== undefined) {
            requestContext.setQueryParam("filter", ObjectSerializer.serialize(filter, "string", ""));
        }
        if (startIndex !== undefined) {
            requestContext.setQueryParam("startIndex", ObjectSerializer.serialize(startIndex, "number", "int32"));
        }
        if (count !== undefined) {
            requestContext.setQueryParam("count", ObjectSerializer.serialize(count, "number", "int32"));
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
     * @param slug 
     * @param groupId 
     * @param scimPatchRequest 
     */
    public async patchGroup(slug: string, groupId: string, scimPatchRequest: ScimPatchRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling patchGroup.');
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError('Required parameter groupId was null or undefined when calling patchGroup.');
        }


        // verify required parameter 'scimPatchRequest' is not null or undefined
        if (scimPatchRequest === null || scimPatchRequest === undefined) {
            throw new RequiredError('Required parameter scimPatchRequest was null or undefined when calling patchGroup.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups/{groupId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimPatchRequest, "ScimPatchRequest", ""),
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
     * @param slug 
     * @param userId 
     * @param scimPatchRequest 
     */
    public async patchUser(slug: string, userId: string, scimPatchRequest: ScimPatchRequest, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling patchUser.');
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling patchUser.');
        }


        // verify required parameter 'scimPatchRequest' is not null or undefined
        if (scimPatchRequest === null || scimPatchRequest === undefined) {
            throw new RequiredError('Required parameter scimPatchRequest was null or undefined when calling patchUser.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users/{userId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimPatchRequest, "ScimPatchRequest", ""),
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
     * @param slug 
     * @param groupId 
     * @param scimGroupResource 
     */
    public async replaceGroup(slug: string, groupId: string, scimGroupResource: ScimGroupResource, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling replaceGroup.');
        }


        // verify required parameter 'groupId' is not null or undefined
        if (groupId === null || groupId === undefined) {
            throw new RequiredError('Required parameter groupId was null or undefined when calling replaceGroup.');
        }


        // verify required parameter 'scimGroupResource' is not null or undefined
        if (scimGroupResource === null || scimGroupResource === undefined) {
            throw new RequiredError('Required parameter scimGroupResource was null or undefined when calling replaceGroup.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Groups/{groupId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'groupId' + '}', encodeURIComponent(String(groupId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimGroupResource, "ScimGroupResource", ""),
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
     * @param slug 
     * @param userId 
     * @param scimUserResource 
     */
    public async replaceUser(slug: string, userId: string, scimUserResource: ScimUserResource, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'slug' is not null or undefined
        if (slug === null || slug === undefined) {
            throw new RequiredError('Required parameter slug was null or undefined when calling replaceUser.');
        }


        // verify required parameter 'userId' is not null or undefined
        if (userId === null || userId === undefined) {
            throw new RequiredError('Required parameter userId was null or undefined when calling replaceUser.');
        }


        // verify required parameter 'scimUserResource' is not null or undefined
        if (scimUserResource === null || scimUserResource === undefined) {
            throw new RequiredError('Required parameter scimUserResource was null or undefined when calling replaceUser.');
        }


        // Path Params
        const localVarPath = '/scim/v2/{slug}/Users/{userId}'
            .replace('{' + 'slug' + '}', encodeURIComponent(String(slug)))
            .replace('{' + 'userId' + '}', encodeURIComponent(String(userId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/scim+json",
        
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(scimUserResource, "ScimUserResource", ""),
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

export class SCIMApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createGroup(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to createUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createUser(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to deleteGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteGroup(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to deleteUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteUser(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getGroup(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getResourceType
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResourceType(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getResourceTypes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getResourceTypes(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSchema(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getSchemas
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSchemas(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getServiceProviderConfig
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getServiceProviderConfig(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to getUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getUser(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to listGroups
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listGroups(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to listUsers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async listUsers(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to patchGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchGroup(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to patchUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async patchUser(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to replaceGroup
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceGroup(response: ResponseContext): Promise<any > {
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
     * @params response Response returned by the server for a request to replaceUser
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async replaceUser(response: ResponseContext): Promise<any > {
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
