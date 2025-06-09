// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { CreateTotpDeviceOtpAuthUrlOptions } from '../models/CreateTotpDeviceOtpAuthUrlOptions.ts';
import { TotpDeviceCodeDto } from '../models/TotpDeviceCodeDto.ts';
import { TotpDeviceDto } from '../models/TotpDeviceDto.ts';
import { TotpDeviceOptionalDto } from '../models/TotpDeviceOptionalDto.ts';

/**
 * no description
 */
export class MFAControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
     * Create a TOTP device from custom options
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public async createTotpDeviceForCustom(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createTotpDeviceOtpAuthUrlOptions' is not null or undefined
        if (createTotpDeviceOtpAuthUrlOptions === null || createTotpDeviceOtpAuthUrlOptions === undefined) {
            throw new RequiredError('Required parameter createTotpDeviceOtpAuthUrlOptions was null or undefined when calling createTotpDeviceForCustom.');
        }


        // Path Params
        const localVarPath = '/mfa/totp/device/custom';

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
            ObjectSerializer.serialize(createTotpDeviceOtpAuthUrlOptions, "CreateTotpDeviceOtpAuthUrlOptions", ""),
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
     * Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
     * Create a TOTP device from an OTP Auth URL
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public async createTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'createTotpDeviceOtpAuthUrlOptions' is not null or undefined
        if (createTotpDeviceOtpAuthUrlOptions === null || createTotpDeviceOtpAuthUrlOptions === undefined) {
            throw new RequiredError('Required parameter createTotpDeviceOtpAuthUrlOptions was null or undefined when calling createTotpDeviceForOtpAuthUrl.');
        }


        // Path Params
        const localVarPath = '/mfa/totp/device/otpAuthUrl';

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
            ObjectSerializer.serialize(createTotpDeviceOtpAuthUrlOptions, "CreateTotpDeviceOtpAuthUrlOptions", ""),
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
     * Get Time-Based One-Time Password (TOTP) device by its ID.
     * Get a TOTP device by ID
     * @param id 
     */
    public async getTotpDevice(id: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getTotpDevice.');
        }


        // Path Params
        const localVarPath = '/mfa/totp/device/{id}'
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
     * Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
     * Get a TOTP device by username, issuer, or name. Returns empty if not found.
     * @param name Optional name filter
     * @param issuer Optional issuer filter
     * @param username Optional username filter
     */
    public async getTotpDeviceBy(name?: string, issuer?: string, username?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/mfa/totp/device/by';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (name !== undefined) {
            requestContext.setQueryParam("name", ObjectSerializer.serialize(name, "string", ""));
        }
        if (issuer !== undefined) {
            requestContext.setQueryParam("issuer", ObjectSerializer.serialize(issuer, "string", ""));
        }
        if (username !== undefined) {
            requestContext.setQueryParam("username", ObjectSerializer.serialize(username, "string", ""));
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
     * Get Time-Based One-Time Password for a device by its ID.
     * Get a TOTP device code by device ID
     * @param id ID of the TOTP device to get the code for
     * @param at Optional time to get code for. If not provided, current time is used.
     * @param minSecondsUntilExpire Optional minimum time until code expires. Will hold thread open until period reached.
     */
    public async getTotpDeviceCode(id: string, at?: Date, minSecondsUntilExpire?: number, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'id' is not null or undefined
        if (id === null || id === undefined) {
            throw new RequiredError('Required parameter id was null or undefined when calling getTotpDeviceCode.');
        }




        // Path Params
        const localVarPath = '/mfa/totp/device/{id}/code'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (at !== undefined) {
            requestContext.setQueryParam("at", ObjectSerializer.serialize(at, "Date", "date-time"));
        }
        if (minSecondsUntilExpire !== undefined) {
            requestContext.setQueryParam("minSecondsUntilExpire", ObjectSerializer.serialize(minSecondsUntilExpire, "number", "int32"));
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

export class MFAControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTotpDeviceForCustom
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTotpDeviceForCustom(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createTotpDeviceForOtpAuthUrl
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createTotpDeviceForOtpAuthUrl(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTotpDevice
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTotpDevice(response: ResponseContext): Promise<TotpDeviceDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceDto", ""
            ) as TotpDeviceDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTotpDeviceBy
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTotpDeviceBy(response: ResponseContext): Promise<TotpDeviceOptionalDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceOptionalDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceOptionalDto", ""
            ) as TotpDeviceOptionalDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceOptionalDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceOptionalDto", ""
            ) as TotpDeviceOptionalDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getTotpDeviceCode
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getTotpDeviceCode(response: ResponseContext): Promise<TotpDeviceCodeDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: TotpDeviceCodeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceCodeDto", ""
            ) as TotpDeviceCodeDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: TotpDeviceCodeDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "TotpDeviceCodeDto", ""
            ) as TotpDeviceCodeDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
