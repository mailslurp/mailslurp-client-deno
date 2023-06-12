// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateInboxRulesetOptions } from '../models/CreateInboxRulesetOptions.ts';
import { InboxRulesetDto } from '../models/InboxRulesetDto.ts';
import { InboxRulesetTestOptions } from '../models/InboxRulesetTestOptions.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { PageInboxRulesetDto } from '../models/PageInboxRulesetDto.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';

/**
 * no description
 */
export class InboxRulesetControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param createInboxRulesetOptions 
     * @param inboxId Inbox id to attach ruleset to
     */
    public async createNewInboxRuleset(createInboxRulesetOptions: CreateInboxRulesetOptions, inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createInboxRulesetOptions' is not null or undefined
        if (createInboxRulesetOptions === null || createInboxRulesetOptions === undefined) {
            throw new RequiredError('Required parameter createInboxRulesetOptions was null or undefined when calling createNewInboxRuleset.');
        }



        // Path Params
        const localVarPath = '/rulesets';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createInboxRulesetOptions, "CreateInboxRulesetOptions", ""),
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
     * Delete inbox ruleset
     * Delete an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public async deleteInboxRuleset(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling deleteInboxRuleset.');
        }


        // Path Params
        const localVarPath = '/rulesets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * Delete inbox rulesets. Accepts optional inboxId filter.
     * Delete inbox rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     */
    public async deleteInboxRulesets(inboxId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/rulesets';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
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
     * Get inbox ruleset
     * Get an inbox ruleset
     * @param id ID of inbox ruleset
     */
    public async getInboxRuleset(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getInboxRuleset.');
        }


        // Path Params
        const localVarPath = '/rulesets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId Optional inbox id to get rulesets from
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public async getInboxRulesets(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/rulesets';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (searchFilter !== undefined) {
            requestContext.setQueryParam("searchFilter", ObjectSerializer.serialize(searchFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
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
     * Test an inbox ruleset
     * Test an inbox ruleset
     * @param id ID of inbox ruleset
     * @param inboxRulesetTestOptions 
     */
    public async testInboxRuleset(id: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling testInboxRuleset.');
        }


        // verify required parameter 'inboxRulesetTestOptions' is not null or undefined
        if (inboxRulesetTestOptions === null || inboxRulesetTestOptions === undefined) {
            throw new RequiredError('Required parameter inboxRulesetTestOptions was null or undefined when calling testInboxRuleset.');
        }


        // Path Params
        const localVarPath = '/rulesets/{id}/test'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

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
            ObjectSerializer.serialize(inboxRulesetTestOptions, "InboxRulesetTestOptions", ""),
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
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param inboxRulesetTestOptions 
     */
    public async testInboxRulesetsForInbox(inboxId: string, inboxRulesetTestOptions: InboxRulesetTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling testInboxRulesetsForInbox.');
        }


        // verify required parameter 'inboxRulesetTestOptions' is not null or undefined
        if (inboxRulesetTestOptions === null || inboxRulesetTestOptions === undefined) {
            throw new RequiredError('Required parameter inboxRulesetTestOptions was null or undefined when calling testInboxRulesetsForInbox.');
        }


        // Path Params
        const localVarPath = '/rulesets';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inboxRulesetTestOptions, "InboxRulesetTestOptions", ""),
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
     * Test new inbox ruleset
     * Test new inbox ruleset
     * @param testNewInboxRulesetOptions 
     */
    public async testNewInboxRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testNewInboxRulesetOptions' is not null or undefined
        if (testNewInboxRulesetOptions === null || testNewInboxRulesetOptions === undefined) {
            throw new RequiredError('Required parameter testNewInboxRulesetOptions was null or undefined when calling testNewInboxRuleset.');
        }


        // Path Params
        const localVarPath = '/rulesets';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PATCH);
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
            ObjectSerializer.serialize(testNewInboxRulesetOptions, "TestNewInboxRulesetOptions", ""),
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

export class InboxRulesetControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewInboxRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewInboxRuleset(response: ResponseContext): Promise<InboxRulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetDto", ""
            ) as InboxRulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetDto", ""
            ) as InboxRulesetDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInboxRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteInboxRuleset(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteInboxRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteInboxRulesets(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxRuleset(response: ResponseContext): Promise<InboxRulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetDto", ""
            ) as InboxRulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetDto", ""
            ) as InboxRulesetDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getInboxRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getInboxRulesets(response: ResponseContext): Promise<PageInboxRulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageInboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageInboxRulesetDto", ""
            ) as PageInboxRulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageInboxRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageInboxRulesetDto", ""
            ) as PageInboxRulesetDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testInboxRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testInboxRuleset(response: ResponseContext): Promise<InboxRulesetTestResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testInboxRulesetsForInbox
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testInboxRulesetsForInbox(response: ResponseContext): Promise<InboxRulesetTestResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testNewInboxRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testNewInboxRuleset(response: ResponseContext): Promise<InboxRulesetTestResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: InboxRulesetTestResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "InboxRulesetTestResult", ""
            ) as InboxRulesetTestResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
