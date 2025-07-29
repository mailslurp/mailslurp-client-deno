// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AttachmentEntityDto } from '../models/AttachmentEntityDto.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { InlineObject1 } from '../models/InlineObject1.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';

/**
 * no description
 */
export class AttachmentControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * Delete all attachments
     * Delete all attachments
     */
    public async deleteAllAttachments(options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // Path Params
        const localVarPath = '/attachments';

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
     * Delete an attachment
     * Delete an attachment
     * @param attachmentId ID of attachment
     */
    public async deleteAttachment(attachmentId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling deleteAttachment.');
        }


        // Path Params
        const localVarPath = '/attachments/{attachmentId}'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param attachmentId ID of attachment
     */
    public async downloadAttachmentAsBase64Encoded(attachmentId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling downloadAttachmentAsBase64Encoded.');
        }


        // Path Params
        const localVarPath = '/attachments/{attachmentId}/base64'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param attachmentId ID of attachment
     */
    public async downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling downloadAttachmentAsBytes.');
        }


        // Path Params
        const localVarPath = '/attachments/{attachmentId}/bytes'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
     * Get an attachment entity
     * @param attachmentId ID of attachment
     */
    public async getAttachment(attachmentId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling getAttachment.');
        }


        // Path Params
        const localVarPath = '/attachments/{attachmentId}'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param attachmentId ID of attachment
     */
    public async getAttachmentInfo(attachmentId: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'attachmentId' is not null or undefined
        if (attachmentId === null || attachmentId === undefined) {
            throw new RequiredError('Required parameter attachmentId was null or undefined when calling getAttachmentInfo.');
        }


        // Path Params
        const localVarPath = '/attachments/{attachmentId}/metadata'
            .replace('{' + 'attachmentId' + '}', encodeURIComponent(String(attachmentId)));

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
     * Get all attachments in paginated response. Each entity contains meta data for the attachment such as `name` and `content-type`. Use the `attachmentId` and the download endpoints to get the file contents.
     * Get email attachments
     * @param page Optional page index for list pagination
     * @param size Optional page size for list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param fileNameFilter Optional file name and content type search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inboxId to filter attachments by
     * @param emailId Optional emailId to filter attachments by
     * @param sentEmailId Optional sentEmailId to filter attachments by
     * @param include Optional list of IDs to include in result
     */
    public async getAttachments(page?: number, size?: number, sort?: 'ASC' | 'DESC', fileNameFilter?: string, since?: Date, before?: Date, inboxId?: string, emailId?: string, sentEmailId?: string, include?: Array<string>, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;











        // Path Params
        const localVarPath = '/attachments';

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
        if (fileNameFilter !== undefined) {
            requestContext.setQueryParam("fileNameFilter", ObjectSerializer.serialize(fileNameFilter, "string", ""));
        }
        if (since !== undefined) {
            requestContext.setQueryParam("since", ObjectSerializer.serialize(since, "Date", "date-time"));
        }
        if (before !== undefined) {
            requestContext.setQueryParam("before", ObjectSerializer.serialize(before, "Date", "date-time"));
        }
        if (inboxId !== undefined) {
            requestContext.setQueryParam("inboxId", ObjectSerializer.serialize(inboxId, "string", "uuid"));
        }
        if (emailId !== undefined) {
            requestContext.setQueryParam("emailId", ObjectSerializer.serialize(emailId, "string", "uuid"));
        }
        if (sentEmailId !== undefined) {
            requestContext.setQueryParam("sentEmailId", ObjectSerializer.serialize(sentEmailId, "string", "uuid"));
        }
        if (include !== undefined) {
            requestContext.setQueryParam("include", ObjectSerializer.serialize(include, "Array<string>", ""));
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
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadAttachmentOptions 
     */
    public async uploadAttachment(uploadAttachmentOptions: UploadAttachmentOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uploadAttachmentOptions' is not null or undefined
        if (uploadAttachmentOptions === null || uploadAttachmentOptions === undefined) {
            throw new RequiredError('Required parameter uploadAttachmentOptions was null or undefined when calling uploadAttachment.');
        }


        // Path Params
        const localVarPath = '/attachments';

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
            ObjectSerializer.serialize(uploadAttachmentOptions, "UploadAttachmentOptions", ""),
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
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType 
     * @param contentType2 Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param contentId Optional content ID (CID) to save upload with
     * @param filename Optional filename to save upload with
     * @param fileSize Optional byte length to save upload with
     * @param filename2 
     */
    public async uploadAttachmentBytes(contentType?: string, contentType2?: string, contentId?: string, filename?: string, fileSize?: number, filename2?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;







        // Path Params
        const localVarPath = '/attachments/bytes';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentType2 !== undefined) {
            requestContext.setQueryParam("contentType", ObjectSerializer.serialize(contentType2, "string", ""));
        }
        if (contentId !== undefined) {
            requestContext.setQueryParam("contentId", ObjectSerializer.serialize(contentId, "string", ""));
        }
        if (filename !== undefined) {
            requestContext.setQueryParam("filename", ObjectSerializer.serialize(filename, "string", ""));
        }
        if (fileSize !== undefined) {
            requestContext.setQueryParam("fileSize", ObjectSerializer.serialize(fileSize, "number", "int64"));
        }

        // Header Params
        requestContext.setHeaderParam("contentType", ObjectSerializer.serialize(contentType, "string", ""));
        requestContext.setHeaderParam("filename", ObjectSerializer.serialize(filename2, "string", ""));

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
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentId Optional content ID of attachment
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param contentTypeHeader Optional content type header of attachment
     * @param xFilename Optional filename header of attachment
     * @param xFilenameRaw Optional raw filename header of attachment that will be converted to punycode
     * @param xFilesize Optional content size of attachment
     * @param inlineObject1 
     */
    public async uploadMultipartForm(contentId?: string, contentType?: string, filename?: string, contentTypeHeader?: string, xFilename?: string, xFilenameRaw?: string, xFilesize?: number, inlineObject1?: InlineObject1, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;









        // Path Params
        const localVarPath = '/attachments/multipart';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentId !== undefined) {
            requestContext.setQueryParam("contentId", ObjectSerializer.serialize(contentId, "string", ""));
        }
        if (contentType !== undefined) {
            requestContext.setQueryParam("contentType", ObjectSerializer.serialize(contentType, "string", ""));
        }
        if (filename !== undefined) {
            requestContext.setQueryParam("filename", ObjectSerializer.serialize(filename, "string", ""));
        }
        if (contentTypeHeader !== undefined) {
            requestContext.setQueryParam("contentTypeHeader", ObjectSerializer.serialize(contentTypeHeader, "string", ""));
        }
        if (xFilename !== undefined) {
            requestContext.setQueryParam("x-filename", ObjectSerializer.serialize(xFilename, "string", ""));
        }
        if (xFilenameRaw !== undefined) {
            requestContext.setQueryParam("x-filename-raw", ObjectSerializer.serialize(xFilenameRaw, "string", ""));
        }
        if (xFilesize !== undefined) {
            requestContext.setQueryParam("x-filesize", ObjectSerializer.serialize(xFilesize, "number", "int64"));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(inlineObject1, "InlineObject1", ""),
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

export class AttachmentControllerApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteAllAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAllAttachments(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to deleteAttachment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteAttachment(response: ResponseContext): Promise<void > {
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
     * @params response Response returned by the server for a request to downloadAttachmentAsBase64Encoded
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadAttachmentAsBase64Encoded(response: ResponseContext): Promise<DownloadAttachmentDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: DownloadAttachmentDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DownloadAttachmentDto", ""
            ) as DownloadAttachmentDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: DownloadAttachmentDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "DownloadAttachmentDto", ""
            ) as DownloadAttachmentDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadAttachmentAsBytes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadAttachmentAsBytes(response: ResponseContext): Promise< void> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("0", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
            ) as string;
            throw new ApiException<string>(0, body);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            return;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttachment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttachment(response: ResponseContext): Promise<AttachmentEntityDto > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttachmentEntityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentEntityDto", ""
            ) as AttachmentEntityDto;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttachmentEntityDto = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentEntityDto", ""
            ) as AttachmentEntityDto;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttachmentInfo
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttachmentInfo(response: ResponseContext): Promise<AttachmentMetaData > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttachmentMetaData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentMetaData", ""
            ) as AttachmentMetaData;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttachmentMetaData = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentMetaData", ""
            ) as AttachmentMetaData;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAttachments(response: ResponseContext): Promise<PageAttachmentEntity > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: PageAttachmentEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAttachmentEntity", ""
            ) as PageAttachmentEntity;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PageAttachmentEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PageAttachmentEntity", ""
            ) as PageAttachmentEntity;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadAttachment
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadAttachment(response: ResponseContext): Promise<Array<string> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadAttachmentBytes
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadAttachmentBytes(response: ResponseContext): Promise<Array<string> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to uploadMultipartForm
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async uploadMultipartForm(response: ResponseContext): Promise<Array<string> > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: Array<string> = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "Array<string>", ""
            ) as Array<string>;
            return body;
        }

        let body = response.body || "";
        throw new ApiException<string>(response.httpStatusCode, "Unknown API Status Code!\nBody: \"" + body + "\"");
    }

}
