// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AcquirePhonePoolLeaseOptions } from '../models/AcquirePhonePoolLeaseOptions.ts';
import { AddPhonePoolNumbersOptions } from '../models/AddPhonePoolNumbersOptions.ts';
import { AvailablePhoneNumbersResult } from '../models/AvailablePhoneNumbersResult.ts';
import { ConsentStatusDto } from '../models/ConsentStatusDto.ts';
import { CreateEmergencyAddressOptions } from '../models/CreateEmergencyAddressOptions.ts';
import { CreatePhoneNumberOptions } from '../models/CreatePhoneNumberOptions.ts';
import { CreatePhonePoolOptions } from '../models/CreatePhonePoolOptions.ts';
import { CreatePhoneProvisioningJobOptions } from '../models/CreatePhoneProvisioningJobOptions.ts';
import { EmergencyAddress } from '../models/EmergencyAddress.ts';
import { EmergencyAddressDto } from '../models/EmergencyAddressDto.ts';
import { EmptyResponseDto } from '../models/EmptyResponseDto.ts';
import { GetOrCreatePhonePoolOptions } from '../models/GetOrCreatePhonePoolOptions.ts';
import { PagePhoneMessageThreadItemProjection } from '../models/PagePhoneMessageThreadItemProjection.ts';
import { PagePhoneMessageThreadProjection } from '../models/PagePhoneMessageThreadProjection.ts';
import { PagePhoneNumberProjection } from '../models/PagePhoneNumberProjection.ts';
import { PagePhoneNumberReleaseProjection } from '../models/PagePhoneNumberReleaseProjection.ts';
import { PageSentSmsProjection } from '../models/PageSentSmsProjection.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { PhoneNumberDto } from '../models/PhoneNumberDto.ts';
import { PhoneNumberLineTypeLookupDto } from '../models/PhoneNumberLineTypeLookupDto.ts';
import { PhoneNumberReleaseProjection } from '../models/PhoneNumberReleaseProjection.ts';
import { PhoneNumberValidationDto } from '../models/PhoneNumberValidationDto.ts';
import { PhonePlanAvailability } from '../models/PhonePlanAvailability.ts';
import { PhonePlanDto } from '../models/PhonePlanDto.ts';
import { PhonePoolDetailDto } from '../models/PhonePoolDetailDto.ts';
import { PhonePoolDto } from '../models/PhonePoolDto.ts';
import { PhonePoolLeaseDto } from '../models/PhonePoolLeaseDto.ts';
import { PhoneProviderCapabilitiesResult } from '../models/PhoneProviderCapabilitiesResult.ts';
import { PhoneProvisioningJobDto } from '../models/PhoneProvisioningJobDto.ts';
import { PhoneSmsPrepaidCreditDto } from '../models/PhoneSmsPrepaidCreditDto.ts';
import { PhoneSmsPrepaidCreditsDto } from '../models/PhoneSmsPrepaidCreditsDto.ts';
import { PhoneSummaryDto } from '../models/PhoneSummaryDto.ts';
import { SearchAvailablePhoneNumbersOptions } from '../models/SearchAvailablePhoneNumbersOptions.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { SetPhoneFavouritedOptions } from '../models/SetPhoneFavouritedOptions.ts';
import { SmsSendOptions } from '../models/SmsSendOptions.ts';
import { TestPhoneNumberOptions } from '../models/TestPhoneNumberOptions.ts';
import { UpdatePhoneNumberOptions } from '../models/UpdatePhoneNumberOptions.ts';
import { UpdatePhonePoolOptions } from '../models/UpdatePhonePoolOptions.ts';
import { ValidatePhoneNumberOptions } from '../models/ValidatePhoneNumberOptions.ts';

/**
 * no description
 */
export class PhoneControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Acquire an available phone number from the pool and mark it leased
     * Acquire phone pool lease
     * @param poolId 
     * @param acquirePhonePoolLeaseOptions 
     */
    public async acquirePhonePoolLease(poolId: string, acquirePhonePoolLeaseOptions: AcquirePhonePoolLeaseOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling acquirePhonePoolLease.');
        }


        // verify required parameter 'acquirePhonePoolLeaseOptions' is not null or undefined
        if (acquirePhonePoolLeaseOptions === null || acquirePhonePoolLeaseOptions === undefined) {
            throw new RequiredError('Required parameter acquirePhonePoolLeaseOptions was null or undefined when calling acquirePhonePoolLease.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}/leases'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

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
            ObjectSerializer.serialize(acquirePhonePoolLeaseOptions, "AcquirePhonePoolLeaseOptions", ""),
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
     * Add all active owned phone numbers to a pool
     * Add all phone numbers to phone pool
     * @param poolId 
     */
    public async addAllPhoneNumbersToPhonePool(poolId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling addAllPhoneNumbersToPhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}/numbers/add-all'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

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
     * Add one or more owned phone numbers to a pool
     * Add phone numbers to phone pool
     * @param poolId 
     * @param addPhonePoolNumbersOptions 
     */
    public async addPhoneNumbersToPhonePool(poolId: string, addPhonePoolNumbersOptions: AddPhonePoolNumbersOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling addPhoneNumbersToPhonePool.');
        }


        // verify required parameter 'addPhonePoolNumbersOptions' is not null or undefined
        if (addPhonePoolNumbersOptions === null || addPhonePoolNumbersOptions === undefined) {
            throw new RequiredError('Required parameter addPhonePoolNumbersOptions was null or undefined when calling addPhoneNumbersToPhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}/numbers'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

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
            ObjectSerializer.serialize(addPhonePoolNumbersOptions, "AddPhonePoolNumbersOptions", ""),
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
     * Add an emergency address to a phone number
     * Create an emergency address
     * @param createEmergencyAddressOptions 
     */
    public async createEmergencyAddress(createEmergencyAddressOptions: CreateEmergencyAddressOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createEmergencyAddressOptions' is not null or undefined
        if (createEmergencyAddressOptions === null || createEmergencyAddressOptions === undefined) {
            throw new RequiredError('Required parameter createEmergencyAddressOptions was null or undefined when calling createEmergencyAddress.');
        }


        // Path Params
        const localVarPath = '/phone/emergency-addresses';

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
            ObjectSerializer.serialize(createEmergencyAddressOptions, "CreateEmergencyAddressOptions", ""),
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
     * Create new phone number
     * Add phone number to your account. Only works if you have already added a plan and an initial phone number in your account and acknowledged the pricing and terms of service by enabling API phone creation.
     * @param createPhoneNumberOptions 
     */
    public async createPhoneNumber(createPhoneNumberOptions: CreatePhoneNumberOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPhoneNumberOptions' is not null or undefined
        if (createPhoneNumberOptions === null || createPhoneNumberOptions === undefined) {
            throw new RequiredError('Required parameter createPhoneNumberOptions was null or undefined when calling createPhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone';

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
            ObjectSerializer.serialize(createPhoneNumberOptions, "CreatePhoneNumberOptions", ""),
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
     * Create a reusable pool of phone numbers for coordinated leasing
     * Create phone pool
     * @param createPhonePoolOptions 
     */
    public async createPhonePool(createPhonePoolOptions: CreatePhonePoolOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPhonePoolOptions' is not null or undefined
        if (createPhonePoolOptions === null || createPhonePoolOptions === undefined) {
            throw new RequiredError('Required parameter createPhonePoolOptions was null or undefined when calling createPhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools';

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
            ObjectSerializer.serialize(createPhonePoolOptions, "CreatePhonePoolOptions", ""),
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
     * Create an advanced phone provisioning job from shortlisted numbers
     * Create a phone provisioning job
     * @param createPhoneProvisioningJobOptions 
     */
    public async createPhoneProvisioningJob(createPhoneProvisioningJobOptions: CreatePhoneProvisioningJobOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createPhoneProvisioningJobOptions' is not null or undefined
        if (createPhoneProvisioningJobOptions === null || createPhoneProvisioningJobOptions === undefined) {
            throw new RequiredError('Required parameter createPhoneProvisioningJobOptions was null or undefined when calling createPhoneProvisioningJob.');
        }


        // Path Params
        const localVarPath = '/phone/provisioning/jobs';

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
            ObjectSerializer.serialize(createPhoneProvisioningJobOptions, "CreatePhoneProvisioningJobOptions", ""),
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
     * Remove all phone number from account
     * Delete all phone numbers
     */
    public async deleteAllPhoneNumber(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/numbers';

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
     * Delete an emergency address
     * Delete an emergency address
     * @param addressId 
     */
    public async deleteEmergencyAddress(addressId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new RequiredError('Required parameter addressId was null or undefined when calling deleteEmergencyAddress.');
        }


        // Path Params
        const localVarPath = '/phone/emergency-addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)));

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
     * Delete all messages in an SMS thread
     * Delete messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     */
    public async deletePhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling deletePhoneMessageThreadItems.');
        }


        // verify required parameter 'otherNumber' is not null or undefined
        if (otherNumber === null || otherNumber === undefined) {
            throw new RequiredError('Required parameter otherNumber was null or undefined when calling deletePhoneMessageThreadItems.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/message-threads/{otherNumber}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'otherNumber' + '}', encodeURIComponent(String(otherNumber)));

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
     * Remove phone number from account
     * Delete a phone number
     * @param phoneNumberId 
     */
    public async deletePhoneNumber(phoneNumberId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling deletePhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Delete a phone pool and release any active leases from that pool
     * Delete phone pool
     * @param poolId 
     */
    public async deletePhonePool(poolId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling deletePhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

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
     * List all message threads for all phones
     * Get the latest messages for all phones
     * @param page 
     * @param size 
     */
    public async getAllPhoneMessageThreads(page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;



        // Path Params
        const localVarPath = '/phone/numbers/message-threads';

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
     * List released or deleted phone numbers
     * Get all phone number releases
     * @param page 
     * @param size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getAllPhoneNumberReleases(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/phone/releases';

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
     * Get the status of phone usage consent
     * Get consent status
     */
    public async getConsentStatus(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/consent';

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
     * Fetch an emergency address by ID
     * Get an emergency address
     * @param addressId 
     */
    public async getEmergencyAddress(addressId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'addressId' is not null or undefined
        if (addressId === null || addressId === undefined) {
            throw new RequiredError('Required parameter addressId was null or undefined when calling getEmergencyAddress.');
        }


        // Path Params
        const localVarPath = '/phone/emergency-addresses/{addressId}'
            .replace('{' + 'addressId' + '}', encodeURIComponent(String(addressId)));

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
     * List emergency addresses
     * Get emergency addresses
     */
    public async getEmergencyAddresses(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/emergency-addresses';

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
     * Get a phone pool by name or create it if it does not exist
     * Get or create phone pool
     * @param getOrCreatePhonePoolOptions 
     */
    public async getOrCreatePhonePool(getOrCreatePhonePoolOptions: GetOrCreatePhonePoolOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'getOrCreatePhonePoolOptions' is not null or undefined
        if (getOrCreatePhonePoolOptions === null || getOrCreatePhonePoolOptions === undefined) {
            throw new RequiredError('Required parameter getOrCreatePhonePoolOptions was null or undefined when calling getOrCreatePhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/get-or-create';

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
            ObjectSerializer.serialize(getOrCreatePhonePoolOptions, "GetOrCreatePhonePoolOptions", ""),
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
     * List message thread messages for a phone message thread
     * Get messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     * @param page 
     * @param size 
     */
    public async getPhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling getPhoneMessageThreadItems.');
        }


        // verify required parameter 'otherNumber' is not null or undefined
        if (otherNumber === null || otherNumber === undefined) {
            throw new RequiredError('Required parameter otherNumber was null or undefined when calling getPhoneMessageThreadItems.');
        }




        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/message-threads/{otherNumber}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)))
            .replace('{' + 'otherNumber' + '}', encodeURIComponent(String(otherNumber)));

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
     * List message threads for a phone
     * Get the latest message preview for a thread
     * @param phoneNumberId 
     * @param page 
     * @param size 
     */
    public async getPhoneMessageThreads(phoneNumberId: string, page?: number, size?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling getPhoneMessageThreads.');
        }




        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/message-threads'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Get a phone number by ID
     * Get a phone number by ID
     * @param phoneNumberId 
     */
    public async getPhoneNumber(phoneNumberId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling getPhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Get a phone number by name
     * Get a phone number by name
     * @param name 
     */
    public async getPhoneNumberByName(name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getPhoneNumberByName.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/by-name';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * Get a phone number by phone number
     * Get a phone number by phone number
     * @param phoneNumber 
     */
    public async getPhoneNumberByPhoneNumber(phoneNumber: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumber' is not null or undefined
        if (phoneNumber === null || phoneNumber === undefined) {
            throw new RequiredError('Required parameter phoneNumber was null or undefined when calling getPhoneNumberByPhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/by-phone-number';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (phoneNumber !== undefined) {
            requestContext.setQueryParam("phoneNumber", ObjectSerializer.serialize(phoneNumber, "string", ""));
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
     * Lookup line type intelligence for a phone number
     * Get line type intelligence for a phone number
     * @param validatePhoneNumberOptions 
     */
    public async getPhoneNumberLineTypeIntelligence(validatePhoneNumberOptions: ValidatePhoneNumberOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'validatePhoneNumberOptions' is not null or undefined
        if (validatePhoneNumberOptions === null || validatePhoneNumberOptions === undefined) {
            throw new RequiredError('Required parameter validatePhoneNumberOptions was null or undefined when calling getPhoneNumberLineTypeIntelligence.');
        }


        // Path Params
        const localVarPath = '/phone/validate/line-type-intelligence';

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
            ObjectSerializer.serialize(validatePhoneNumberOptions, "ValidatePhoneNumberOptions", ""),
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
     * Get a released or deleted phone numbers
     * Get phone number release
     * @param releaseId 
     */
    public async getPhoneNumberRelease(releaseId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError('Required parameter releaseId was null or undefined when calling getPhoneNumberRelease.');
        }


        // Path Params
        const localVarPath = '/phone/releases/{releaseId}'
            .replace('{' + 'releaseId' + '}', encodeURIComponent(String(releaseId)));

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
     * List phone numbers for account
     * Get phone numbers
     * @param phoneCountry Optional phone country
     * @param lineType Optional line type filter
     * @param carrierName Optional carrier name filter
     * @param mobileCountryCode Optional mobile country code filter
     * @param mobileNetworkCode Optional mobile network code filter
     * @param providerLabel Optional provider label filter such as T1 or T2
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param search Optional search filter
     * @param include Optional phoneIds to include in result
     * @param favourite Optionally filter results for favourites only
     */
    public async getPhoneNumbers(phoneCountry?: 'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE', lineType?: string, carrierName?: string, mobileCountryCode?: string, mobileNetworkCode?: string, providerLabel?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, include?: Array<string>, favourite?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;















        // Path Params
        const localVarPath = '/phone/numbers';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (phoneCountry !== undefined) {
            requestContext.setQueryParam("phoneCountry", ObjectSerializer.serialize(phoneCountry, "'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE'", ""));
        }
        if (lineType !== undefined) {
            requestContext.setQueryParam("lineType", ObjectSerializer.serialize(lineType, "string", ""));
        }
        if (carrierName !== undefined) {
            requestContext.setQueryParam("carrierName", ObjectSerializer.serialize(carrierName, "string", ""));
        }
        if (mobileCountryCode !== undefined) {
            requestContext.setQueryParam("mobileCountryCode", ObjectSerializer.serialize(mobileCountryCode, "string", ""));
        }
        if (mobileNetworkCode !== undefined) {
            requestContext.setQueryParam("mobileNetworkCode", ObjectSerializer.serialize(mobileNetworkCode, "string", ""));
        }
        if (providerLabel !== undefined) {
            requestContext.setQueryParam("providerLabel", ObjectSerializer.serialize(providerLabel, "string", ""));
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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<string>", "uuid"));
        }
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
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
     * Get phone number plans
     * Get phone plans
     */
    public async getPhonePlans(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/plans';

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
     * Get phone plans availability
     */
    public async getPhonePlansAvailability(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/plans/availability';

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
     * Get phone pool details by ID
     * Get phone pool
     * @param poolId 
     */
    public async getPhonePool(poolId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling getPhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

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
     * Get phone pool details by name
     * Get phone pool by name
     * @param name 
     */
    public async getPhonePoolByName(name: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'name' is not null or undefined
        if (name === null || name === undefined) {
            throw new RequiredError('Required parameter name was null or undefined when calling getPhonePoolByName.');
        }


        // Path Params
        const localVarPath = '/phone/pools/by-name';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
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
     * List phone pools for the authenticated user
     * Get phone pools
     */
    public async getPhonePools(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/pools';

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
     * Get supported provider-country variant capabilities for advanced provisioning
     * Get phone provisioning capabilities
     * @param phoneCountry 
     * @param providerLabel 
     */
    public async getPhoneProvisioningCapabilities(phoneCountry: 'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE', providerLabel?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneCountry' is not null or undefined
        if (phoneCountry === null || phoneCountry === undefined) {
            throw new RequiredError('Required parameter phoneCountry was null or undefined when calling getPhoneProvisioningCapabilities.');
        }



        // Path Params
        const localVarPath = '/phone/provisioning/capabilities';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (phoneCountry !== undefined) {
            requestContext.setQueryParam("phoneCountry", ObjectSerializer.serialize(phoneCountry, "'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE'", ""));
        }
        if (providerLabel !== undefined) {
            requestContext.setQueryParam("providerLabel", ObjectSerializer.serialize(providerLabel, "string", ""));
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
     * Get advanced phone provisioning job status
     * Get phone provisioning job
     * @param jobId 
     */
    public async getPhoneProvisioningJob(jobId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'jobId' is not null or undefined
        if (jobId === null || jobId === undefined) {
            throw new RequiredError('Required parameter jobId was null or undefined when calling getPhoneProvisioningJob.');
        }


        // Path Params
        const localVarPath = '/phone/provisioning/jobs/{jobId}'
            .replace('{' + 'jobId' + '}', encodeURIComponent(String(jobId)));

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
     * Get a specific SMS prepaid credit balance for the authenticated account
     * Get SMS prepaid credit
     * @param creditId 
     */
    public async getPhoneSmsPrepaidCredit(creditId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'creditId' is not null or undefined
        if (creditId === null || creditId === undefined) {
            throw new RequiredError('Required parameter creditId was null or undefined when calling getPhoneSmsPrepaidCredit.');
        }


        // Path Params
        const localVarPath = '/phone/sms-prepaid-credits/{creditId}'
            .replace('{' + 'creditId' + '}', encodeURIComponent(String(creditId)));

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
     * List SMS prepaid credits for the authenticated account
     * Get SMS prepaid credits
     */
    public async getPhoneSmsPrepaidCredits(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/sms-prepaid-credits';

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
     * Get overview of assigned phones
     * Get phone summary
     */
    public async getPhoneSummary(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/phone/summary';

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
     * Get sent SMS messages for a phone number
     * List sent TXT messages for a phone number
     * @param phoneNumberId 
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     */
    public async getSentSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling getSentSmsByPhoneNumber.');
        }








        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/sms-sent'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
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
     * Get SMS messages for a phone number
     * List SMS messages for a phone number
     * @param phoneNumberId 
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread SMS only. All SMS are considered unread until they are viewed in the dashboard or requested directly
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     * @param favourite Optionally filter results for favourites only
     */
    public async getSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, since?: Date, before?: Date, search?: string, favourite?: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling getSmsByPhoneNumber.');
        }










        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/sms'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
        if (unreadOnly !== undefined) {
            requestContext.setQueryParam("unreadOnly", ObjectSerializer.serialize(unreadOnly, "boolean", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (search !== undefined) {
            requestContext.setQueryParam("search", ObjectSerializer.serialize(search, "string", ""));
        }
        if (favourite !== undefined) {
            requestContext.setQueryParam("favourite", ObjectSerializer.serialize(favourite, "boolean", ""));
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
     * Reassign phone number that was released or deleted
     * Reassign phone number release
     * @param releaseId 
     */
    public async reassignPhoneNumberRelease(releaseId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'releaseId' is not null or undefined
        if (releaseId === null || releaseId === undefined) {
            throw new RequiredError('Required parameter releaseId was null or undefined when calling reassignPhoneNumberRelease.');
        }


        // Path Params
        const localVarPath = '/phone/releases/{releaseId}/reassign'
            .replace('{' + 'releaseId' + '}', encodeURIComponent(String(releaseId)));

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
     * Release an active phone pool lease
     * Release phone pool lease
     * @param poolId 
     * @param leaseId 
     */
    public async releasePhonePoolLease(poolId: string, leaseId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling releasePhonePoolLease.');
        }


        // verify required parameter 'leaseId' is not null or undefined
        if (leaseId === null || leaseId === undefined) {
            throw new RequiredError('Required parameter leaseId was null or undefined when calling releasePhonePoolLease.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}/leases/{leaseId}'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)))
            .replace('{' + 'leaseId' + '}', encodeURIComponent(String(leaseId)));

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
     * Remove a phone number from a pool. If the number is leased from this pool the lease is released.
     * Remove phone number from phone pool
     * @param poolId 
     * @param phoneNumberId 
     */
    public async removePhoneNumberFromPhonePool(poolId: string, phoneNumberId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling removePhoneNumberFromPhonePool.');
        }


        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling removePhoneNumberFromPhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}/numbers/{phoneNumberId}'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)))
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
     * Search available numbers for advanced provisioning
     * Search available phone numbers
     * @param searchAvailablePhoneNumbersOptions 
     */
    public async searchAvailablePhoneNumbers(searchAvailablePhoneNumbersOptions: SearchAvailablePhoneNumbersOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'searchAvailablePhoneNumbersOptions' is not null or undefined
        if (searchAvailablePhoneNumbersOptions === null || searchAvailablePhoneNumbersOptions === undefined) {
            throw new RequiredError('Required parameter searchAvailablePhoneNumbersOptions was null or undefined when calling searchAvailablePhoneNumbers.');
        }


        // Path Params
        const localVarPath = '/phone/provisioning/search';

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
            ObjectSerializer.serialize(searchAvailablePhoneNumbersOptions, "SearchAvailablePhoneNumbersOptions", ""),
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
     * Send SMS from a phone number
     * Send TXT message from a phone number
     * @param phoneNumberId 
     * @param smsSendOptions 
     */
    public async sendSmsFromPhoneNumber(phoneNumberId: string, smsSendOptions: SmsSendOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling sendSmsFromPhoneNumber.');
        }


        // verify required parameter 'smsSendOptions' is not null or undefined
        if (smsSendOptions === null || smsSendOptions === undefined) {
            throw new RequiredError('Required parameter smsSendOptions was null or undefined when calling sendSmsFromPhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/sms'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

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
            ObjectSerializer.serialize(smsSendOptions, "SmsSendOptions", ""),
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
     * Give or revoke consent for phone usage
     * Set consent status
     * @param agree 
     */
    public async setConsentStatus(agree: boolean, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'agree' is not null or undefined
        if (agree === null || agree === undefined) {
            throw new RequiredError('Required parameter agree was null or undefined when calling setConsentStatus.');
        }


        // Path Params
        const localVarPath = '/phone/consent';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (agree !== undefined) {
            requestContext.setQueryParam("agree", ObjectSerializer.serialize(agree, "boolean", ""));
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
     * Set and return new favorite state for a phone
     * Set phone favourited state
     * @param phoneNumberId ID of phone to set favourite state
     * @param setPhoneFavouritedOptions 
     */
    public async setPhoneFavourited(phoneNumberId: string, setPhoneFavouritedOptions: SetPhoneFavouritedOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling setPhoneFavourited.');
        }


        // verify required parameter 'setPhoneFavouritedOptions' is not null or undefined
        if (setPhoneFavouritedOptions === null || setPhoneFavouritedOptions === undefined) {
            throw new RequiredError('Required parameter setPhoneFavouritedOptions was null or undefined when calling setPhoneFavourited.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/favourite'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(setPhoneFavouritedOptions, "SetPhoneFavouritedOptions", ""),
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
     * Test a phone number by sending an SMS to it. NOTE this is only for internal use to check that a phone number is working. For end-to-end phone testing see https://docs.mailslurp.com/txt-sms/
     * Test sending an SMS to a number
     * @param phoneNumberId 
     * @param testPhoneNumberOptions 
     * @param xTestId 
     */
    public async testPhoneNumberSendSms(phoneNumberId: string, testPhoneNumberOptions: TestPhoneNumberOptions, xTestId?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling testPhoneNumberSendSms.');
        }


        // verify required parameter 'testPhoneNumberOptions' is not null or undefined
        if (testPhoneNumberOptions === null || testPhoneNumberOptions === undefined) {
            throw new RequiredError('Required parameter testPhoneNumberOptions was null or undefined when calling testPhoneNumberSendSms.');
        }



        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}/test'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params

        // Header Params
        requestContext.setHeaderParam("x-test-id", ObjectSerializer.serialize(xTestId, "string", ""));

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(testPhoneNumberOptions, "TestPhoneNumberOptions", ""),
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
     * Set field for phone number
     * Update a phone number
     * @param phoneNumberId ID of phone to set favourite state
     * @param updatePhoneNumberOptions 
     */
    public async updatePhoneNumber(phoneNumberId: string, updatePhoneNumberOptions: UpdatePhoneNumberOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'phoneNumberId' is not null or undefined
        if (phoneNumberId === null || phoneNumberId === undefined) {
            throw new RequiredError('Required parameter phoneNumberId was null or undefined when calling updatePhoneNumber.');
        }


        // verify required parameter 'updatePhoneNumberOptions' is not null or undefined
        if (updatePhoneNumberOptions === null || updatePhoneNumberOptions === undefined) {
            throw new RequiredError('Required parameter updatePhoneNumberOptions was null or undefined when calling updatePhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/numbers/{phoneNumberId}'
            .replace('{' + 'phoneNumberId' + '}', encodeURIComponent(String(phoneNumberId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(updatePhoneNumberOptions, "UpdatePhoneNumberOptions", ""),
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
     * Update phone pool metadata such as name or description
     * Update phone pool
     * @param poolId 
     * @param updatePhonePoolOptions 
     */
    public async updatePhonePool(poolId: string, updatePhonePoolOptions: UpdatePhonePoolOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'poolId' is not null or undefined
        if (poolId === null || poolId === undefined) {
            throw new RequiredError('Required parameter poolId was null or undefined when calling updatePhonePool.');
        }


        // verify required parameter 'updatePhonePoolOptions' is not null or undefined
        if (updatePhonePoolOptions === null || updatePhonePoolOptions === undefined) {
            throw new RequiredError('Required parameter updatePhonePoolOptions was null or undefined when calling updatePhonePool.');
        }


        // Path Params
        const localVarPath = '/phone/pools/{poolId}'
            .replace('{' + 'poolId' + '}', encodeURIComponent(String(poolId)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.PUT);
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
            ObjectSerializer.serialize(updatePhonePoolOptions, "UpdatePhonePoolOptions", ""),
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
     * Validate a phone number
     * Verify validity of a phone number
     * @param validatePhoneNumberOptions 
     */
    public async validatePhoneNumber(validatePhoneNumberOptions: ValidatePhoneNumberOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'validatePhoneNumberOptions' is not null or undefined
        if (validatePhoneNumberOptions === null || validatePhoneNumberOptions === undefined) {
            throw new RequiredError('Required parameter validatePhoneNumberOptions was null or undefined when calling validatePhoneNumber.');
        }


        // Path Params
        const localVarPath = '/phone/validate';

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
            ObjectSerializer.serialize(validatePhoneNumberOptions, "ValidatePhoneNumberOptions", ""),
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

export class PhoneControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to acquirePhonePoolLease
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async acquirePhonePoolLease(response: ResponseContext): Promise<PhonePoolLeaseDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolLeaseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolLeaseDto", ""
            ) as PhonePoolLeaseDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolLeaseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolLeaseDto", ""
            ) as PhonePoolLeaseDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addAllPhoneNumbersToPhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addAllPhoneNumbersToPhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to addPhoneNumbersToPhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async addPhoneNumbersToPhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createEmergencyAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createEmergencyAddress(response: ResponseContext): Promise<EmergencyAddress > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmergencyAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmergencyAddress", ""
            ) as EmergencyAddress;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmergencyAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmergencyAddress", ""
            ) as EmergencyAddress;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneNumber(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createPhoneProvisioningJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createPhoneProvisioningJob(response: ResponseContext): Promise<PhoneProvisioningJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneProvisioningJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProvisioningJobDto", ""
            ) as PhoneProvisioningJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneProvisioningJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProvisioningJobDto", ""
            ) as PhoneProvisioningJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllPhoneNumber(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteEmergencyAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteEmergencyAddress(response: ResponseContext): Promise<EmptyResponseDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmptyResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmptyResponseDto", ""
            ) as EmptyResponseDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmptyResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmptyResponseDto", ""
            ) as EmptyResponseDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePhoneMessageThreadItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhoneMessageThreadItems(response: ResponseContext): Promise<EmptyResponseDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            const body: EmptyResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmptyResponseDto", ""
            ) as EmptyResponseDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmptyResponseDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmptyResponseDto", ""
            ) as EmptyResponseDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deletePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhoneNumber(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deletePhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deletePhonePool(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to getAllPhoneMessageThreads
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPhoneMessageThreads(response: ResponseContext): Promise<PagePhoneMessageThreadProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllPhoneNumberReleases
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllPhoneNumberReleases(response: ResponseContext): Promise<PagePhoneNumberReleaseProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneNumberReleaseProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneNumberReleaseProjection", ""
            ) as PagePhoneNumberReleaseProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneNumberReleaseProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneNumberReleaseProjection", ""
            ) as PagePhoneNumberReleaseProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getConsentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getConsentStatus(response: ResponseContext): Promise<ConsentStatusDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentStatusDto", ""
            ) as ConsentStatusDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConsentStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentStatusDto", ""
            ) as ConsentStatusDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmergencyAddress
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmergencyAddress(response: ResponseContext): Promise<EmergencyAddress > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: EmergencyAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmergencyAddress", ""
            ) as EmergencyAddress;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: EmergencyAddress = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "EmergencyAddress", ""
            ) as EmergencyAddress;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getEmergencyAddresses
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getEmergencyAddresses(response: ResponseContext): Promise<Array<EmergencyAddressDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<EmergencyAddressDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmergencyAddressDto>", ""
            ) as Array<EmergencyAddressDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<EmergencyAddressDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<EmergencyAddressDto>", ""
            ) as Array<EmergencyAddressDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getOrCreatePhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getOrCreatePhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneMessageThreadItems
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneMessageThreadItems(response: ResponseContext): Promise<PagePhoneMessageThreadItemProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneMessageThreadItemProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadItemProjection", ""
            ) as PagePhoneMessageThreadItemProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneMessageThreadItemProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadItemProjection", ""
            ) as PagePhoneMessageThreadItemProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneMessageThreads
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneMessageThreads(response: ResponseContext): Promise<PagePhoneMessageThreadProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneMessageThreadProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneMessageThreadProjection", ""
            ) as PagePhoneMessageThreadProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumber(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumberByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumberByName(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumberByPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumberByPhoneNumber(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumberLineTypeIntelligence
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumberLineTypeIntelligence(response: ResponseContext): Promise<PhoneNumberLineTypeLookupDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberLineTypeLookupDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberLineTypeLookupDto", ""
            ) as PhoneNumberLineTypeLookupDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberLineTypeLookupDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberLineTypeLookupDto", ""
            ) as PhoneNumberLineTypeLookupDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumberRelease
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumberRelease(response: ResponseContext): Promise<PhoneNumberReleaseProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberReleaseProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberReleaseProjection", ""
            ) as PhoneNumberReleaseProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberReleaseProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberReleaseProjection", ""
            ) as PhoneNumberReleaseProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneNumbers(response: ResponseContext): Promise<PagePhoneNumberProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PagePhoneNumberProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneNumberProjection", ""
            ) as PagePhoneNumberProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PagePhoneNumberProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PagePhoneNumberProjection", ""
            ) as PagePhoneNumberProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhonePlans
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhonePlans(response: ResponseContext): Promise<Array<PhonePlanDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PhonePlanDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PhonePlanDto>", ""
            ) as Array<PhonePlanDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PhonePlanDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PhonePlanDto>", ""
            ) as Array<PhonePlanDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhonePlansAvailability
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhonePlansAvailability(response: ResponseContext): Promise<PhonePlanAvailability > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePlanAvailability = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePlanAvailability", ""
            ) as PhonePlanAvailability;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePlanAvailability = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePlanAvailability", ""
            ) as PhonePlanAvailability;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhonePoolByName
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhonePoolByName(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhonePools
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhonePools(response: ResponseContext): Promise<Array<PhonePoolDto> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: Array<PhonePoolDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PhonePoolDto>", ""
            ) as Array<PhonePoolDto>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<PhonePoolDto> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<PhonePoolDto>", ""
            ) as Array<PhonePoolDto>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneProvisioningCapabilities
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneProvisioningCapabilities(response: ResponseContext): Promise<PhoneProviderCapabilitiesResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneProviderCapabilitiesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProviderCapabilitiesResult", ""
            ) as PhoneProviderCapabilitiesResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneProviderCapabilitiesResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProviderCapabilitiesResult", ""
            ) as PhoneProviderCapabilitiesResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneProvisioningJob
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneProvisioningJob(response: ResponseContext): Promise<PhoneProvisioningJobDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneProvisioningJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProvisioningJobDto", ""
            ) as PhoneProvisioningJobDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneProvisioningJobDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneProvisioningJobDto", ""
            ) as PhoneProvisioningJobDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneSmsPrepaidCredit
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneSmsPrepaidCredit(response: ResponseContext): Promise<PhoneSmsPrepaidCreditDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneSmsPrepaidCreditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSmsPrepaidCreditDto", ""
            ) as PhoneSmsPrepaidCreditDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneSmsPrepaidCreditDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSmsPrepaidCreditDto", ""
            ) as PhoneSmsPrepaidCreditDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneSmsPrepaidCredits
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneSmsPrepaidCredits(response: ResponseContext): Promise<PhoneSmsPrepaidCreditsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneSmsPrepaidCreditsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSmsPrepaidCreditsDto", ""
            ) as PhoneSmsPrepaidCreditsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneSmsPrepaidCreditsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSmsPrepaidCreditsDto", ""
            ) as PhoneSmsPrepaidCreditsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getPhoneSummary
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getPhoneSummary(response: ResponseContext): Promise<PhoneSummaryDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSummaryDto", ""
            ) as PhoneSummaryDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneSummaryDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneSummaryDto", ""
            ) as PhoneSummaryDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSentSmsByPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSentSmsByPhoneNumber(response: ResponseContext): Promise<PageSentSmsProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageSentSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSentSmsProjection", ""
            ) as PageSentSmsProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageSentSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSentSmsProjection", ""
            ) as PageSentSmsProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getSmsByPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getSmsByPhoneNumber(response: ResponseContext): Promise<PageSmsProjection > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageSmsProjection = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageSmsProjection", ""
            ) as PageSmsProjection;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to reassignPhoneNumberRelease
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async reassignPhoneNumberRelease(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to releasePhonePoolLease
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async releasePhonePoolLease(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to removePhoneNumberFromPhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async removePhoneNumberFromPhonePool(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to searchAvailablePhoneNumbers
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async searchAvailablePhoneNumbers(response: ResponseContext): Promise<AvailablePhoneNumbersResult > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AvailablePhoneNumbersResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AvailablePhoneNumbersResult", ""
            ) as AvailablePhoneNumbersResult;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AvailablePhoneNumbersResult = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AvailablePhoneNumbersResult", ""
            ) as AvailablePhoneNumbersResult;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to sendSmsFromPhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async sendSmsFromPhoneNumber(response: ResponseContext): Promise<SentSmsDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: SentSmsDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "SentSmsDto", ""
            ) as SentSmsDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setConsentStatus
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setConsentStatus(response: ResponseContext): Promise<ConsentStatusDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: ConsentStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentStatusDto", ""
            ) as ConsentStatusDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: ConsentStatusDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "ConsentStatusDto", ""
            ) as ConsentStatusDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to setPhoneFavourited
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async setPhoneFavourited(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to testPhoneNumberSendSms
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async testPhoneNumberSendSms(response: ResponseContext): Promise<void > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
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
     * @params response Response returned by the server for a request to updatePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePhoneNumber(response: ResponseContext): Promise<PhoneNumberDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberDto", ""
            ) as PhoneNumberDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to updatePhonePool
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async updatePhonePool(response: ResponseContext): Promise<PhonePoolDetailDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhonePoolDetailDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhonePoolDetailDto", ""
            ) as PhonePoolDetailDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to validatePhoneNumber
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async validatePhoneNumber(response: ResponseContext): Promise<PhoneNumberValidationDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PhoneNumberValidationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberValidationDto", ""
            ) as PhoneNumberValidationDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PhoneNumberValidationDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PhoneNumberValidationDto", ""
            ) as PhoneNumberValidationDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
