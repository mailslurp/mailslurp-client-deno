// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AIMessageModelDto } from '../models/AIMessageModelDto.ts';
import { AIMessageResult } from '../models/AIMessageResult.ts';
import { AIMessagesResult } from '../models/AIMessagesResult.ts';
import { AITransformCreateOptions } from '../models/AITransformCreateOptions.ts';
import { AITransformDto } from '../models/AITransformDto.ts';
import { AITransformMappingDto } from '../models/AITransformMappingDto.ts';
import { AITransformMappingMatchResult } from '../models/AITransformMappingMatchResult.ts';
import { AITransformResultDto } from '../models/AITransformResultDto.ts';
import { AssertAIMessageOptions } from '../models/AssertAIMessageOptions.ts';
import { ConditionalStructuredContentResult } from '../models/ConditionalStructuredContentResult.ts';
import { CreateAITransformerMappingOptions } from '../models/CreateAITransformerMappingOptions.ts';
import { ExportTransformerOptions } from '../models/ExportTransformerOptions.ts';
import { ExportTransformerResponse } from '../models/ExportTransformerResponse.ts';
import { ExportTransformerResultJobDto } from '../models/ExportTransformerResultJobDto.ts';
import { ExtractAIMessageOptions } from '../models/ExtractAIMessageOptions.ts';
import { GenerateStructuredContentAttachmentOptions } from '../models/GenerateStructuredContentAttachmentOptions.ts';
import { GenerateStructuredContentEmailOptions } from '../models/GenerateStructuredContentEmailOptions.ts';
import { GenerateStructuredContentSmsOptions } from '../models/GenerateStructuredContentSmsOptions.ts';
import { InvokeTransformerOptions } from '../models/InvokeTransformerOptions.ts';
import { PageAITransformMappingProjection } from '../models/PageAITransformMappingProjection.ts';
import { PageAITransformProjection } from '../models/PageAITransformProjection.ts';
import { PageAITransformResultProjection } from '../models/PageAITransformResultProjection.ts';
import { PageTableData } from '../models/PageTableData.ts';
import { StructuredContentResultDto } from '../models/StructuredContentResultDto.ts';
import { StructuredOutputSchema } from '../models/StructuredOutputSchema.ts';
import { StructuredOutputSchemaValidation } from '../models/StructuredOutputSchemaValidation.ts';
import { WaitForAIMessageOptions } from '../models/WaitForAIMessageOptions.ts';
import { WaitForAIMessagesOptions } from '../models/WaitForAIMessagesOptions.ts';

/**
 * no description
 */
export class AIControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Check named natural-language assertions against an existing email or SMS. Returns PASS, FAIL, INCONCLUSIVE or a distinct operational status. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Check named natural-language assertions against an existing email or SMS
     * @param assertAIMessageOptions 
     * @param idempotencyKey 
     */
    public async assertAIMessage(assertAIMessageOptions: AssertAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'assertAIMessageOptions' is not null or undefined
        if (assertAIMessageOptions === null || assertAIMessageOptions === undefined) {
            throw new RequiredError('Required parameter assertAIMessageOptions was null or undefined when calling assertAIMessage.');
        }



        // Path Params
        const localVarPath = '/ai/messages/assert';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(assertAIMessageOptions, "AssertAIMessageOptions", ""),
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
     * Save an AI transform instructions and schema for use with webhooks and automations
     * Create a transformer for reuse in automations
     * @param aITransformCreateOptions 
     */
    public async createTransformer(aITransformCreateOptions: AITransformCreateOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'aITransformCreateOptions' is not null or undefined
        if (aITransformCreateOptions === null || aITransformCreateOptions === undefined) {
            throw new RequiredError('Required parameter aITransformCreateOptions was null or undefined when calling createTransformer.');
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
            ObjectSerializer.serialize(aITransformCreateOptions, "AITransformCreateOptions", ""),
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
     * Delete all AI transformer mappings
     * Delete all transformer mapping
     */
    public async deleteAllTransformerMappings(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/ai/transformer/mappings';

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
     * Delete a saved AI transformer result owned by your account.
     * Delete a transformer result
     * @param id 
     */
    public async deleteTransformerResult(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling deleteTransformerResult.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/results/{id}'
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
     * Delete your account's saved AI results, optionally for one transformer.
     * Delete transformer results
     * @param aiTransformId 
     */
    public async deleteTransformerResults(aiTransformId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;


        // Path Params
        const localVarPath = '/ai/transformer/results';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (aiTransformId !== undefined) {
            requestContext.setQueryParam("aiTransformId", ObjectSerializer.serialize(aiTransformId, "string", "uuid"));
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
     * Export AI transformer results in formats such as Excel, CSV, XML etc.
     * Export transformer results
     * @param exportTransformerOptions 
     */
    public async exportTransformerResults(exportTransformerOptions: ExportTransformerOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'exportTransformerOptions' is not null or undefined
        if (exportTransformerOptions === null || exportTransformerOptions === undefined) {
            throw new RequiredError('Required parameter exportTransformerOptions was null or undefined when calling exportTransformerResults.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/results/export';

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
            ObjectSerializer.serialize(exportTransformerOptions, "ExportTransformerOptions", ""),
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
     * Extract schema-validated data from an existing email or SMS with verified source evidence. Missing or ambiguous data is not invented. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Extract schema-validated data from an existing email or SMS with verified source evidence
     * @param extractAIMessageOptions 
     * @param idempotencyKey 
     */
    public async extractAIMessage(extractAIMessageOptions: ExtractAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'extractAIMessageOptions' is not null or undefined
        if (extractAIMessageOptions === null || extractAIMessageOptions === undefined) {
            throw new RequiredError('Required parameter extractAIMessageOptions was null or undefined when calling extractAIMessage.');
        }



        // Path Params
        const localVarPath = '/ai/messages/extract';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(extractAIMessageOptions, "ExtractAIMessageOptions", ""),
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
     * Discover enum model selectors, resolved provider models, evaluator versions and token multipliers. Pinned models never silently fall back.
     * List supported message-testing AI models
     */
    public async getAIMessageModels(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/ai/models';

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
     * Get the job status for an export
     * Get export transformer results job
     * @param id 
     */
    public async getExportTransformerResultsJob(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getExportTransformerResultsJob.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/results/export/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
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
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     * @param aiTransformId 
     * @param aiTransformMappingId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getTransformerResults(emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;











        // Path Params
        const localVarPath = '/ai/transformer/results';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (smsId !== undefined) {
            requestContext.setQueryParam("smsId", ObjectSerializer.serialize(smsId, "string", "uuid"));
        }
        if (attachmentId !== undefined) {
            requestContext.setQueryParam("attachmentId", ObjectSerializer.serialize(attachmentId, "string", ""));
        }
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
     * Get AI transformer results in table format
     * Get transformer results table
     * @param includeMetaData 
     * @param flattenArraysToRows 
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     * @param aiTransformId 
     * @param aiTransformMappingId 
     * @param entityId 
     * @param entityType 
     * @param page 
     * @param size Optional page size. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getTransformerResultsTable(includeMetaData: boolean, flattenArraysToRows: boolean, emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'includeMetaData' is not null or undefined
        if (includeMetaData === null || includeMetaData === undefined) {
            throw new RequiredError('Required parameter includeMetaData was null or undefined when calling getTransformerResultsTable.');
        }


        // verify required parameter 'flattenArraysToRows' is not null or undefined
        if (flattenArraysToRows === null || flattenArraysToRows === undefined) {
            throw new RequiredError('Required parameter flattenArraysToRows was null or undefined when calling getTransformerResultsTable.');
        }












        // Path Params
        const localVarPath = '/ai/transformer/results/table';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (smsId !== undefined) {
            requestContext.setQueryParam("smsId", ObjectSerializer.serialize(smsId, "string", "uuid"));
        }
        if (attachmentId !== undefined) {
            requestContext.setQueryParam("attachmentId", ObjectSerializer.serialize(attachmentId, "string", ""));
        }
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
        if (includeMetaData !== undefined) {
            requestContext.setQueryParam("includeMetaData", ObjectSerializer.serialize(includeMetaData, "boolean", ""));
        }
        if (flattenArraysToRows !== undefined) {
            requestContext.setQueryParam("flattenArraysToRows", ObjectSerializer.serialize(flattenArraysToRows, "boolean", ""));
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
     * List all AI transforms
     * List transformers
     * @param page 
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param include Optional list of IDs to include in result
     */
    public async getTransformers(page?: number, size?: number, sort?: 'ASC' | 'DESC', include?: Array<string>, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





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
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<string>", "uuid"));
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
     * Execute an AI transformer to generate structured content
     * Invoke a transformer
     * @param invokeTransformerOptions 
     */
    public async invokeTransformer(invokeTransformerOptions: InvokeTransformerOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'invokeTransformerOptions' is not null or undefined
        if (invokeTransformerOptions === null || invokeTransformerOptions === undefined) {
            throw new RequiredError('Required parameter invokeTransformerOptions was null or undefined when calling invokeTransformer.');
        }


        // Path Params
        const localVarPath = '/ai/transformer/invoke';

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
            ObjectSerializer.serialize(invokeTransformerOptions, "InvokeTransformerOptions", ""),
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
     * Evaluate transform mapping match conditions for given email, sms, or attachment
     * Test transformer mapping match result
     * @param id ID of transform mapping
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     */
    public async testTransformerMappingMatch(id: string, emailId?: string, smsId?: string, attachmentId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling testTransformerMappingMatch.');
        }





        // Path Params
        const localVarPath = '/ai/transformer/mappings/{id}/match'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (smsId !== undefined) {
            requestContext.setQueryParam("smsId", ObjectSerializer.serialize(smsId, "string", "uuid"));
        }
        if (attachmentId !== undefined) {
            requestContext.setQueryParam("attachmentId", ObjectSerializer.serialize(attachmentId, "string", ""));
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

    /**
     * Find a message across explicit inboxes or phones, then assert and extract from that same message. Checks never select a replacement message after failure. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Find a message across explicit inboxes or phones, then assert and extract from that same message
     * @param waitForAIMessageOptions 
     * @param idempotencyKey 
     */
    public async waitForAIMessage(waitForAIMessageOptions: WaitForAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'waitForAIMessageOptions' is not null or undefined
        if (waitForAIMessageOptions === null || waitForAIMessageOptions === undefined) {
            throw new RequiredError('Required parameter waitForAIMessageOptions was null or undefined when calling waitForAIMessage.');
        }



        // Path Params
        const localVarPath = '/ai/messages/wait';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(waitForAIMessageOptions, "WaitForAIMessageOptions", ""),
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
     * Wait for all named email and SMS expectations under one shared deadline and AI token budget. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Wait for all named email and SMS expectations under one shared deadline and AI token budget
     * @param waitForAIMessagesOptions 
     * @param idempotencyKey 
     */
    public async waitForAIMessages(waitForAIMessagesOptions: WaitForAIMessagesOptions, idempotencyKey?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'waitForAIMessagesOptions' is not null or undefined
        if (waitForAIMessagesOptions === null || waitForAIMessagesOptions === undefined) {
            throw new RequiredError('Required parameter waitForAIMessagesOptions was null or undefined when calling waitForAIMessages.');
        }



        // Path Params
        const localVarPath = '/ai/messages/wait-all';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("Idempotency-Key", ObjectSerializer.serialize(idempotencyKey, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(waitForAIMessagesOptions, "WaitForAIMessagesOptions", ""),
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
     * @params response Response returned by the server for a request to assertAIMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async assertAIMessage(response: ResponseContext): Promise<AIMessageResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTransformer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTransformer(response: ResponseContext): Promise<AITransformDto > {
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
     * @params response Response returned by the server for a request to deleteAllTransformerMappings
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllTransformerMappings(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteTransformerResult
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransformerResult(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteTransformerResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteTransformerResults(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to exportTransformerResults
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async exportTransformerResults(response: ResponseContext): Promise<ExportTransformerResponse > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportTransformerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportTransformerResponse", ""
            ) as ExportTransformerResponse;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportTransformerResponse = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportTransformerResponse", ""
            ) as ExportTransformerResponse;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to extractAIMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async extractAIMessage(response: ResponseContext): Promise<AIMessageResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
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
     * @params response Response returned by the server for a request to getAIMessageModels
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAIMessageModels(response: ResponseContext): Promise<Array<AIMessageModelDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<AIMessageModelDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AIMessageModelDto>", ""
            ) as Array<AIMessageModelDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<AIMessageModelDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<AIMessageModelDto>", ""
            ) as Array<AIMessageModelDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getExportTransformerResultsJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getExportTransformerResultsJob(response: ResponseContext): Promise<ExportTransformerResultJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ExportTransformerResultJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportTransformerResultJobDto", ""
            ) as ExportTransformerResultJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ExportTransformerResultJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ExportTransformerResultJobDto", ""
            ) as ExportTransformerResultJobDto;
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
     * @params response Response returned by the server for a request to getTransformerResultsTable
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformerResultsTable(response: ResponseContext): Promise<PageTableData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageTableData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageTableData", ""
            ) as PageTableData;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageTableData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageTableData", ""
            ) as PageTableData;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTransformers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTransformers(response: ResponseContext): Promise<PageAITransformProjection > {
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
     * @params response Response returned by the server for a request to invokeTransformer
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async invokeTransformer(response: ResponseContext): Promise<ConditionalStructuredContentResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConditionalStructuredContentResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionalStructuredContentResult", ""
            ) as ConditionalStructuredContentResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConditionalStructuredContentResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConditionalStructuredContentResult", ""
            ) as ConditionalStructuredContentResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testTransformerMappingMatch
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testTransformerMappingMatch(response: ResponseContext): Promise<AITransformMappingMatchResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AITransformMappingMatchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingMatchResult", ""
            ) as AITransformMappingMatchResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AITransformMappingMatchResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AITransformMappingMatchResult", ""
            ) as AITransformMappingMatchResult;
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

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to waitForAIMessage
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForAIMessage(response: ResponseContext): Promise<AIMessageResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AIMessageResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessageResult", ""
            ) as AIMessageResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to waitForAIMessages
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async waitForAIMessages(response: ResponseContext): Promise<AIMessagesResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AIMessagesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessagesResult", ""
            ) as AIMessagesResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AIMessagesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AIMessagesResult", ""
            ) as AIMessagesResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
