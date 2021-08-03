// TODO: better import syntax?
import { BaseAPIRequestFactory, RequiredError } from './baseapi.ts';
import {Configuration} from '../configuration.ts';
import { RequestContext, HttpMethod, ResponseContext, HttpFile} from '../http/http.ts';
import {ObjectSerializer} from '../models/ObjectSerializer.ts';
import {ApiException} from './exception.ts';
import {isCodeInRange} from '../util.ts';

import { AttachmentEntity } from '../models/AttachmentEntity.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';

/**
 * no description
 */
export class AttachmentControllerApiRequestFactory extends BaseAPIRequestFactory {

    /**
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
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
     * @param fileNameFilter Optional file name and content type search filter
     * @param page Optional page index event list pagination
     * @param size Optional page size event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public async getAttachments(fileNameFilter?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;





        // Path Params
        const localVarPath = '/attachments';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (fileNameFilter !== undefined) {
            requestContext.setQueryParam("fileNameFilter", ObjectSerializer.serialize(fileNameFilter, "string", ""));
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadOptions uploadOptions
     */
    public async uploadAttachment(uploadOptions: UploadAttachmentOptions, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'uploadOptions' is not null or undefined
        if (uploadOptions === null || uploadOptions === undefined) {
            throw new RequiredError('Required parameter uploadOptions was null or undefined when calling uploadAttachment.');
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
            ObjectSerializer.serialize(uploadOptions, "UploadAttachmentOptions", ""),
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using file byte stream input octet stream. Returns an array whose first element is the ID of the uploaded attachment.
     * @param contentType Optional contentType for file. For instance &#x60;application/pdf&#x60;
     * @param filename Optional filename to save upload with
     * @param byteArray Byte array request body
     */
    public async uploadAttachmentBytes(contentType?: string, filename?: string, byteArray?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;




        // Path Params
        const localVarPath = '/attachments/bytes';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("contentType", ObjectSerializer.serialize(contentType, "string", ""));
        }
        if (filename !== undefined) {
            requestContext.setQueryParam("filename", ObjectSerializer.serialize(filename, "string", ""));
        }

        // Header Params

        // Form Params


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/octet-stream"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(byteArray, "string", ""),
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
     * Email attachments are essentially files with meta data. Files are byte arrays and the meta data is a content type and a filename. These properties allow email clients to display the filename and icon etc. When sending emails with attachments first upload each attachment with an upload endpoint. Record the returned attachment ID and use it with subsequent email sending. For legacy reasons the ID is returned as the first element in an array. Only a single ID is ever returned. To send the attachments pass a list of attachment IDs with `SendEmailOptions` when sending an email. Using the upload endpoints prior to sending mean attachments can easily be reused.
     * Upload an attachment for sending using a Multipart Form request. Returns an array whose first element is the ID of the uploaded attachment.
     * @param file file
     * @param contentType Optional content type of attachment
     * @param filename Optional name of file
     * @param xFilename Optional content type header of attachment
     */
    public async uploadMultipartForm(file: HttpFile, contentType?: string, filename?: string, xFilename?: string, options?: Configuration): Promise<RequestContext> {
        let config = options || this.configuration;

        // verify required parameter 'file' is not null or undefined
        if (file === null || file === undefined) {
            throw new RequiredError('Required parameter file was null or undefined when calling uploadMultipartForm.');
        }





        // Path Params
        const localVarPath = '/attachments/multipart';

        // Make Request Context
        const requestContext = config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")

        // Query Params
        if (contentType !== undefined) {
            requestContext.setQueryParam("contentType", ObjectSerializer.serialize(contentType, "string", ""));
        }
        if (filename !== undefined) {
            requestContext.setQueryParam("filename", ObjectSerializer.serialize(filename, "string", ""));
        }
        if (xFilename !== undefined) {
            requestContext.setQueryParam("x-filename", ObjectSerializer.serialize(xFilename, "string", ""));
        }

        // Header Params

        // Form Params
        let localVarFormParams = new FormData();

        if (file !== undefined) {
             // TODO: replace .append with .set
             localVarFormParams.append('file', file, file.name);
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
     public async downloadAttachmentAsBytes(response: ResponseContext): Promise<string > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
            ) as string;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: string = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "string", "byte"
            ) as string;
            return body;
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
     public async getAttachment(response: ResponseContext): Promise<AttachmentEntity > {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: AttachmentEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentEntity", ""
            ) as AttachmentEntity;
            return body;
        }
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: AttachmentEntity = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "AttachmentEntity", ""
            ) as AttachmentEntity;
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
        if (isCodeInRange("401", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Unauthorized");
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Forbidden");
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<string>(response.httpStatusCode, "Not Found");
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
