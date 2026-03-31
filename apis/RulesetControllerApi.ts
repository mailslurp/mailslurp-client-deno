// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateRulesetOptions } from '../models/CreateRulesetOptions.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { PageRulesetDto } from '../models/PageRulesetDto.ts';
import { RulesetDto } from '../models/RulesetDto.ts';
import { RulesetTestOptions } from '../models/RulesetTestOptions.ts';
import { TestInboxRulesetSendingOptions } from '../models/TestInboxRulesetSendingOptions.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';
import { TestRulesetReceivingOptions } from '../models/TestRulesetReceivingOptions.ts';
import { TestRulesetReceivingResult } from '../models/TestRulesetReceivingResult.ts';
import { TestRulesetSendingResult } from '../models/TestRulesetSendingResult.ts';

/**
 * no description
 */
export class RulesetControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a new inbox or phone number rule for forwarding, blocking, and allowing emails or SMS when sending and receiving
     * Create a ruleset
     * @param createRulesetOptions 
     * @param inboxId Inbox id to attach ruleset to
     * @param phoneId Phone id to attach ruleset to
     */
    public async createNewRuleset(createRulesetOptions: CreateRulesetOptions, inboxId?: string, phoneId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createRulesetOptions' is not null or undefined
        if (createRulesetOptions === null || createRulesetOptions === undefined) {
            throw new RequiredError('Required parameter createRulesetOptions was null or undefined when calling createNewRuleset.');
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
        if (phoneId !== undefined) {
            requestContext.setQueryParam("phoneId", ObjectSerializer.serialize(phoneId, "string", "uuid"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(createRulesetOptions, "CreateRulesetOptions", ""),
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
     * Delete ruleset
     * Delete a ruleset
     * @param id ID of ruleset
     */
    public async deleteRuleset(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling deleteRuleset.');
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
     * Delete rulesets. Accepts optional inboxId or phoneId filters.
     * Delete rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     * @param phoneId 
     */
    public async deleteRulesets(inboxId?: string, phoneId?: string, options?: Configuration): Promise<RequestContext> {
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
        if (phoneId !== undefined) {
            requestContext.setQueryParam("phoneId", ObjectSerializer.serialize(phoneId, "string", "uuid"));
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
     * Get ruleset
     * Get a ruleset
     * @param id ID of ruleset
     */
    public async getRuleset(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getRuleset.');
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
     * List all rulesets attached to an inbox or phone or account
     * List rulesets block and allow lists
     * @param inboxId Optional inbox id to get rulesets from
     * @param phoneId Optional phone id to get rulesets from
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public async getRulesets(inboxId?: string, phoneId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<RequestContext> {
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
        if (phoneId !== undefined) {
            requestContext.setQueryParam("phoneId", ObjectSerializer.serialize(phoneId, "string", "uuid"));
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
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param rulesetTestOptions 
     */
    public async testInboxRulesetsForInbox(inboxId: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'inboxId' is not null or undefined
        if (inboxId === null || inboxId === undefined) {
            throw new RequiredError('Required parameter inboxId was null or undefined when calling testInboxRulesetsForInbox.');
        }


        // verify required parameter 'rulesetTestOptions' is not null or undefined
        if (rulesetTestOptions === null || rulesetTestOptions === undefined) {
            throw new RequiredError('Required parameter rulesetTestOptions was null or undefined when calling testInboxRulesetsForInbox.');
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
            ObjectSerializer.serialize(rulesetTestOptions, "RulesetTestOptions", ""),
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
     * Test new ruleset
     * Test new ruleset
     * @param testNewInboxRulesetOptions 
     */
    public async testNewRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testNewInboxRulesetOptions' is not null or undefined
        if (testNewInboxRulesetOptions === null || testNewInboxRulesetOptions === undefined) {
            throw new RequiredError('Required parameter testNewInboxRulesetOptions was null or undefined when calling testNewRuleset.');
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

    /**
     * Test an inbox or phone ruleset
     * Test a ruleset
     * @param id ID of ruleset
     * @param rulesetTestOptions 
     */
    public async testRuleset(id: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling testRuleset.');
        }


        // verify required parameter 'rulesetTestOptions' is not null or undefined
        if (rulesetTestOptions === null || rulesetTestOptions === undefined) {
            throw new RequiredError('Required parameter rulesetTestOptions was null or undefined when calling testRuleset.');
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
            ObjectSerializer.serialize(rulesetTestOptions, "RulesetTestOptions", ""),
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
     * Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets or test if phone number can receive SMS
     * Test receiving with rulesets
     * @param testRulesetReceivingOptions 
     */
    public async testRulesetReceiving(testRulesetReceivingOptions: TestRulesetReceivingOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testRulesetReceivingOptions' is not null or undefined
        if (testRulesetReceivingOptions === null || testRulesetReceivingOptions === undefined) {
            throw new RequiredError('Required parameter testRulesetReceivingOptions was null or undefined when calling testRulesetReceiving.');
        }


        // Path Params
        const localVarPath = '/rulesets/test-receiving';

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
            ObjectSerializer.serialize(testRulesetReceivingOptions, "TestRulesetReceivingOptions", ""),
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
     * Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets or whether a phone number can send SMS
     * Test sending with rulesets
     * @param testInboxRulesetSendingOptions 
     */
    public async testRulesetSending(testInboxRulesetSendingOptions: TestInboxRulesetSendingOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'testInboxRulesetSendingOptions' is not null or undefined
        if (testInboxRulesetSendingOptions === null || testInboxRulesetSendingOptions === undefined) {
            throw new RequiredError('Required parameter testInboxRulesetSendingOptions was null or undefined when calling testRulesetSending.');
        }


        // Path Params
        const localVarPath = '/rulesets/test-sending';

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
            ObjectSerializer.serialize(testInboxRulesetSendingOptions, "TestInboxRulesetSendingOptions", ""),
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

export class RulesetControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createNewRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createNewRuleset(response: ResponseContext): Promise<RulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RulesetDto", ""
            ) as RulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RulesetDto", ""
            ) as RulesetDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRuleset(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteRulesets(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRuleset(response: ResponseContext): Promise<RulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: RulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RulesetDto", ""
            ) as RulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: RulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "RulesetDto", ""
            ) as RulesetDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getRulesets
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getRulesets(response: ResponseContext): Promise<PageRulesetDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageRulesetDto", ""
            ) as PageRulesetDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageRulesetDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageRulesetDto", ""
            ) as PageRulesetDto;
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
     * @params response Response returned by the server for a request to testNewRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testNewRuleset(response: ResponseContext): Promise<InboxRulesetTestResult > {
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
     * @params response Response returned by the server for a request to testRuleset
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testRuleset(response: ResponseContext): Promise<InboxRulesetTestResult > {
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
     * @params response Response returned by the server for a request to testRulesetReceiving
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testRulesetReceiving(response: ResponseContext): Promise<TestRulesetReceivingResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TestRulesetReceivingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestRulesetReceivingResult", ""
            ) as TestRulesetReceivingResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TestRulesetReceivingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestRulesetReceivingResult", ""
            ) as TestRulesetReceivingResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testRulesetSending
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testRulesetSending(response: ResponseContext): Promise<TestRulesetSendingResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TestRulesetSendingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestRulesetSendingResult", ""
            ) as TestRulesetSendingResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TestRulesetSendingResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TestRulesetSendingResult", ""
            ) as TestRulesetSendingResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
