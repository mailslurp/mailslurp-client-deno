// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AITranformCreateOptions } from '../models/AITranformCreateOptions.ts';
import { AITransformDto } from '../models/AITransformDto.ts';
import { AITransformMappingDto } from '../models/AITransformMappingDto.ts';
import { AITransformResultDto } from '../models/AITransformResultDto.ts';
import { CreateAITransformerMappingOptions } from '../models/CreateAITransformerMappingOptions.ts';
import { GenerateStructuredContentAttachmentOptions } from '../models/GenerateStructuredContentAttachmentOptions.ts';
import { GenerateStructuredContentEmailOptions } from '../models/GenerateStructuredContentEmailOptions.ts';
import { GenerateStructuredContentSmsOptions } from '../models/GenerateStructuredContentSmsOptions.ts';
import { PageAITransformMappingProjection } from '../models/PageAITransformMappingProjection.ts';
import { PageAITransformProjection } from '../models/PageAITransformProjection.ts';
import { PageAITransformResultProjection } from '../models/PageAITransformResultProjection.ts';
import { StructuredContentResultDto } from '../models/StructuredContentResultDto.ts';
import { StructuredOutputSchema } from '../models/StructuredOutputSchema.ts';
import { StructuredOutputSchemaValidation } from '../models/StructuredOutputSchemaValidation.ts';

/**
 * no description
 */
export class AIControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * List all AI transforms
     * List transformers
     * @param options 
     * @param page 
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async createTransformer(options: AITranformCreateOptions, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'options' is not null or undefined
        if (options === null || options === undefined) {
            throw new RequiredError('Required parameter options was null or undefined when calling createTransformer.');
        }





        // Path Params
        const localVarPath = '/ai/transformer';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (page !== undefined) {
            requestContext.setQueryParam("page", ObjectSerializer.serialize(page, "number", "int32"));
        }
        if (size !== undefined) {
            requestContext.setQueryParam("size", ObjectSerializer.serialize(size, "number", "int32"));
        }
        if (sort !== undefined) {
            requestContext.setQueryParam("sort", ObjectSerializer.serialize(sort, "'ASC' | 'DESC'", ""));
        }
        if (options !== undefined) {
            requestContext.setQueryParam("options", ObjectSerializer.serialize(options, "AITranformCreateOptions", ""));
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
     * Save an AI transform instructions and schema for use with webhooks and automations
     * Create a transformer for reuse in automations
     * @param aITranformCreateOptions 
     */
    public async createTransformer1(aITranformCreateOptions: AITranformCreateOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'aITranformCreateOptions' is not null or undefined
        if (aITranformCreateOptions === null || aITranformCreateOptions === undefined) {
            throw new RequiredError('Required parameter aITranformCreateOptions was null or undefined when calling createTransformer1.');
        }


        // Path Params
        const localVarPath = '/ai/transformer';

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
            ObjectSerializer.serialize(aITranformCreateOptions, "AITranformCreateOptions", ""),
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
     * Create AI transformer mappings to other entities
     * Create transformer mapping
     * @param createAITransformerMappingOptions 
     */
    public async createTransformerMappings(createAITransformerMappingOptions: CreateAITransformerMappingOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createAITransformerMappingOptions' is not null or undefined
        if (createAITransformerMappingOptions === null || createAITransformerMappingOptions === undefined) {
            throw new RequiredError('Required parameter createAITransformerMappingOptions was null or undefined when calling createTransformerMappings.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/mappings';

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
            ObjectSerializer.serialize(createAITransformerMappingOptions, "CreateAITransformerMappingOptions", ""),
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
     * Delete an AI transformer and schemas by ID
     * Delete a transformer
     * @param id 
     */
    public async deleteTransformer(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling deleteTransformer.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/{id}'
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
     * Delete an AI transformer mapping
     * Delete transformer mapping
     * @param id ID of transform mapping
     */
    public async deleteTransformerMapping(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling deleteTransformerMapping.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/mappings/{id}'
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
     * Delete all AI transformers and schemas
     * Delete all transformers
     */
    public async deleteTransformers(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/ai/transformer';

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
     * Use output schemas to extract data from an attachment using AI
     * Generate structured content for an attachment
     * @param generateStructuredContentAttachmentOptions 
     */
    public async generateStructuredContentFromAttachment(generateStructuredContentAttachmentOptions: GenerateStructuredContentAttachmentOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateStructuredContentAttachmentOptions' is not null or undefined
        if (generateStructuredContentAttachmentOptions === null || generateStructuredContentAttachmentOptions === undefined) {
            throw new RequiredError('Required parameter generateStructuredContentAttachmentOptions was null or undefined when calling generateStructuredContentFromAttachment.');
        }


        // Path Params
        const localVarPath = '/ai/structured-content/attachment';

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
            ObjectSerializer.serialize(generateStructuredContentAttachmentOptions, "GenerateStructuredContentAttachmentOptions", ""),
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
     * Use output schemas to extract data from an email using AI
     * Generate structured content for an email
     * @param generateStructuredContentEmailOptions 
     */
    public async generateStructuredContentFromEmail(generateStructuredContentEmailOptions: GenerateStructuredContentEmailOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateStructuredContentEmailOptions' is not null or undefined
        if (generateStructuredContentEmailOptions === null || generateStructuredContentEmailOptions === undefined) {
            throw new RequiredError('Required parameter generateStructuredContentEmailOptions was null or undefined when calling generateStructuredContentFromEmail.');
        }


        // Path Params
        const localVarPath = '/ai/structured-content/email';

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
            ObjectSerializer.serialize(generateStructuredContentEmailOptions, "GenerateStructuredContentEmailOptions", ""),
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
     * Use output schemas to extract data from an SMS using AI
     * Generate structured content for a TXT message
     * @param generateStructuredContentSmsOptions 
     */
    public async generateStructuredContentFromSms(generateStructuredContentSmsOptions: GenerateStructuredContentSmsOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'generateStructuredContentSmsOptions' is not null or undefined
        if (generateStructuredContentSmsOptions === null || generateStructuredContentSmsOptions === undefined) {
            throw new RequiredError('Required parameter generateStructuredContentSmsOptions was null or undefined when calling generateStructuredContentFromSms.');
        }


        // Path Params
        const localVarPath = '/ai/structured-content/sms';

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
            ObjectSerializer.serialize(generateStructuredContentSmsOptions, "GenerateStructuredContentSmsOptions", ""),
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
     * Get AI transformer and schemas by ID
     * Get a transformer
     * @param id 
     */
    public async getTransformer(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getTransformer.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/{id}'
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
     * Get an AI transformer mapping
     * Get transformer mapping
     * @param id ID of transform mapping
     */
    public async getTransformerMapping(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getTransformerMapping.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/mappings/{id}'
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
     * Get AI transformer mappings to other entities
     * Get transformer mappings
     * @param aiTransformId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getTransformerMappings(aiTransformId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;







        // Path Params
        const localVarPath = '/ai/transformer/mappings';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (aiTransformId !== undefined) {
            requestContext.setQueryParam("aiTransformId", ObjectSerializer.serialize(aiTransformId, "string", "uuid"));
        }
        if (entityId !== undefined) {
            requestContext.setQueryParam("entityId", ObjectSerializer.serialize(entityId, "string", "uuid"));
        }
        if (entityType !== undefined) {
            requestContext.setQueryParam("entityType", ObjectSerializer.serialize(entityType, "'INBOX' | 'PHONE'", ""));
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
     * Get AI transformer result
     * Get transformer result
     * @param id ID of transform result
     */
    public async getTransformerResult(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getTransformerResult.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/results/{id}'
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
     * Get AI transformer results
     * Get transformer results
     * @param aiTransformId 
     * @param aiTransformMappingId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getTransformerResults(aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;








        // Path Params
        const localVarPath = '/ai/transformer/results';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (aiTransformId !== undefined) {
            requestContext.setQueryParam("aiTransformId", ObjectSerializer.serialize(aiTransformId, "string", "uuid"));
        }
        if (aiTransformMappingId !== undefined) {
            requestContext.setQueryParam("aiTransformMappingId", ObjectSerializer.serialize(aiTransformMappingId, "string", "uuid"));
        }
        if (entityId !== undefined) {
            requestContext.setQueryParam("entityId", ObjectSerializer.serialize(entityId, "string", "uuid"));
        }
        if (entityType !== undefined) {
            requestContext.setQueryParam("entityType", ObjectSerializer.serialize(entityType, "'INBOX' | 'PHONE'", ""));
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
     * Check if a schema is valid and can be used to extract data using AI
     * Validate structured content schema
     * @param structuredOutputSchema 
     */
    public async validateStructuredOutputSchema(structuredOutputSchema: StructuredOutputSchema, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'structuredOutputSchema' is not null or undefined
        if (structuredOutputSchema === null || structuredOutputSchema === undefined) {
            throw new RequiredError('Required parameter structuredOutputSchema was null or undefined when calling validateStructuredOutputSchema.');
        }


        // Path Params
        const localVarPath = '/ai/structured-content/validate';

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
            ObjectSerializer.serialize(structuredOutputSchema, "StructuredOutputSchema", ""),
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

export class AIControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTransformer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTransformer(response: ResponseContext): Promise<PageAITransformProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageAITransformProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformProjection", ""
            ) as PageAITransformProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageAITransformProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformProjection", ""
            ) as PageAITransformProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTransformer1
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTransformer1(response: ResponseContext): Promise<AITransformDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformDto", ""
            ) as AITransformDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformDto", ""
            ) as AITransformDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTransformerMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTransformerMappings(response: ResponseContext): Promise<AITransformMappingDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformMappingDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingDto", ""
            ) as AITransformMappingDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformMappingDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingDto", ""
            ) as AITransformMappingDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteTransformer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransformer(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteTransformerMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransformerMapping(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteTransformers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransformers(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to generateStructuredContentFromAttachment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateStructuredContentFromAttachment(response: ResponseContext): Promise<StructuredContentResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateStructuredContentFromEmail
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateStructuredContentFromEmail(response: ResponseContext): Promise<StructuredContentResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to generateStructuredContentFromSms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async generateStructuredContentFromSms(response: ResponseContext): Promise<StructuredContentResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StructuredContentResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredContentResultDto", ""
            ) as StructuredContentResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformer(response: ResponseContext): Promise<AITransformDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformDto", ""
            ) as AITransformDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformDto", ""
            ) as AITransformDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformerMapping
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformerMapping(response: ResponseContext): Promise<AITransformMappingDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformMappingDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingDto", ""
            ) as AITransformMappingDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformMappingDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingDto", ""
            ) as AITransformMappingDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformerMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformerMappings(response: ResponseContext): Promise<PageAITransformMappingProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageAITransformMappingProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformMappingProjection", ""
            ) as PageAITransformMappingProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageAITransformMappingProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformMappingProjection", ""
            ) as PageAITransformMappingProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformerResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformerResult(response: ResponseContext): Promise<AITransformResultDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformResultDto", ""
            ) as AITransformResultDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformResultDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformResultDto", ""
            ) as AITransformResultDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformerResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformerResults(response: ResponseContext): Promise<PageAITransformResultProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageAITransformResultProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformResultProjection", ""
            ) as PageAITransformResultProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageAITransformResultProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAITransformResultProjection", ""
            ) as PageAITransformResultProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validateStructuredOutputSchema
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validateStructuredOutputSchema(response: ResponseContext): Promise<StructuredOutputSchemaValidation > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: StructuredOutputSchemaValidation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredOutputSchemaValidation", ""
            ) as StructuredOutputSchemaValidation;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: StructuredOutputSchemaValidation = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "StructuredOutputSchemaValidation", ""
            ) as StructuredOutputSchemaValidation;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
