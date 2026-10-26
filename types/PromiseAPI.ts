import { ResponseContext, RequestContext, HttpFile } from '../http/http.ts';
import * as models from '../models/all.ts';
import { Configuration} from '../configuration.ts'

import { AIMappingMatchOption } from '../models/AIMappingMatchOption.ts';
import { AIMappingMatchOptions } from '../models/AIMappingMatchOptions.ts';
import { AIMessageAIOptions } from '../models/AIMessageAIOptions.ts';
import { AIMessageAssertion } from '../models/AIMessageAssertion.ts';
import { AIMessageAssertionResult } from '../models/AIMessageAssertionResult.ts';
import { AIMessageCandidateResult } from '../models/AIMessageCandidateResult.ts';
import { AIMessageConfidence } from '../models/AIMessageConfidence.ts';
import { AIMessageEvidence } from '../models/AIMessageEvidence.ts';
import { AIMessageExpectation } from '../models/AIMessageExpectation.ts';
import { AIMessageExpectationResult } from '../models/AIMessageExpectationResult.ts';
import { AIMessageMatchOptions } from '../models/AIMessageMatchOptions.ts';
import { AIMessageMatchResult } from '../models/AIMessageMatchResult.ts';
import { AIMessageModelDto } from '../models/AIMessageModelDto.ts';
import { AIMessageReference } from '../models/AIMessageReference.ts';
import { AIMessageResult } from '../models/AIMessageResult.ts';
import { AIMessageScope } from '../models/AIMessageScope.ts';
import { AIMessageUsage } from '../models/AIMessageUsage.ts';
import { AIMessagesResult } from '../models/AIMessagesResult.ts';
import { AITransformCreateOptions } from '../models/AITransformCreateOptions.ts';
import { AITransformDto } from '../models/AITransformDto.ts';
import { AITransformMappingDto } from '../models/AITransformMappingDto.ts';
import { AITransformMappingMatchResult } from '../models/AITransformMappingMatchResult.ts';
import { AITransformMappingProjection } from '../models/AITransformMappingProjection.ts';
import { AITransformProjection } from '../models/AITransformProjection.ts';
import { AITransformResultDto } from '../models/AITransformResultDto.ts';
import { AITransformResultProjectionDto } from '../models/AITransformResultProjectionDto.ts';
import { AbstractWebhookPayload } from '../models/AbstractWebhookPayload.ts';
import { AccessLinkSendResultDto } from '../models/AccessLinkSendResultDto.ts';
import { AccessibleInboxList } from '../models/AccessibleInboxList.ts';
import { AccountBounceBlockDto } from '../models/AccountBounceBlockDto.ts';
import { AccountDto } from '../models/AccountDto.ts';
import { AcquireAgentConversationClaimOptions } from '../models/AcquireAgentConversationClaimOptions.ts';
import { AcquirePhonePoolLeaseOptions } from '../models/AcquirePhonePoolLeaseOptions.ts';
import { AddPhonePoolNumbersOptions } from '../models/AddPhonePoolNumbersOptions.ts';
import { AdminSendPauseDto } from '../models/AdminSendPauseDto.ts';
import { AgentActivityDto } from '../models/AgentActivityDto.ts';
import { AgentApiErrorDto } from '../models/AgentApiErrorDto.ts';
import { AgentAutomationEventDto } from '../models/AgentAutomationEventDto.ts';
import { AgentAutomationEventPageDto } from '../models/AgentAutomationEventPageDto.ts';
import { AgentCapabilitiesDto } from '../models/AgentCapabilitiesDto.ts';
import { AgentCapabilityFeaturesDto } from '../models/AgentCapabilityFeaturesDto.ts';
import { AgentCapabilityLimitsDto } from '../models/AgentCapabilityLimitsDto.ts';
import { AgentCapabilityScopeDto } from '../models/AgentCapabilityScopeDto.ts';
import { AgentCompletedWorkItemDto } from '../models/AgentCompletedWorkItemDto.ts';
import { AgentConversationClaimDto } from '../models/AgentConversationClaimDto.ts';
import { AgentConversationCursorPageDto } from '../models/AgentConversationCursorPageDto.ts';
import { AgentConversationDetailV2Dto } from '../models/AgentConversationDetailV2Dto.ts';
import { AgentConversationHandoffDto } from '../models/AgentConversationHandoffDto.ts';
import { AgentConversationNoteDto } from '../models/AgentConversationNoteDto.ts';
import { AgentConversationQueueItemDto } from '../models/AgentConversationQueueItemDto.ts';
import { AgentDeferredWorkItemDto } from '../models/AgentDeferredWorkItemDto.ts';
import { AgentInboxSendPolicyCheckOptions } from '../models/AgentInboxSendPolicyCheckOptions.ts';
import { AgentInboxSendPolicyDto } from '../models/AgentInboxSendPolicyDto.ts';
import { AgentPreparedReplyDto } from '../models/AgentPreparedReplyDto.ts';
import { AgentSmsConversationCursorPageDto } from '../models/AgentSmsConversationCursorPageDto.ts';
import { AgentSmsConversationDetailDto } from '../models/AgentSmsConversationDetailDto.ts';
import { AgentSmsConversationQueueItemDto } from '../models/AgentSmsConversationQueueItemDto.ts';
import { AgentWorkItemDto } from '../models/AgentWorkItemDto.ts';
import { AgentWorkerHeartbeatDto } from '../models/AgentWorkerHeartbeatDto.ts';
import { AgentWorkerHeartbeatOptions } from '../models/AgentWorkerHeartbeatOptions.ts';
import { AliasDto } from '../models/AliasDto.ts';
import { AliasProjection } from '../models/AliasProjection.ts';
import { AliasThreadProjection } from '../models/AliasThreadProjection.ts';
import { AnalyzeDmarcReportOptions } from '../models/AnalyzeDmarcReportOptions.ts';
import { AnalyzeDmarcReportResults } from '../models/AnalyzeDmarcReportResults.ts';
import { AnalyzeEmailHeadersOptions } from '../models/AnalyzeEmailHeadersOptions.ts';
import { AnalyzeEmailHeadersResults } from '../models/AnalyzeEmailHeadersResults.ts';
import { AssertAIMessageOptions } from '../models/AssertAIMessageOptions.ts';
import { AttachmentEntityDto } from '../models/AttachmentEntityDto.ts';
import { AttachmentMetaData } from '../models/AttachmentMetaData.ts';
import { AttachmentProjection } from '../models/AttachmentProjection.ts';
import { AuditLogEventDto } from '../models/AuditLogEventDto.ts';
import { AuditLogPageDto } from '../models/AuditLogPageDto.ts';
import { AuditLogSearchOptions } from '../models/AuditLogSearchOptions.ts';
import { AuthBootstrapDto } from '../models/AuthBootstrapDto.ts';
import { AuthV2BootstrapDto } from '../models/AuthV2BootstrapDto.ts';
import { AuthV2BootstrapOptions } from '../models/AuthV2BootstrapOptions.ts';
import { AuthV2PasswordLoginOptions } from '../models/AuthV2PasswordLoginOptions.ts';
import { AutomatedInboxPlacementConnectionDto } from '../models/AutomatedInboxPlacementConnectionDto.ts';
import { AutomatedInboxPlacementEventDto } from '../models/AutomatedInboxPlacementEventDto.ts';
import { AutomatedInboxPlacementExecutionDto } from '../models/AutomatedInboxPlacementExecutionDto.ts';
import { AutomatedInboxPlacementProviderDto } from '../models/AutomatedInboxPlacementProviderDto.ts';
import { AutomatedInboxPlacementScheduleDto } from '../models/AutomatedInboxPlacementScheduleDto.ts';
import { AutomatedInboxPlacementSmtpOptions } from '../models/AutomatedInboxPlacementSmtpOptions.ts';
import { AvailablePhoneNumberDto } from '../models/AvailablePhoneNumberDto.ts';
import { AvailablePhoneNumbersResult } from '../models/AvailablePhoneNumbersResult.ts';
import { BasicAuthOptions } from '../models/BasicAuthOptions.ts';
import { BounceProjection } from '../models/BounceProjection.ts';
import { BounceRecipientProjection } from '../models/BounceRecipientProjection.ts';
import { BouncedEmailDto } from '../models/BouncedEmailDto.ts';
import { BouncedRecipientDto } from '../models/BouncedRecipientDto.ts';
import { BulkSendEmailOptions } from '../models/BulkSendEmailOptions.ts';
import { CampaignProbeDto } from '../models/CampaignProbeDto.ts';
import { CampaignProbeInsightsDto } from '../models/CampaignProbeInsightsDto.ts';
import { CampaignProbeRunComparisonDto } from '../models/CampaignProbeRunComparisonDto.ts';
import { CampaignProbeRunDto } from '../models/CampaignProbeRunDto.ts';
import { CampaignProbeRunDueResult } from '../models/CampaignProbeRunDueResult.ts';
import { CampaignProbeRunNowResult } from '../models/CampaignProbeRunNowResult.ts';
import { CampaignProbeSeriesDto } from '../models/CampaignProbeSeriesDto.ts';
import { CampaignProbeSeriesPointDto } from '../models/CampaignProbeSeriesPointDto.ts';
import { CanSendEmailResults } from '../models/CanSendEmailResults.ts';
import { CancelDevicePreviewRunOptions } from '../models/CancelDevicePreviewRunOptions.ts';
import { CancelDevicePreviewRunResult } from '../models/CancelDevicePreviewRunResult.ts';
import { CheckCampaignProbeOptions } from '../models/CheckCampaignProbeOptions.ts';
import { CheckCampaignProbeResults } from '../models/CheckCampaignProbeResults.ts';
import { CheckDnsPropagationOptions } from '../models/CheckDnsPropagationOptions.ts';
import { CheckDnsPropagationResults } from '../models/CheckDnsPropagationResults.ts';
import { CheckDomainMonitorOptions } from '../models/CheckDomainMonitorOptions.ts';
import { CheckDomainMonitorResults } from '../models/CheckDomainMonitorResults.ts';
import { CheckEmailAuditOptions } from '../models/CheckEmailAuditOptions.ts';
import { CheckEmailAuthStackOptions } from '../models/CheckEmailAuthStackOptions.ts';
import { CheckEmailAuthStackResults } from '../models/CheckEmailAuthStackResults.ts';
import { CheckEmailBlacklistOptions } from '../models/CheckEmailBlacklistOptions.ts';
import { CheckEmailBlacklistResults } from '../models/CheckEmailBlacklistResults.ts';
import { CheckEmailBodyFeatureSupportResults } from '../models/CheckEmailBodyFeatureSupportResults.ts';
import { CheckEmailBodyResults } from '../models/CheckEmailBodyResults.ts';
import { CheckEmailClientSupportOptions } from '../models/CheckEmailClientSupportOptions.ts';
import { CheckEmailClientSupportResults } from '../models/CheckEmailClientSupportResults.ts';
import { CheckEmailFeaturesClientSupportOptions } from '../models/CheckEmailFeaturesClientSupportOptions.ts';
import { CheckEmailFeaturesClientSupportResults } from '../models/CheckEmailFeaturesClientSupportResults.ts';
import { CodeCandidate } from '../models/CodeCandidate.ts';
import { Complaint } from '../models/Complaint.ts';
import { CompleteAgentWorkItemOptions } from '../models/CompleteAgentWorkItemOptions.ts';
import { ConditionOption } from '../models/ConditionOption.ts';
import { ConditionalStructuredContentResult } from '../models/ConditionalStructuredContentResult.ts';
import { ConnectorDto } from '../models/ConnectorDto.ts';
import { ConnectorEventDto } from '../models/ConnectorEventDto.ts';
import { ConnectorEventProjection } from '../models/ConnectorEventProjection.ts';
import { ConnectorImapConnectionDto } from '../models/ConnectorImapConnectionDto.ts';
import { ConnectorImapConnectionTestResult } from '../models/ConnectorImapConnectionTestResult.ts';
import { ConnectorProjection } from '../models/ConnectorProjection.ts';
import { ConnectorProviderSettingsDto } from '../models/ConnectorProviderSettingsDto.ts';
import { ConnectorSmtpConnectionDto } from '../models/ConnectorSmtpConnectionDto.ts';
import { ConnectorSmtpConnectionTestResult } from '../models/ConnectorSmtpConnectionTestResult.ts';
import { ConnectorSyncRequestResult } from '../models/ConnectorSyncRequestResult.ts';
import { ConnectorSyncResult } from '../models/ConnectorSyncResult.ts';
import { ConnectorSyncSettingsDto } from '../models/ConnectorSyncSettingsDto.ts';
import { ConsentStatusDto } from '../models/ConsentStatusDto.ts';
import { ContactDto } from '../models/ContactDto.ts';
import { ContactProjection } from '../models/ContactProjection.ts';
import { ContentMatchOptions } from '../models/ContentMatchOptions.ts';
import { CountDto } from '../models/CountDto.ts';
import { CreateAITransformerMappingOptions } from '../models/CreateAITransformerMappingOptions.ts';
import { CreateAgentConversationHandoffOptions } from '../models/CreateAgentConversationHandoffOptions.ts';
import { CreateAgentConversationNoteOptions } from '../models/CreateAgentConversationNoteOptions.ts';
import { CreateAgentSmsConversationHandoffOptions } from '../models/CreateAgentSmsConversationHandoffOptions.ts';
import { CreateAgentSmsConversationNoteOptions } from '../models/CreateAgentSmsConversationNoteOptions.ts';
import { CreateAliasOptions } from '../models/CreateAliasOptions.ts';
import { CreateAutomatedInboxPlacementConnectionOptions } from '../models/CreateAutomatedInboxPlacementConnectionOptions.ts';
import { CreateAutomatedInboxPlacementScheduleOptions } from '../models/CreateAutomatedInboxPlacementScheduleOptions.ts';
import { CreateCampaignProbeOptions } from '../models/CreateCampaignProbeOptions.ts';
import { CreateCampaignProbeRunOptions } from '../models/CreateCampaignProbeRunOptions.ts';
import { CreateConnectorImapConnectionOptions } from '../models/CreateConnectorImapConnectionOptions.ts';
import { CreateConnectorOptions } from '../models/CreateConnectorOptions.ts';
import { CreateConnectorSmtpConnectionOptions } from '../models/CreateConnectorSmtpConnectionOptions.ts';
import { CreateConnectorSyncSettingsOptions } from '../models/CreateConnectorSyncSettingsOptions.ts';
import { CreateConnectorWithOptions } from '../models/CreateConnectorWithOptions.ts';
import { CreateContactOptions } from '../models/CreateContactOptions.ts';
import { CreateDeliverabilitySimulationJobOptions } from '../models/CreateDeliverabilitySimulationJobOptions.ts';
import { CreateDeliverabilityTestOptions } from '../models/CreateDeliverabilityTestOptions.ts';
import { CreateDevicePreviewFeedbackOptions } from '../models/CreateDevicePreviewFeedbackOptions.ts';
import { CreateDevicePreviewFolderOptions } from '../models/CreateDevicePreviewFolderOptions.ts';
import { CreateDevicePreviewHtmlImportOptions } from '../models/CreateDevicePreviewHtmlImportOptions.ts';
import { CreateDevicePreviewImportOptions } from '../models/CreateDevicePreviewImportOptions.ts';
import { CreateDevicePreviewIngestAddressOptions } from '../models/CreateDevicePreviewIngestAddressOptions.ts';
import { CreateDevicePreviewOptions } from '../models/CreateDevicePreviewOptions.ts';
import { CreateDevicePreviewProfileOptions } from '../models/CreateDevicePreviewProfileOptions.ts';
import { CreateDevicePreviewQaOptions } from '../models/CreateDevicePreviewQaOptions.ts';
import { CreateDevicePreviewRunResult } from '../models/CreateDevicePreviewRunResult.ts';
import { CreateDevicePreviewShareLinkOptions } from '../models/CreateDevicePreviewShareLinkOptions.ts';
import { CreateDomainMonitorAlertSinkOptions } from '../models/CreateDomainMonitorAlertSinkOptions.ts';
import { CreateDomainMonitorOptions } from '../models/CreateDomainMonitorOptions.ts';
import { CreateDomainOptions } from '../models/CreateDomainOptions.ts';
import { CreateEmailAuditOptions } from '../models/CreateEmailAuditOptions.ts';
import { CreateEmailWarmupProgramOptions } from '../models/CreateEmailWarmupProgramOptions.ts';
import { CreateEmergencyAddressOptions } from '../models/CreateEmergencyAddressOptions.ts';
import { CreateFreeInboxOptions } from '../models/CreateFreeInboxOptions.ts';
import { CreateGroupOptions } from '../models/CreateGroupOptions.ts';
import { CreateInboxDto } from '../models/CreateInboxDto.ts';
import { CreateInboxForwarderOptions } from '../models/CreateInboxForwarderOptions.ts';
import { CreateInboxPlacementTestOptions } from '../models/CreateInboxPlacementTestOptions.ts';
import { CreateInboxReplierOptions } from '../models/CreateInboxReplierOptions.ts';
import { CreateInboxRetentionPolicyForAccountOptions } from '../models/CreateInboxRetentionPolicyForAccountOptions.ts';
import { CreateInboxRetentionPolicyOptions } from '../models/CreateInboxRetentionPolicyOptions.ts';
import { CreatePhoneNumberOptions } from '../models/CreatePhoneNumberOptions.ts';
import { CreatePhonePoolOptions } from '../models/CreatePhonePoolOptions.ts';
import { CreatePhoneProvisioningJobItemOptions } from '../models/CreatePhoneProvisioningJobItemOptions.ts';
import { CreatePhoneProvisioningJobOptions } from '../models/CreatePhoneProvisioningJobOptions.ts';
import { CreatePortalOptions } from '../models/CreatePortalOptions.ts';
import { CreatePortalUserOptions } from '../models/CreatePortalUserOptions.ts';
import { CreatePostmasterConnectionOptions } from '../models/CreatePostmasterConnectionOptions.ts';
import { CreatePostmasterConnectionResult } from '../models/CreatePostmasterConnectionResult.ts';
import { CreatePublicDeviceRenderTestOptions } from '../models/CreatePublicDeviceRenderTestOptions.ts';
import { CreatePublicSpamTestOptions } from '../models/CreatePublicSpamTestOptions.ts';
import { CreateRulesetOptions } from '../models/CreateRulesetOptions.ts';
import { CreateSendingConnectionOptions } from '../models/CreateSendingConnectionOptions.ts';
import { CreateTemplateOptions } from '../models/CreateTemplateOptions.ts';
import { CreateTotpDeviceBase32SecretKeyOptions } from '../models/CreateTotpDeviceBase32SecretKeyOptions.ts';
import { CreateTotpDeviceCustomOptions } from '../models/CreateTotpDeviceCustomOptions.ts';
import { CreateTotpDeviceOtpAuthUrlOptions } from '../models/CreateTotpDeviceOtpAuthUrlOptions.ts';
import { CreateTrackingPixelOptions } from '../models/CreateTrackingPixelOptions.ts';
import { CreateWebhookOptions } from '../models/CreateWebhookOptions.ts';
import { CreatedFreeInboxDto } from '../models/CreatedFreeInboxDto.ts';
import { CurrentPeriodDto } from '../models/CurrentPeriodDto.ts';
import { DNSLookupOptions } from '../models/DNSLookupOptions.ts';
import { DNSLookupResult } from '../models/DNSLookupResult.ts';
import { DNSLookupResults } from '../models/DNSLookupResults.ts';
import { DNSLookupsOptions } from '../models/DNSLookupsOptions.ts';
import { DeferAgentWorkItemOptions } from '../models/DeferAgentWorkItemOptions.ts';
import { DeleteDevicePreviewFolderResult } from '../models/DeleteDevicePreviewFolderResult.ts';
import { DeleteDevicePreviewProfileResult } from '../models/DeleteDevicePreviewProfileResult.ts';
import { DeleteDevicePreviewRunResult } from '../models/DeleteDevicePreviewRunResult.ts';
import { DeleteDevicePreviewShareLinkResult } from '../models/DeleteDevicePreviewShareLinkResult.ts';
import { DeleteResult } from '../models/DeleteResult.ts';
import { DeliverabilityAnalyticsRunDto } from '../models/DeliverabilityAnalyticsRunDto.ts';
import { DeliverabilityAnalyticsSeriesDto } from '../models/DeliverabilityAnalyticsSeriesDto.ts';
import { DeliverabilityAnalyticsSeriesPointDto } from '../models/DeliverabilityAnalyticsSeriesPointDto.ts';
import { DeliverabilityAnalyticsSummaryDto } from '../models/DeliverabilityAnalyticsSummaryDto.ts';
import { DeliverabilityEntityResultDto } from '../models/DeliverabilityEntityResultDto.ts';
import { DeliverabilityEntityResultPageDto } from '../models/DeliverabilityEntityResultPageDto.ts';
import { DeliverabilityExpectation } from '../models/DeliverabilityExpectation.ts';
import { DeliverabilityExpectationResultDto } from '../models/DeliverabilityExpectationResultDto.ts';
import { DeliverabilityFailureEntityHotspotDto } from '../models/DeliverabilityFailureEntityHotspotDto.ts';
import { DeliverabilityFailureHotspotsDto } from '../models/DeliverabilityFailureHotspotsDto.ts';
import { DeliverabilityFailurePhoneDimensionHotspotDto } from '../models/DeliverabilityFailurePhoneDimensionHotspotDto.ts';
import { DeliverabilityPollStatusResultDto } from '../models/DeliverabilityPollStatusResultDto.ts';
import { DeliverabilitySelectorOptions } from '../models/DeliverabilitySelectorOptions.ts';
import { DeliverabilitySimulationEmailOptions } from '../models/DeliverabilitySimulationEmailOptions.ts';
import { DeliverabilitySimulationJobConfigDto } from '../models/DeliverabilitySimulationJobConfigDto.ts';
import { DeliverabilitySimulationJobDto } from '../models/DeliverabilitySimulationJobDto.ts';
import { DeliverabilitySimulationJobErrorSummaryDto } from '../models/DeliverabilitySimulationJobErrorSummaryDto.ts';
import { DeliverabilitySimulationJobEventDto } from '../models/DeliverabilitySimulationJobEventDto.ts';
import { DeliverabilitySimulationJobEventPageDto } from '../models/DeliverabilitySimulationJobEventPageDto.ts';
import { DeliverabilitySimulationJobTopErrorDto } from '../models/DeliverabilitySimulationJobTopErrorDto.ts';
import { DeliverabilitySimulationSmsOptions } from '../models/DeliverabilitySimulationSmsOptions.ts';
import { DeliverabilityTestDto } from '../models/DeliverabilityTestDto.ts';
import { DeliverabilityTestPageDto } from '../models/DeliverabilityTestPageDto.ts';
import { DeliverySenderCapacityDto } from '../models/DeliverySenderCapacityDto.ts';
import { DeliveryStatusDto } from '../models/DeliveryStatusDto.ts';
import { DescribeDomainOptions } from '../models/DescribeDomainOptions.ts';
import { DescribeMailServerDomainResult } from '../models/DescribeMailServerDomainResult.ts';
import { DevicePreviewAccountSettingsDto } from '../models/DevicePreviewAccountSettingsDto.ts';
import { DevicePreviewEmailSubmissionDto } from '../models/DevicePreviewEmailSubmissionDto.ts';
import { DevicePreviewEmailSubmissionWaitResult } from '../models/DevicePreviewEmailSubmissionWaitResult.ts';
import { DevicePreviewFeedbackDto } from '../models/DevicePreviewFeedbackDto.ts';
import { DevicePreviewFeedbackListDto } from '../models/DevicePreviewFeedbackListDto.ts';
import { DevicePreviewFolderDto } from '../models/DevicePreviewFolderDto.ts';
import { DevicePreviewIngestAddressDto } from '../models/DevicePreviewIngestAddressDto.ts';
import { DevicePreviewIngestDomainDto } from '../models/DevicePreviewIngestDomainDto.ts';
import { DevicePreviewIngestRunWaitResult } from '../models/DevicePreviewIngestRunWaitResult.ts';
import { DevicePreviewNativeTargetAvailabilityDto } from '../models/DevicePreviewNativeTargetAvailabilityDto.ts';
import { DevicePreviewNativeTargetAvailabilityListDto } from '../models/DevicePreviewNativeTargetAvailabilityListDto.ts';
import { DevicePreviewNativeTargetDto } from '../models/DevicePreviewNativeTargetDto.ts';
import { DevicePreviewNativeTargetListDto } from '../models/DevicePreviewNativeTargetListDto.ts';
import { DevicePreviewProfileDto } from '../models/DevicePreviewProfileDto.ts';
import { DevicePreviewProviderProgressDto } from '../models/DevicePreviewProviderProgressDto.ts';
import { DevicePreviewQaBundleDto } from '../models/DevicePreviewQaBundleDto.ts';
import { DevicePreviewRunDto } from '../models/DevicePreviewRunDto.ts';
import { DevicePreviewRunResultsDto } from '../models/DevicePreviewRunResultsDto.ts';
import { DevicePreviewRunThumbnailDto } from '../models/DevicePreviewRunThumbnailDto.ts';
import { DevicePreviewRunWaitResult } from '../models/DevicePreviewRunWaitResult.ts';
import { DevicePreviewScreenshotDto } from '../models/DevicePreviewScreenshotDto.ts';
import { DevicePreviewShareLinkDto } from '../models/DevicePreviewShareLinkDto.ts';
import { DevicePreviewSharedCommentDto } from '../models/DevicePreviewSharedCommentDto.ts';
import { DevicePreviewSharedResultDto } from '../models/DevicePreviewSharedResultDto.ts';
import { DevicePreviewSharedRunDto } from '../models/DevicePreviewSharedRunDto.ts';
import { DevicePreviewSharedScreenshotDto } from '../models/DevicePreviewSharedScreenshotDto.ts';
import { DevicePreviewSharedTargetDto } from '../models/DevicePreviewSharedTargetDto.ts';
import { DevicePreviewSourceEmailDto } from '../models/DevicePreviewSourceEmailDto.ts';
import { DevicePreviewTargetDto } from '../models/DevicePreviewTargetDto.ts';
import { DmarcReportMetadata } from '../models/DmarcReportMetadata.ts';
import { DmarcReportSourceSummary } from '../models/DmarcReportSourceSummary.ts';
import { DnsPropagationResolverResult } from '../models/DnsPropagationResolverResult.ts';
import { DomainDto } from '../models/DomainDto.ts';
import { DomainGroup } from '../models/DomainGroup.ts';
import { DomainGroupsDto } from '../models/DomainGroupsDto.ts';
import { DomainHealthEventDto } from '../models/DomainHealthEventDto.ts';
import { DomainInformation } from '../models/DomainInformation.ts';
import { DomainIssuesDto } from '../models/DomainIssuesDto.ts';
import { DomainMonitorAlertSinkDto } from '../models/DomainMonitorAlertSinkDto.ts';
import { DomainMonitorDkimSignatureDto } from '../models/DomainMonitorDkimSignatureDto.ts';
import { DomainMonitorDto } from '../models/DomainMonitorDto.ts';
import { DomainMonitorEmailVerificationDto } from '../models/DomainMonitorEmailVerificationDto.ts';
import { DomainMonitorInsightsDto } from '../models/DomainMonitorInsightsDto.ts';
import { DomainMonitorObservedAuthSampleDto } from '../models/DomainMonitorObservedAuthSampleDto.ts';
import { DomainMonitorRunComparisonDto } from '../models/DomainMonitorRunComparisonDto.ts';
import { DomainMonitorRunDto } from '../models/DomainMonitorRunDto.ts';
import { DomainMonitorRunDueResult } from '../models/DomainMonitorRunDueResult.ts';
import { DomainMonitorRunEvidenceDto } from '../models/DomainMonitorRunEvidenceDto.ts';
import { DomainMonitorRunNowResult } from '../models/DomainMonitorRunNowResult.ts';
import { DomainMonitorSeriesDto } from '../models/DomainMonitorSeriesDto.ts';
import { DomainMonitorSeriesPointDto } from '../models/DomainMonitorSeriesPointDto.ts';
import { DomainMonitorSummaryDto } from '../models/DomainMonitorSummaryDto.ts';
import { DomainNameRecord } from '../models/DomainNameRecord.ts';
import { DomainPreview } from '../models/DomainPreview.ts';
import { DomainRegionGroup } from '../models/DomainRegionGroup.ts';
import { DomainRegionGroupsDto } from '../models/DomainRegionGroupsDto.ts';
import { DomainRegionInformation } from '../models/DomainRegionInformation.ts';
import { DownloadAttachmentDto } from '../models/DownloadAttachmentDto.ts';
import { Email } from '../models/Email.ts';
import { EmailAnalysis } from '../models/EmailAnalysis.ts';
import { EmailAuditAnalysisResult } from '../models/EmailAuditAnalysisResult.ts';
import { EmailAuditCheck } from '../models/EmailAuditCheck.ts';
import { EmailAuditComparisonDto } from '../models/EmailAuditComparisonDto.ts';
import { EmailAuditDto } from '../models/EmailAuditDto.ts';
import { EmailAuditSpellingIssue } from '../models/EmailAuditSpellingIssue.ts';
import { EmailAuditUrlIssue } from '../models/EmailAuditUrlIssue.ts';
import { EmailAvailableResult } from '../models/EmailAvailableResult.ts';
import { EmailBlacklistDomainResult } from '../models/EmailBlacklistDomainResult.ts';
import { EmailBlacklistIpResult } from '../models/EmailBlacklistIpResult.ts';
import { EmailBlacklistListingResult } from '../models/EmailBlacklistListingResult.ts';
import { EmailContentMatchResult } from '../models/EmailContentMatchResult.ts';
import { EmailContentPartResult } from '../models/EmailContentPartResult.ts';
import { EmailDomainReputationOptions } from '../models/EmailDomainReputationOptions.ts';
import { EmailDomainReputationResult } from '../models/EmailDomainReputationResult.ts';
import { EmailDraftDto } from '../models/EmailDraftDto.ts';
import { EmailDraftProjection } from '../models/EmailDraftProjection.ts';
import { EmailFeatureCategoryName } from '../models/EmailFeatureCategoryName.ts';
import { EmailFeatureFamilyName } from '../models/EmailFeatureFamilyName.ts';
import { EmailFeatureFamilyStatistics } from '../models/EmailFeatureFamilyStatistics.ts';
import { EmailFeatureNames } from '../models/EmailFeatureNames.ts';
import { EmailFeatureOverview } from '../models/EmailFeatureOverview.ts';
import { EmailFeaturePlatformName } from '../models/EmailFeaturePlatformName.ts';
import { EmailFeaturePlatformStatistics } from '../models/EmailFeaturePlatformStatistics.ts';
import { EmailFeatureSupportFlags } from '../models/EmailFeatureSupportFlags.ts';
import { EmailFeatureSupportResult } from '../models/EmailFeatureSupportResult.ts';
import { EmailFeatureSupportStatusPercentage } from '../models/EmailFeatureSupportStatusPercentage.ts';
import { EmailFeatureVersionStatistics } from '../models/EmailFeatureVersionStatistics.ts';
import { EmailHeaderAnalysisSummary } from '../models/EmailHeaderAnalysisSummary.ts';
import { EmailHeaderReceivedHop } from '../models/EmailHeaderReceivedHop.ts';
import { EmailHtmlDto } from '../models/EmailHtmlDto.ts';
import { EmailIntelligenceListResult } from '../models/EmailIntelligenceListResult.ts';
import { EmailIntelligenceOptions } from '../models/EmailIntelligenceOptions.ts';
import { EmailIntelligenceResultDto } from '../models/EmailIntelligenceResultDto.ts';
import { EmailIntelligenceScoreBreakdownDto } from '../models/EmailIntelligenceScoreBreakdownDto.ts';
import { EmailIntelligenceSignalsDto } from '../models/EmailIntelligenceSignalsDto.ts';
import { EmailIntelligenceTestsOptions } from '../models/EmailIntelligenceTestsOptions.ts';
import { EmailLinksResult } from '../models/EmailLinksResult.ts';
import { EmailPreview } from '../models/EmailPreview.ts';
import { EmailPreviewHtmlDto } from '../models/EmailPreviewHtmlDto.ts';
import { EmailPreviewUrls } from '../models/EmailPreviewUrls.ts';
import { EmailProjection } from '../models/EmailProjection.ts';
import { EmailRecipients } from '../models/EmailRecipients.ts';
import { EmailRecipientsProjection } from '../models/EmailRecipientsProjection.ts';
import { EmailScreenshotResult } from '../models/EmailScreenshotResult.ts';
import { EmailSignature } from '../models/EmailSignature.ts';
import { EmailSignatureParseResult } from '../models/EmailSignatureParseResult.ts';
import { EmailTextLinesResult } from '../models/EmailTextLinesResult.ts';
import { EmailThreadDto } from '../models/EmailThreadDto.ts';
import { EmailThreadItem } from '../models/EmailThreadItem.ts';
import { EmailThreadItemsDto } from '../models/EmailThreadItemsDto.ts';
import { EmailThreadProjection } from '../models/EmailThreadProjection.ts';
import { EmailValidationRequestDto } from '../models/EmailValidationRequestDto.ts';
import { EmailVerificationResult } from '../models/EmailVerificationResult.ts';
import { EmailWarmupContentOptions } from '../models/EmailWarmupContentOptions.ts';
import { EmailWarmupDailyActivityDto } from '../models/EmailWarmupDailyActivityDto.ts';
import { EmailWarmupDomainHealthDto } from '../models/EmailWarmupDomainHealthDto.ts';
import { EmailWarmupOverviewDto } from '../models/EmailWarmupOverviewDto.ts';
import { EmailWarmupPacingDto } from '../models/EmailWarmupPacingDto.ts';
import { EmailWarmupPlacementCheckDto } from '../models/EmailWarmupPlacementCheckDto.ts';
import { EmailWarmupPlacementDeltaDto } from '../models/EmailWarmupPlacementDeltaDto.ts';
import { EmailWarmupPostmasterSignalsDto } from '../models/EmailWarmupPostmasterSignalsDto.ts';
import { EmailWarmupProgramAnalyticsDto } from '../models/EmailWarmupProgramAnalyticsDto.ts';
import { EmailWarmupProgramCommandOptions } from '../models/EmailWarmupProgramCommandOptions.ts';
import { EmailWarmupProgramDto } from '../models/EmailWarmupProgramDto.ts';
import { EmailWarmupProgramPageDto } from '../models/EmailWarmupProgramPageDto.ts';
import { EmailWarmupProgramProgressDto } from '../models/EmailWarmupProgramProgressDto.ts';
import { EmailWarmupProviderPlacementDto } from '../models/EmailWarmupProviderPlacementDto.ts';
import { EmailWarmupReadinessDto } from '../models/EmailWarmupReadinessDto.ts';
import { EmailWarmupSendSlotDto } from '../models/EmailWarmupSendSlotDto.ts';
import { EmailWarmupSendSlotPageDto } from '../models/EmailWarmupSendSlotPageDto.ts';
import { EmailWarmupTodayDto } from '../models/EmailWarmupTodayDto.ts';
import { EmailWarmupUsageSummaryDto } from '../models/EmailWarmupUsageSummaryDto.ts';
import { EmergencyAddress } from '../models/EmergencyAddress.ts';
import { EmergencyAddressDto } from '../models/EmergencyAddressDto.ts';
import { EmptyResponseDto } from '../models/EmptyResponseDto.ts';
import { EntityAutomationItemProjection } from '../models/EntityAutomationItemProjection.ts';
import { EntityEventItemProjection } from '../models/EntityEventItemProjection.ts';
import { EntityFavouriteItemProjection } from '../models/EntityFavouriteItemProjection.ts';
import { EnvironmentAccountLinkDto } from '../models/EnvironmentAccountLinkDto.ts';
import { EnvironmentAccountsDto } from '../models/EnvironmentAccountsDto.ts';
import { ExchangePostmasterCodeOptions } from '../models/ExchangePostmasterCodeOptions.ts';
import { ExpirationDefaults } from '../models/ExpirationDefaults.ts';
import { ExpiredInboxDto } from '../models/ExpiredInboxDto.ts';
import { ExpiredInboxRecordProjection } from '../models/ExpiredInboxRecordProjection.ts';
import { ExportLink } from '../models/ExportLink.ts';
import { ExportOptions } from '../models/ExportOptions.ts';
import { ExportTransformerOptions } from '../models/ExportTransformerOptions.ts';
import { ExportTransformerResponse } from '../models/ExportTransformerResponse.ts';
import { ExportTransformerResultJobDto } from '../models/ExportTransformerResultJobDto.ts';
import { ExtractAIMessageOptions } from '../models/ExtractAIMessageOptions.ts';
import { ExtractAttachmentTextOptions } from '../models/ExtractAttachmentTextOptions.ts';
import { ExtractAttachmentTextResult } from '../models/ExtractAttachmentTextResult.ts';
import { ExtractCodesOptions } from '../models/ExtractCodesOptions.ts';
import { ExtractCodesResult } from '../models/ExtractCodesResult.ts';
import { FakeEmailDto } from '../models/FakeEmailDto.ts';
import { FakeEmailPreview } from '../models/FakeEmailPreview.ts';
import { FakeEmailResult } from '../models/FakeEmailResult.ts';
import { FilterBouncedRecipientsOptions } from '../models/FilterBouncedRecipientsOptions.ts';
import { FilterBouncedRecipientsResult } from '../models/FilterBouncedRecipientsResult.ts';
import { FlushExpiredInboxesResult } from '../models/FlushExpiredInboxesResult.ts';
import { ForwardEmailOptions } from '../models/ForwardEmailOptions.ts';
import { FreeInboxDto } from '../models/FreeInboxDto.ts';
import { FreeInboxMessageDto } from '../models/FreeInboxMessageDto.ts';
import { GenerateBimiRecordOptions } from '../models/GenerateBimiRecordOptions.ts';
import { GenerateBimiRecordResults } from '../models/GenerateBimiRecordResults.ts';
import { GenerateDmarcRecordOptions } from '../models/GenerateDmarcRecordOptions.ts';
import { GenerateDmarcRecordResults } from '../models/GenerateDmarcRecordResults.ts';
import { GenerateMtaStsRecordOptions } from '../models/GenerateMtaStsRecordOptions.ts';
import { GenerateMtaStsRecordResults } from '../models/GenerateMtaStsRecordResults.ts';
import { GenerateSpfRecordOptions } from '../models/GenerateSpfRecordOptions.ts';
import { GenerateSpfRecordResults } from '../models/GenerateSpfRecordResults.ts';
import { GenerateStructuredContentAttachmentOptions } from '../models/GenerateStructuredContentAttachmentOptions.ts';
import { GenerateStructuredContentEmailOptions } from '../models/GenerateStructuredContentEmailOptions.ts';
import { GenerateStructuredContentSmsOptions } from '../models/GenerateStructuredContentSmsOptions.ts';
import { GenerateTlsReportingRecordOptions } from '../models/GenerateTlsReportingRecordOptions.ts';
import { GenerateTlsReportingRecordResults } from '../models/GenerateTlsReportingRecordResults.ts';
import { GetEmailScreenshotOptions } from '../models/GetEmailScreenshotOptions.ts';
import { GetNextAgentWorkItemOptions } from '../models/GetNextAgentWorkItemOptions.ts';
import { GetOrCreatePhonePoolOptions } from '../models/GetOrCreatePhonePoolOptions.ts';
import { GravatarUrl } from '../models/GravatarUrl.ts';
import { GroupContactsDto } from '../models/GroupContactsDto.ts';
import { GroupDto } from '../models/GroupDto.ts';
import { GroupProjection } from '../models/GroupProjection.ts';
import { GuestPortalDto } from '../models/GuestPortalDto.ts';
import { GuestPortalUserCreateDto } from '../models/GuestPortalUserCreateDto.ts';
import { GuestPortalUserDto } from '../models/GuestPortalUserDto.ts';
import { GuestPortalUserProjection } from '../models/GuestPortalUserProjection.ts';
import { HTMLValidationResult } from '../models/HTMLValidationResult.ts';
import { HomeExperienceChecklistDto } from '../models/HomeExperienceChecklistDto.ts';
import { HomeExperienceChecklistStepDto } from '../models/HomeExperienceChecklistStepDto.ts';
import { HomeExperienceDto } from '../models/HomeExperienceDto.ts';
import { HomeExperienceFirstValueDto } from '../models/HomeExperienceFirstValueDto.ts';
import { HomeExperienceUpgradeContextDto } from '../models/HomeExperienceUpgradeContextDto.ts';
import { IPAddressResult } from '../models/IPAddressResult.ts';
import { ImageIssue } from '../models/ImageIssue.ts';
import { ImapAccessDetails } from '../models/ImapAccessDetails.ts';
import { ImapEmailProjection } from '../models/ImapEmailProjection.ts';
import { ImapFlagOperationOptions } from '../models/ImapFlagOperationOptions.ts';
import { ImapMailboxStatus } from '../models/ImapMailboxStatus.ts';
import { ImapServerFetchItem } from '../models/ImapServerFetchItem.ts';
import { ImapServerFetchResult } from '../models/ImapServerFetchResult.ts';
import { ImapServerGetResult } from '../models/ImapServerGetResult.ts';
import { ImapServerListOptions } from '../models/ImapServerListOptions.ts';
import { ImapServerListResult } from '../models/ImapServerListResult.ts';
import { ImapServerMailboxResult } from '../models/ImapServerMailboxResult.ts';
import { ImapServerSearchOptions } from '../models/ImapServerSearchOptions.ts';
import { ImapServerSearchResult } from '../models/ImapServerSearchResult.ts';
import { ImapServerStatusOptions } from '../models/ImapServerStatusOptions.ts';
import { ImapServerStatusResult } from '../models/ImapServerStatusResult.ts';
import { ImapSmtpAccessDetails } from '../models/ImapSmtpAccessDetails.ts';
import { ImapSmtpAccessServers } from '../models/ImapSmtpAccessServers.ts';
import { ImapUpdateFlagsOptions } from '../models/ImapUpdateFlagsOptions.ts';
import { ImportEmailOptions } from '../models/ImportEmailOptions.ts';
import { InboxAutomationMatchOption } from '../models/InboxAutomationMatchOption.ts';
import { InboxAutomationMatchOptions } from '../models/InboxAutomationMatchOptions.ts';
import { InboxByEmailAddressResult } from '../models/InboxByEmailAddressResult.ts';
import { InboxByNameResult } from '../models/InboxByNameResult.ts';
import { InboxDto } from '../models/InboxDto.ts';
import { InboxExistsDto } from '../models/InboxExistsDto.ts';
import { InboxForwarderDto } from '../models/InboxForwarderDto.ts';
import { InboxForwarderEventDto } from '../models/InboxForwarderEventDto.ts';
import { InboxForwarderEventProjection } from '../models/InboxForwarderEventProjection.ts';
import { InboxForwarderTestOptions } from '../models/InboxForwarderTestOptions.ts';
import { InboxForwarderTestResult } from '../models/InboxForwarderTestResult.ts';
import { InboxIdItem } from '../models/InboxIdItem.ts';
import { InboxIdsResult } from '../models/InboxIdsResult.ts';
import { InboxPlacementAnalysisBundleDto } from '../models/InboxPlacementAnalysisBundleDto.ts';
import { InboxPlacementAnalysisDetailTableDto } from '../models/InboxPlacementAnalysisDetailTableDto.ts';
import { InboxPlacementAnalysisItemDto } from '../models/InboxPlacementAnalysisItemDto.ts';
import { InboxPlacementAnalyticsBreakdownDto } from '../models/InboxPlacementAnalyticsBreakdownDto.ts';
import { InboxPlacementAnalyticsGroupSeriesDto } from '../models/InboxPlacementAnalyticsGroupSeriesDto.ts';
import { InboxPlacementAnalyticsRunDto } from '../models/InboxPlacementAnalyticsRunDto.ts';
import { InboxPlacementAnalyticsSeriesDto } from '../models/InboxPlacementAnalyticsSeriesDto.ts';
import { InboxPlacementAnalyticsSeriesPointDto } from '../models/InboxPlacementAnalyticsSeriesPointDto.ts';
import { InboxPlacementAnalyticsSummaryDto } from '../models/InboxPlacementAnalyticsSummaryDto.ts';
import { InboxPlacementDeliverabilitySummaryDto } from '../models/InboxPlacementDeliverabilitySummaryDto.ts';
import { InboxPlacementDomainMonitorSummaryDto } from '../models/InboxPlacementDomainMonitorSummaryDto.ts';
import { InboxPlacementFolderBreakdownDto } from '../models/InboxPlacementFolderBreakdownDto.ts';
import { InboxPlacementProviderAnalysisCheckDto } from '../models/InboxPlacementProviderAnalysisCheckDto.ts';
import { InboxPlacementProviderAnalysisDto } from '../models/InboxPlacementProviderAnalysisDto.ts';
import { InboxPlacementProviderAnalysisOptionsDto } from '../models/InboxPlacementProviderAnalysisOptionsDto.ts';
import { InboxPlacementProviderAnalysisPreviewDto } from '../models/InboxPlacementProviderAnalysisPreviewDto.ts';
import { InboxPlacementProviderAnalysisSectionDto } from '../models/InboxPlacementProviderAnalysisSectionDto.ts';
import { InboxPlacementProviderBreakdownDto } from '../models/InboxPlacementProviderBreakdownDto.ts';
import { InboxPlacementPublicShareDto } from '../models/InboxPlacementPublicShareDto.ts';
import { InboxPlacementPublicTestRunDto } from '../models/InboxPlacementPublicTestRunDto.ts';
import { InboxPlacementRemoteResultsDto } from '../models/InboxPlacementRemoteResultsDto.ts';
import { InboxPlacementRemoteTestSummaryDto } from '../models/InboxPlacementRemoteTestSummaryDto.ts';
import { InboxPlacementSenderBreakdownDto } from '../models/InboxPlacementSenderBreakdownDto.ts';
import { InboxPlacementSpamScoreDto } from '../models/InboxPlacementSpamScoreDto.ts';
import { InboxPlacementTargetResultDto } from '../models/InboxPlacementTargetResultDto.ts';
import { InboxPlacementTestResultsDto } from '../models/InboxPlacementTestResultsDto.ts';
import { InboxPlacementTestRunDto } from '../models/InboxPlacementTestRunDto.ts';
import { InboxPreview } from '../models/InboxPreview.ts';
import { InboxReplierDto } from '../models/InboxReplierDto.ts';
import { InboxReplierEventProjection } from '../models/InboxReplierEventProjection.ts';
import { InboxRetentionPoliciesDto } from '../models/InboxRetentionPoliciesDto.ts';
import { InboxRetentionPolicyDto } from '../models/InboxRetentionPolicyDto.ts';
import { InboxRetentionPolicyOptionalDto } from '../models/InboxRetentionPolicyOptionalDto.ts';
import { InboxRetentionPolicyRunDto } from '../models/InboxRetentionPolicyRunDto.ts';
import { InboxRulesetTestResult } from '../models/InboxRulesetTestResult.ts';
import { InlineObject6 } from '../models/InlineObject6.ts';
import { InvokeTransformerOptions } from '../models/InvokeTransformerOptions.ts';
import { JSONSchemaDto } from '../models/JSONSchemaDto.ts';
import { JsonNode } from '../models/JsonNode.ts';
import { LinkIssue } from '../models/LinkIssue.ts';
import { ListUnsubscribeRecipientProjection } from '../models/ListUnsubscribeRecipientProjection.ts';
import { LookupBimiDomainOptions } from '../models/LookupBimiDomainOptions.ts';
import { LookupBimiDomainResults } from '../models/LookupBimiDomainResults.ts';
import { LookupDkimDomainOptions } from '../models/LookupDkimDomainOptions.ts';
import { LookupDkimDomainResults } from '../models/LookupDkimDomainResults.ts';
import { LookupDmarcDomainOptions } from '../models/LookupDmarcDomainOptions.ts';
import { LookupDmarcDomainResults } from '../models/LookupDmarcDomainResults.ts';
import { LookupMtaStsDomainOptions } from '../models/LookupMtaStsDomainOptions.ts';
import { LookupMtaStsDomainResults } from '../models/LookupMtaStsDomainResults.ts';
import { LookupMxRecordsOptions } from '../models/LookupMxRecordsOptions.ts';
import { LookupMxRecordsResults } from '../models/LookupMxRecordsResults.ts';
import { LookupPtrOptions } from '../models/LookupPtrOptions.ts';
import { LookupPtrResults } from '../models/LookupPtrResults.ts';
import { LookupSpfDomainOptions } from '../models/LookupSpfDomainOptions.ts';
import { LookupSpfDomainResults } from '../models/LookupSpfDomainResults.ts';
import { LookupTlsReportingDomainOptions } from '../models/LookupTlsReportingDomainOptions.ts';
import { LookupTlsReportingDomainResults } from '../models/LookupTlsReportingDomainResults.ts';
import { MatchOption } from '../models/MatchOption.ts';
import { MatchOptions } from '../models/MatchOptions.ts';
import { McpOAuthClientRegistrationOptions } from '../models/McpOAuthClientRegistrationOptions.ts';
import { MissedEmailDto } from '../models/MissedEmailDto.ts';
import { MissedEmailProjection } from '../models/MissedEmailProjection.ts';
import { MissedSmsDto } from '../models/MissedSmsDto.ts';
import { MissedSmsProjection } from '../models/MissedSmsProjection.ts';
import { MoveDevicePreviewRunsOptions } from '../models/MoveDevicePreviewRunsOptions.ts';
import { MoveDevicePreviewRunsResult } from '../models/MoveDevicePreviewRunsResult.ts';
import { NameServerRecord } from '../models/NameServerRecord.ts';
import { NewFakeEmailAddressResult } from '../models/NewFakeEmailAddressResult.ts';
import { OptInConsentOptions } from '../models/OptInConsentOptions.ts';
import { OptInConsentSendResult } from '../models/OptInConsentSendResult.ts';
import { OptInIdentityProjection } from '../models/OptInIdentityProjection.ts';
import { OptInSendingConsentDto } from '../models/OptInSendingConsentDto.ts';
import { OptionalConnectorDto } from '../models/OptionalConnectorDto.ts';
import { OptionalConnectorImapConnectionDto } from '../models/OptionalConnectorImapConnectionDto.ts';
import { OptionalConnectorSmtpConnectionDto } from '../models/OptionalConnectorSmtpConnectionDto.ts';
import { OptionalConnectorSyncSettingsDto } from '../models/OptionalConnectorSyncSettingsDto.ts';
import { OrganizationInboxProjection } from '../models/OrganizationInboxProjection.ts';
import { PageAITransformMappingProjection } from '../models/PageAITransformMappingProjection.ts';
import { PageAITransformProjection } from '../models/PageAITransformProjection.ts';
import { PageAITransformResultProjection } from '../models/PageAITransformResultProjection.ts';
import { PageAgentPhoneNumber } from '../models/PageAgentPhoneNumber.ts';
import { PageAlias } from '../models/PageAlias.ts';
import { PageAliasThreadProjection } from '../models/PageAliasThreadProjection.ts';
import { PageAttachmentEntity } from '../models/PageAttachmentEntity.ts';
import { PageBouncedEmail } from '../models/PageBouncedEmail.ts';
import { PageBouncedRecipients } from '../models/PageBouncedRecipients.ts';
import { PageComplaint } from '../models/PageComplaint.ts';
import { PageConnector } from '../models/PageConnector.ts';
import { PageConnectorEvents } from '../models/PageConnectorEvents.ts';
import { PageContactProjection } from '../models/PageContactProjection.ts';
import { PageDeliveryStatus } from '../models/PageDeliveryStatus.ts';
import { PageDevicePreviewRunProjection } from '../models/PageDevicePreviewRunProjection.ts';
import { PageEmailDraftProjection } from '../models/PageEmailDraftProjection.ts';
import { PageEmailPreview } from '../models/PageEmailPreview.ts';
import { PageEmailProjection } from '../models/PageEmailProjection.ts';
import { PageEmailThreadProjection } from '../models/PageEmailThreadProjection.ts';
import { PageEmailValidationRequest } from '../models/PageEmailValidationRequest.ts';
import { PageEntityAutomationItems } from '../models/PageEntityAutomationItems.ts';
import { PageEntityEventItems } from '../models/PageEntityEventItems.ts';
import { PageEntityFavouriteItems } from '../models/PageEntityFavouriteItems.ts';
import { PageExpiredInboxRecordProjection } from '../models/PageExpiredInboxRecordProjection.ts';
import { PageGroupProjection } from '../models/PageGroupProjection.ts';
import { PageGuestPortalUsers } from '../models/PageGuestPortalUsers.ts';
import { PageInboxForwarderDto } from '../models/PageInboxForwarderDto.ts';
import { PageInboxForwarderEvents } from '../models/PageInboxForwarderEvents.ts';
import { PageInboxProjection } from '../models/PageInboxProjection.ts';
import { PageInboxReplierDto } from '../models/PageInboxReplierDto.ts';
import { PageInboxReplierEvents } from '../models/PageInboxReplierEvents.ts';
import { PageInboxRetentionPolicyRunProjection } from '../models/PageInboxRetentionPolicyRunProjection.ts';
import { PageInboxTags } from '../models/PageInboxTags.ts';
import { PageListUnsubscribeRecipients } from '../models/PageListUnsubscribeRecipients.ts';
import { PageMissedEmailProjection } from '../models/PageMissedEmailProjection.ts';
import { PageMissedSmsProjection } from '../models/PageMissedSmsProjection.ts';
import { PageOptInIdentityProjection } from '../models/PageOptInIdentityProjection.ts';
import { PageOrganizationInboxProjection } from '../models/PageOrganizationInboxProjection.ts';
import { PagePhoneMessageThreadItemProjection } from '../models/PagePhoneMessageThreadItemProjection.ts';
import { PagePhoneMessageThreadProjection } from '../models/PagePhoneMessageThreadProjection.ts';
import { PagePhoneNumberProjection } from '../models/PagePhoneNumberProjection.ts';
import { PagePhoneNumberReleaseProjection } from '../models/PagePhoneNumberReleaseProjection.ts';
import { PagePlusAddressProjection } from '../models/PagePlusAddressProjection.ts';
import { PageReputationItems } from '../models/PageReputationItems.ts';
import { PageRulesetDto } from '../models/PageRulesetDto.ts';
import { PageScheduledJobs } from '../models/PageScheduledJobs.ts';
import { PageSentEmailProjection } from '../models/PageSentEmailProjection.ts';
import { PageSentEmailWithQueueProjection } from '../models/PageSentEmailWithQueueProjection.ts';
import { PageSentSmsProjection } from '../models/PageSentSmsProjection.ts';
import { PageSmsMessageMedia } from '../models/PageSmsMessageMedia.ts';
import { PageSmsProjection } from '../models/PageSmsProjection.ts';
import { PageSpamEmailProjection } from '../models/PageSpamEmailProjection.ts';
import { PageTableData } from '../models/PageTableData.ts';
import { PageTemplateProjection } from '../models/PageTemplateProjection.ts';
import { PageTotpDeviceProjection } from '../models/PageTotpDeviceProjection.ts';
import { PageTrackingPixelProjection } from '../models/PageTrackingPixelProjection.ts';
import { PageUnknownMissedEmailProjection } from '../models/PageUnknownMissedEmailProjection.ts';
import { PageWebhookEndpointProjection } from '../models/PageWebhookEndpointProjection.ts';
import { PageWebhookProjection } from '../models/PageWebhookProjection.ts';
import { PageWebhookResult } from '../models/PageWebhookResult.ts';
import { PageableObject } from '../models/PageableObject.ts';
import { Pagination } from '../models/Pagination.ts';
import { PhoneMessageThreadItemProjection } from '../models/PhoneMessageThreadItemProjection.ts';
import { PhoneMessageThreadProjection } from '../models/PhoneMessageThreadProjection.ts';
import { PhoneNumberDto } from '../models/PhoneNumberDto.ts';
import { PhoneNumberLineTypeIntelligenceDto } from '../models/PhoneNumberLineTypeIntelligenceDto.ts';
import { PhoneNumberLineTypeLookupDto } from '../models/PhoneNumberLineTypeLookupDto.ts';
import { PhoneNumberProjection } from '../models/PhoneNumberProjection.ts';
import { PhoneNumberReleaseProjection } from '../models/PhoneNumberReleaseProjection.ts';
import { PhoneNumberTagsOptions } from '../models/PhoneNumberTagsOptions.ts';
import { PhoneNumberValidationDto } from '../models/PhoneNumberValidationDto.ts';
import { PhonePlanAvailability } from '../models/PhonePlanAvailability.ts';
import { PhonePlanAvailabilityItem } from '../models/PhonePlanAvailabilityItem.ts';
import { PhonePlanDto } from '../models/PhonePlanDto.ts';
import { PhonePoolDetailDto } from '../models/PhonePoolDetailDto.ts';
import { PhonePoolDto } from '../models/PhonePoolDto.ts';
import { PhonePoolLeaseDto } from '../models/PhonePoolLeaseDto.ts';
import { PhonePoolMemberDto } from '../models/PhonePoolMemberDto.ts';
import { PhoneProviderCapabilitiesResult } from '../models/PhoneProviderCapabilitiesResult.ts';
import { PhoneProvisioningJobDto } from '../models/PhoneProvisioningJobDto.ts';
import { PhoneProvisioningJobItemDto } from '../models/PhoneProvisioningJobItemDto.ts';
import { PhoneSmsPrepaidCreditDto } from '../models/PhoneSmsPrepaidCreditDto.ts';
import { PhoneSmsPrepaidCreditsDto } from '../models/PhoneSmsPrepaidCreditsDto.ts';
import { PhoneSummaryCountryDto } from '../models/PhoneSummaryCountryDto.ts';
import { PhoneSummaryDto } from '../models/PhoneSummaryDto.ts';
import { PlanSummaryDto } from '../models/PlanSummaryDto.ts';
import { PlusAddressDto } from '../models/PlusAddressDto.ts';
import { PlusAddressProjection } from '../models/PlusAddressProjection.ts';
import { PostmasterConnectionDto } from '../models/PostmasterConnectionDto.ts';
import { PostmasterConnectionStatusDto } from '../models/PostmasterConnectionStatusDto.ts';
import { PostmasterDomainDto } from '../models/PostmasterDomainDto.ts';
import { PostmasterIpReputationDto } from '../models/PostmasterIpReputationDto.ts';
import { PostmasterTrafficStatsDto } from '../models/PostmasterTrafficStatsDto.ts';
import { PostmasterTrafficStatsListDto } from '../models/PostmasterTrafficStatsListDto.ts';
import { PrepareAgentReplyOptions } from '../models/PrepareAgentReplyOptions.ts';
import { ProviderSettings } from '../models/ProviderSettings.ts';
import { PublicDeviceRenderTargetDto } from '../models/PublicDeviceRenderTargetDto.ts';
import { PublicDeviceRenderTargetListDto } from '../models/PublicDeviceRenderTargetListDto.ts';
import { PublicDeviceRenderTestDto } from '../models/PublicDeviceRenderTestDto.ts';
import { PublicEmailPreviewContentDto } from '../models/PublicEmailPreviewContentDto.ts';
import { PublicSpamTestResultsDto } from '../models/PublicSpamTestResultsDto.ts';
import { PublicSpamTestRunDto } from '../models/PublicSpamTestRunDto.ts';
import { RawEmailJson } from '../models/RawEmailJson.ts';
import { Recipient } from '../models/Recipient.ts';
import { RecipientProjection } from '../models/RecipientProjection.ts';
import { RenewAgentConversationClaimOptions } from '../models/RenewAgentConversationClaimOptions.ts';
import { ReplyForSms } from '../models/ReplyForSms.ts';
import { ReplyToAliasEmailOptions } from '../models/ReplyToAliasEmailOptions.ts';
import { ReplyToEmailOptions } from '../models/ReplyToEmailOptions.ts';
import { ReputationItemProjection } from '../models/ReputationItemProjection.ts';
import { RerunDevicePreviewTargetsOptions } from '../models/RerunDevicePreviewTargetsOptions.ts';
import { RerunDevicePreviewTargetsResult } from '../models/RerunDevicePreviewTargetsResult.ts';
import { RotateAutomatedInboxPlacementConnectionCredentialsOptions } from '../models/RotateAutomatedInboxPlacementConnectionCredentialsOptions.ts';
import { RotateSendingConnectionCredentialsOptions } from '../models/RotateSendingConnectionCredentialsOptions.ts';
import { RulesetDto } from '../models/RulesetDto.ts';
import { RulesetTestOptions } from '../models/RulesetTestOptions.ts';
import { ScheduledJob } from '../models/ScheduledJob.ts';
import { ScheduledJobDto } from '../models/ScheduledJobDto.ts';
import { ScimEmail } from '../models/ScimEmail.ts';
import { ScimGroupResource } from '../models/ScimGroupResource.ts';
import { ScimMember } from '../models/ScimMember.ts';
import { ScimMeta } from '../models/ScimMeta.ts';
import { ScimName } from '../models/ScimName.ts';
import { ScimPatchOperation } from '../models/ScimPatchOperation.ts';
import { ScimPatchRequest } from '../models/ScimPatchRequest.ts';
import { ScimUserResource } from '../models/ScimUserResource.ts';
import { ScopedEmailThread } from '../models/ScopedEmailThread.ts';
import { SearchAvailablePhoneNumbersOptions } from '../models/SearchAvailablePhoneNumbersOptions.ts';
import { SearchEmailsOptions } from '../models/SearchEmailsOptions.ts';
import { SearchInboxesOptions } from '../models/SearchInboxesOptions.ts';
import { SendEmailBodyPart } from '../models/SendEmailBodyPart.ts';
import { SendEmailOptions } from '../models/SendEmailOptions.ts';
import { SendOptInConsentEmailOptions } from '../models/SendOptInConsentEmailOptions.ts';
import { SendSMTPEnvelopeFromS3Options } from '../models/SendSMTPEnvelopeFromS3Options.ts';
import { SendSMTPEnvelopeOptions } from '../models/SendSMTPEnvelopeOptions.ts';
import { SendWithQueueResult } from '../models/SendWithQueueResult.ts';
import { Sender } from '../models/Sender.ts';
import { SenderProjection } from '../models/SenderProjection.ts';
import { SendingConnectionApiKeyOptions } from '../models/SendingConnectionApiKeyOptions.ts';
import { SendingConnectionDeliveryProbeDto } from '../models/SendingConnectionDeliveryProbeDto.ts';
import { SendingConnectionDto } from '../models/SendingConnectionDto.ts';
import { SendingConnectionProviderDto } from '../models/SendingConnectionProviderDto.ts';
import { SendingConnectionSmtpDefaults } from '../models/SendingConnectionSmtpDefaults.ts';
import { SendingConnectionSmtpHostOption } from '../models/SendingConnectionSmtpHostOption.ts';
import { SendingConnectionSmtpOptions } from '../models/SendingConnectionSmtpOptions.ts';
import { SentEmailDto } from '../models/SentEmailDto.ts';
import { SentEmailProjection } from '../models/SentEmailProjection.ts';
import { SentSmsDto } from '../models/SentSmsDto.ts';
import { SentSmsProjection } from '../models/SentSmsProjection.ts';
import { ServerEndpoints } from '../models/ServerEndpoints.ts';
import { SetInboxFavouritedOptions } from '../models/SetInboxFavouritedOptions.ts';
import { SetPhoneFavouritedOptions } from '../models/SetPhoneFavouritedOptions.ts';
import { SimpleSendEmailOptions } from '../models/SimpleSendEmailOptions.ts';
import { SmsDto } from '../models/SmsDto.ts';
import { SmsMatchOption } from '../models/SmsMatchOption.ts';
import { SmsMatchOptions } from '../models/SmsMatchOptions.ts';
import { SmsMessageMediaDto } from '../models/SmsMessageMediaDto.ts';
import { SmsPreview } from '../models/SmsPreview.ts';
import { SmsProjection } from '../models/SmsProjection.ts';
import { SmsReplyOptions } from '../models/SmsReplyOptions.ts';
import { SmsSendOptions } from '../models/SmsSendOptions.ts';
import { SmtpAccessDetails } from '../models/SmtpAccessDetails.ts';
import { SmtpAuthDiagnosticResult } from '../models/SmtpAuthDiagnosticResult.ts';
import { SmtpDiagnosticStep } from '../models/SmtpDiagnosticStep.ts';
import { SmtpMailMessageBucketPath } from '../models/SmtpMailMessageBucketPath.ts';
import { SmtpTlsDiagnosticResult } from '../models/SmtpTlsDiagnosticResult.ts';
import { SortObject } from '../models/SortObject.ts';
import { SpamEmailProjection } from '../models/SpamEmailProjection.ts';
import { SpellingIssue } from '../models/SpellingIssue.ts';
import { SpfMechanismResult } from '../models/SpfMechanismResult.ts';
import { StructuredContentResultDto } from '../models/StructuredContentResultDto.ts';
import { StructuredOutputSchema } from '../models/StructuredOutputSchema.ts';
import { StructuredOutputSchemaValidation } from '../models/StructuredOutputSchemaValidation.ts';
import { SubmitPublicDeviceRenderHtmlOptions } from '../models/SubmitPublicDeviceRenderHtmlOptions.ts';
import { SubmitPublicSpamTestOptions } from '../models/SubmitPublicSpamTestOptions.ts';
import { SubscriptionDto } from '../models/SubscriptionDto.ts';
import { SwitchAccountOptions } from '../models/SwitchAccountOptions.ts';
import { TemplateDto } from '../models/TemplateDto.ts';
import { TemplatePreview } from '../models/TemplatePreview.ts';
import { TemplateProjection } from '../models/TemplateProjection.ts';
import { TemplateVariable } from '../models/TemplateVariable.ts';
import { TemporaryAccessKeyDto } from '../models/TemporaryAccessKeyDto.ts';
import { TenantReputationFindingDto } from '../models/TenantReputationFindingDto.ts';
import { TenantReputationFindingsDto } from '../models/TenantReputationFindingsDto.ts';
import { TenantReputationStatusRowDto } from '../models/TenantReputationStatusRowDto.ts';
import { TenantReputationStatusSummaryDto } from '../models/TenantReputationStatusSummaryDto.ts';
import { TestInboxRulesetSendingOptions } from '../models/TestInboxRulesetSendingOptions.ts';
import { TestNewInboxForwarderOptions } from '../models/TestNewInboxForwarderOptions.ts';
import { TestNewInboxRulesetOptions } from '../models/TestNewInboxRulesetOptions.ts';
import { TestPhoneNumberOptions } from '../models/TestPhoneNumberOptions.ts';
import { TestRulesetReceivingOptions } from '../models/TestRulesetReceivingOptions.ts';
import { TestRulesetReceivingResult } from '../models/TestRulesetReceivingResult.ts';
import { TestRulesetSendingResult } from '../models/TestRulesetSendingResult.ts';
import { TestSmtpServerOptions } from '../models/TestSmtpServerOptions.ts';
import { TestSmtpServerResults } from '../models/TestSmtpServerResults.ts';
import { TotpDeviceCodeDto } from '../models/TotpDeviceCodeDto.ts';
import { TotpDeviceDto } from '../models/TotpDeviceDto.ts';
import { TotpDeviceOptionalDto } from '../models/TotpDeviceOptionalDto.ts';
import { TotpDeviceProjection } from '../models/TotpDeviceProjection.ts';
import { TrackingPixelDto } from '../models/TrackingPixelDto.ts';
import { TrackingPixelProjection } from '../models/TrackingPixelProjection.ts';
import { UnknownMissedEmailProjection } from '../models/UnknownMissedEmailProjection.ts';
import { UnreadCount } from '../models/UnreadCount.ts';
import { UnseenErrorCountDto } from '../models/UnseenErrorCountDto.ts';
import { UpdateAliasOptions } from '../models/UpdateAliasOptions.ts';
import { UpdateAutomatedInboxPlacementConnectionOptions } from '../models/UpdateAutomatedInboxPlacementConnectionOptions.ts';
import { UpdateAutomatedInboxPlacementScheduleOptions } from '../models/UpdateAutomatedInboxPlacementScheduleOptions.ts';
import { UpdateCampaignProbeOptions } from '../models/UpdateCampaignProbeOptions.ts';
import { UpdateDeliverabilityTestOptions } from '../models/UpdateDeliverabilityTestOptions.ts';
import { UpdateDeliverySenderSeatsOptions } from '../models/UpdateDeliverySenderSeatsOptions.ts';
import { UpdateDevicePreviewFeedbackOptions } from '../models/UpdateDevicePreviewFeedbackOptions.ts';
import { UpdateDevicePreviewFolderOptions } from '../models/UpdateDevicePreviewFolderOptions.ts';
import { UpdateDevicePreviewIngestDomainOptions } from '../models/UpdateDevicePreviewIngestDomainOptions.ts';
import { UpdateDevicePreviewProfileOptions } from '../models/UpdateDevicePreviewProfileOptions.ts';
import { UpdateDomainMonitorOptions } from '../models/UpdateDomainMonitorOptions.ts';
import { UpdateDomainOptions } from '../models/UpdateDomainOptions.ts';
import { UpdateEmailWarmupProgramOptions } from '../models/UpdateEmailWarmupProgramOptions.ts';
import { UpdateEmailWarmupSenderSeatsOptions } from '../models/UpdateEmailWarmupSenderSeatsOptions.ts';
import { UpdateGroupContacts } from '../models/UpdateGroupContacts.ts';
import { UpdateImapAccessOptions } from '../models/UpdateImapAccessOptions.ts';
import { UpdateInboxOptions } from '../models/UpdateInboxOptions.ts';
import { UpdateInboxReplierActiveOptions } from '../models/UpdateInboxReplierActiveOptions.ts';
import { UpdateInboxReplierOptions } from '../models/UpdateInboxReplierOptions.ts';
import { UpdateInboxRetentionPolicyOptions } from '../models/UpdateInboxRetentionPolicyOptions.ts';
import { UpdatePhoneNumberOptions } from '../models/UpdatePhoneNumberOptions.ts';
import { UpdatePhonePoolOptions } from '../models/UpdatePhonePoolOptions.ts';
import { UpdateRulesetOptions } from '../models/UpdateRulesetOptions.ts';
import { UpdateSendingConnectionOptions } from '../models/UpdateSendingConnectionOptions.ts';
import { UpdateSmtpAccessOptions } from '../models/UpdateSmtpAccessOptions.ts';
import { UpdateTotpDeviceOptions } from '../models/UpdateTotpDeviceOptions.ts';
import { UploadAttachmentOptions } from '../models/UploadAttachmentOptions.ts';
import { UserDto } from '../models/UserDto.ts';
import { UserInfoDto } from '../models/UserInfoDto.ts';
import { UserPermissionDto } from '../models/UserPermissionDto.ts';
import { UserStorageInsightItemDto } from '../models/UserStorageInsightItemDto.ts';
import { UserStorageInsightsDto } from '../models/UserStorageInsightsDto.ts';
import { ValidateEmailAddressListOptions } from '../models/ValidateEmailAddressListOptions.ts';
import { ValidateEmailAddressListResult } from '../models/ValidateEmailAddressListResult.ts';
import { ValidatePhoneNumberOptions } from '../models/ValidatePhoneNumberOptions.ts';
import { ValidationDto } from '../models/ValidationDto.ts';
import { ValidationMessage } from '../models/ValidationMessage.ts';
import { VerifyEmailAddressOptions } from '../models/VerifyEmailAddressOptions.ts';
import { VerifyWebhookSignatureOptions } from '../models/VerifyWebhookSignatureOptions.ts';
import { VerifyWebhookSignatureResults } from '../models/VerifyWebhookSignatureResults.ts';
import { WaitForAIMessageOptions } from '../models/WaitForAIMessageOptions.ts';
import { WaitForAIMessagesOptions } from '../models/WaitForAIMessagesOptions.ts';
import { WaitForConditions } from '../models/WaitForConditions.ts';
import { WaitForSingleSmsOptions } from '../models/WaitForSingleSmsOptions.ts';
import { WaitForSmsConditions } from '../models/WaitForSmsConditions.ts';
import { WebhookBouncePayload } from '../models/WebhookBouncePayload.ts';
import { WebhookBounceRecipientPayload } from '../models/WebhookBounceRecipientPayload.ts';
import { WebhookDeliveryStatusPayload } from '../models/WebhookDeliveryStatusPayload.ts';
import { WebhookDto } from '../models/WebhookDto.ts';
import { WebhookEmailOpenedPayload } from '../models/WebhookEmailOpenedPayload.ts';
import { WebhookEmailReadPayload } from '../models/WebhookEmailReadPayload.ts';
import { WebhookEndpointProjection } from '../models/WebhookEndpointProjection.ts';
import { WebhookHeaderNameValue } from '../models/WebhookHeaderNameValue.ts';
import { WebhookHeaders } from '../models/WebhookHeaders.ts';
import { WebhookNewAITransformResultPayload } from '../models/WebhookNewAITransformResultPayload.ts';
import { WebhookNewAttachmentPayload } from '../models/WebhookNewAttachmentPayload.ts';
import { WebhookNewContactPayload } from '../models/WebhookNewContactPayload.ts';
import { WebhookNewEmailPayload } from '../models/WebhookNewEmailPayload.ts';
import { WebhookNewSmsPayload } from '../models/WebhookNewSmsPayload.ts';
import { WebhookProjection } from '../models/WebhookProjection.ts';
import { WebhookRedriveAllResult } from '../models/WebhookRedriveAllResult.ts';
import { WebhookRedriveResult } from '../models/WebhookRedriveResult.ts';
import { WebhookResultDto } from '../models/WebhookResultDto.ts';
import { WebhookTestRequest } from '../models/WebhookTestRequest.ts';
import { WebhookTestResponse } from '../models/WebhookTestResponse.ts';
import { WebhookTestResult } from '../models/WebhookTestResult.ts';
import { ObservableAIControllerApi } from './ObservableAPI.ts';

import { AIControllerApiRequestFactory, AIControllerApiResponseProcessor} from "../apis/AIControllerApi.ts";
export class PromiseAIControllerApi {
    private api: ObservableAIControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AIControllerApiRequestFactory,
        responseProcessor?: AIControllerApiResponseProcessor
    ) {
        this.api = new ObservableAIControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Check named natural-language assertions against an existing email or SMS. Returns PASS, FAIL, INCONCLUSIVE or a distinct operational status. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Check named natural-language assertions against an existing email or SMS
     * @param assertAIMessageOptions 
     * @param idempotencyKey 
     */
    public assertAIMessage(assertAIMessageOptions: AssertAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessageResult> {
        const result = this.api.assertAIMessage(assertAIMessageOptions, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * Save an AI transform instructions and schema for use with webhooks and automations
     * Create a transformer for reuse in automations
     * @param aITransformCreateOptions 
     */
    public createTransformer(aITransformCreateOptions: AITransformCreateOptions, options?: Configuration): Promise<AITransformDto> {
        const result = this.api.createTransformer(aITransformCreateOptions, options);
        return result.toPromise();
    }

    /**
     * Create AI transformer mappings to other entities
     * Create transformer mapping
     * @param createAITransformerMappingOptions 
     */
    public createTransformerMappings(createAITransformerMappingOptions: CreateAITransformerMappingOptions, options?: Configuration): Promise<AITransformMappingDto> {
        const result = this.api.createTransformerMappings(createAITransformerMappingOptions, options);
        return result.toPromise();
    }

    /**
     * Delete all AI transformer mappings
     * Delete all transformer mapping
     */
    public deleteAllTransformerMappings(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllTransformerMappings(options);
        return result.toPromise();
    }

    /**
     * Delete an AI transformer and schemas by ID
     * Delete a transformer
     * @param id 
     */
    public deleteTransformer(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTransformer(id, options);
        return result.toPromise();
    }

    /**
     * Delete an AI transformer mapping
     * Delete transformer mapping
     * @param id ID of transform mapping
     */
    public deleteTransformerMapping(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTransformerMapping(id, options);
        return result.toPromise();
    }

    /**
     * Delete a saved AI transformer result owned by your account.
     * Delete a transformer result
     * @param id 
     */
    public deleteTransformerResult(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTransformerResult(id, options);
        return result.toPromise();
    }

    /**
     * Delete your account's saved AI results, optionally for one transformer.
     * Delete transformer results
     * @param aiTransformId 
     */
    public deleteTransformerResults(aiTransformId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTransformerResults(aiTransformId, options);
        return result.toPromise();
    }

    /**
     * Delete all AI transformers and schemas
     * Delete all transformers
     */
    public deleteTransformers(options?: Configuration): Promise<void> {
        const result = this.api.deleteTransformers(options);
        return result.toPromise();
    }

    /**
     * Export AI transformer results in formats such as Excel, CSV, XML etc.
     * Export transformer results
     * @param exportTransformerOptions 
     */
    public exportTransformerResults(exportTransformerOptions: ExportTransformerOptions, options?: Configuration): Promise<ExportTransformerResponse> {
        const result = this.api.exportTransformerResults(exportTransformerOptions, options);
        return result.toPromise();
    }

    /**
     * Extract schema-validated data from an existing email or SMS with verified source evidence. Missing or ambiguous data is not invented. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Extract schema-validated data from an existing email or SMS with verified source evidence
     * @param extractAIMessageOptions 
     * @param idempotencyKey 
     */
    public extractAIMessage(extractAIMessageOptions: ExtractAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessageResult> {
        const result = this.api.extractAIMessage(extractAIMessageOptions, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * Use output schemas to extract data from an attachment using AI
     * Generate structured content for an attachment
     * @param generateStructuredContentAttachmentOptions 
     */
    public generateStructuredContentFromAttachment(generateStructuredContentAttachmentOptions: GenerateStructuredContentAttachmentOptions, options?: Configuration): Promise<StructuredContentResultDto> {
        const result = this.api.generateStructuredContentFromAttachment(generateStructuredContentAttachmentOptions, options);
        return result.toPromise();
    }

    /**
     * Use output schemas to extract data from an email using AI
     * Generate structured content for an email
     * @param generateStructuredContentEmailOptions 
     */
    public generateStructuredContentFromEmail(generateStructuredContentEmailOptions: GenerateStructuredContentEmailOptions, options?: Configuration): Promise<StructuredContentResultDto> {
        const result = this.api.generateStructuredContentFromEmail(generateStructuredContentEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Use output schemas to extract data from an SMS using AI
     * Generate structured content for a TXT message
     * @param generateStructuredContentSmsOptions 
     */
    public generateStructuredContentFromSms(generateStructuredContentSmsOptions: GenerateStructuredContentSmsOptions, options?: Configuration): Promise<StructuredContentResultDto> {
        const result = this.api.generateStructuredContentFromSms(generateStructuredContentSmsOptions, options);
        return result.toPromise();
    }

    /**
     * Discover enum model selectors, resolved provider models, evaluator versions and token multipliers. Pinned models never silently fall back.
     * List supported message-testing AI models
     */
    public getAIMessageModels(options?: Configuration): Promise<Array<AIMessageModelDto>> {
        const result = this.api.getAIMessageModels(options);
        return result.toPromise();
    }

    /**
     * Get the job status for an export
     * Get export transformer results job
     * @param id 
     */
    public getExportTransformerResultsJob(id: string, options?: Configuration): Promise<ExportTransformerResultJobDto> {
        const result = this.api.getExportTransformerResultsJob(id, options);
        return result.toPromise();
    }

    /**
     * Get AI transformer and schemas by ID
     * Get a transformer
     * @param id 
     */
    public getTransformer(id: string, options?: Configuration): Promise<AITransformDto> {
        const result = this.api.getTransformer(id, options);
        return result.toPromise();
    }

    /**
     * Get an AI transformer mapping
     * Get transformer mapping
     * @param id ID of transform mapping
     */
    public getTransformerMapping(id: string, options?: Configuration): Promise<AITransformMappingDto> {
        const result = this.api.getTransformerMapping(id, options);
        return result.toPromise();
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
    public getTransformerMappings(aiTransformId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageAITransformMappingProjection> {
        const result = this.api.getTransformerMappings(aiTransformId, entityId, entityType, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get AI transformer result
     * Get transformer result
     * @param id ID of transform result
     */
    public getTransformerResult(id: string, options?: Configuration): Promise<AITransformResultDto> {
        const result = this.api.getTransformerResult(id, options);
        return result.toPromise();
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
    public getTransformerResults(emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageAITransformResultProjection> {
        const result = this.api.getTransformerResults(emailId, smsId, attachmentId, aiTransformId, aiTransformMappingId, entityId, entityType, page, size, sort, options);
        return result.toPromise();
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
    public getTransformerResultsTable(includeMetaData: boolean, flattenArraysToRows: boolean, emailId?: string, smsId?: string, attachmentId?: string, aiTransformId?: string, aiTransformMappingId?: string, entityId?: string, entityType?: 'INBOX' | 'PHONE', page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageTableData> {
        const result = this.api.getTransformerResultsTable(includeMetaData, flattenArraysToRows, emailId, smsId, attachmentId, aiTransformId, aiTransformMappingId, entityId, entityType, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all AI transforms
     * List transformers
     * @param page 
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param include Optional list of IDs to include in result
     */
    public getTransformers(page?: number, size?: number, sort?: 'ASC' | 'DESC', include?: Array<string>, options?: Configuration): Promise<PageAITransformProjection> {
        const result = this.api.getTransformers(page, size, sort, include, options);
        return result.toPromise();
    }

    /**
     * Execute an AI transformer to generate structured content
     * Invoke a transformer
     * @param invokeTransformerOptions 
     */
    public invokeTransformer(invokeTransformerOptions: InvokeTransformerOptions, options?: Configuration): Promise<ConditionalStructuredContentResult> {
        const result = this.api.invokeTransformer(invokeTransformerOptions, options);
        return result.toPromise();
    }

    /**
     * Evaluate transform mapping match conditions for given email, sms, or attachment
     * Test transformer mapping match result
     * @param id ID of transform mapping
     * @param emailId 
     * @param smsId 
     * @param attachmentId 
     */
    public testTransformerMappingMatch(id: string, emailId?: string, smsId?: string, attachmentId?: string, options?: Configuration): Promise<AITransformMappingMatchResult> {
        const result = this.api.testTransformerMappingMatch(id, emailId, smsId, attachmentId, options);
        return result.toPromise();
    }

    /**
     * Check if a schema is valid and can be used to extract data using AI
     * Validate structured content schema
     * @param structuredOutputSchema 
     */
    public validateStructuredOutputSchema(structuredOutputSchema: StructuredOutputSchema, options?: Configuration): Promise<StructuredOutputSchemaValidation> {
        const result = this.api.validateStructuredOutputSchema(structuredOutputSchema, options);
        return result.toPromise();
    }

    /**
     * Find a message across explicit inboxes or phones, then assert and extract from that same message. Checks never select a replacement message after failure. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Find a message across explicit inboxes or phones, then assert and extract from that same message
     * @param waitForAIMessageOptions 
     * @param idempotencyKey 
     */
    public waitForAIMessage(waitForAIMessageOptions: WaitForAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessageResult> {
        const result = this.api.waitForAIMessage(waitForAIMessageOptions, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * Wait for all named email and SMS expectations under one shared deadline and AI token budget. Idempotency-Key enables 15-minute retry deduplication; reuse it only for an identical logical request.
     * Wait for all named email and SMS expectations under one shared deadline and AI token budget
     * @param waitForAIMessagesOptions 
     * @param idempotencyKey 
     */
    public waitForAIMessages(waitForAIMessagesOptions: WaitForAIMessagesOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessagesResult> {
        const result = this.api.waitForAIMessages(waitForAIMessagesOptions, idempotencyKey, options);
        return result.toPromise();
    }


}



import { ObservableAgentControllerApi } from './ObservableAPI.ts';

import { AgentControllerApiRequestFactory, AgentControllerApiResponseProcessor} from "../apis/AgentControllerApi.ts";
export class PromiseAgentControllerApi {
    private api: ObservableAgentControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AgentControllerApiRequestFactory,
        responseProcessor?: AgentControllerApiResponseProcessor
    ) {
        this.api = new ObservableAgentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Atomically leases a conversation to one worker. A conflict means another unexpired worker owns it. Use expectedVersion to reject work selected from stale context.
     * Acquire a renewable conversation claim
     * @param conversationId 
     * @param acquireAgentConversationClaimOptions 
     */
    public agentAcquireConversationClaim(conversationId: string, acquireAgentConversationClaimOptions: AcquireAgentConversationClaimOptions, options?: Configuration): Promise<AgentConversationClaimDto> {
        const result = this.api.agentAcquireConversationClaim(conversationId, acquireAgentConversationClaimOptions, options);
        return result.toPromise();
    }

    /**
     * Adds agent/operator collaboration context without sending any email to the customer.
     * Add an internal conversation note
     * @param conversationId 
     * @param createAgentConversationNoteOptions 
     */
    public agentAddConversationNote(conversationId: string, createAgentConversationNoteOptions: CreateAgentConversationNoteOptions, options?: Configuration): Promise<AgentConversationNoteDto> {
        const result = this.api.agentAddConversationNote(conversationId, createAgentConversationNoteOptions, options);
        return result.toPromise();
    }

    /**
     * Add an internal SMS conversation note
     * @param conversationId 
     * @param createAgentSmsConversationNoteOptions 
     */
    public agentAddSmsNote(conversationId: string, createAgentSmsConversationNoteOptions: CreateAgentSmsConversationNoteOptions, options?: Configuration): Promise<AgentConversationNoteDto> {
        const result = this.api.agentAddSmsNote(conversationId, createAgentSmsConversationNoteOptions, options);
        return result.toPromise();
    }

    /**
     * Evaluates effective inbox and account sending rules before an agent creates a send action. A blocked result includes the operator recovery route.
     * Check whether sending rules allow recipients
     * @param inboxId 
     * @param agentInboxSendPolicyCheckOptions 
     */
    public agentCheckInboxSendPolicy(inboxId: string, agentInboxSendPolicyCheckOptions: AgentInboxSendPolicyCheckOptions, options?: Configuration): Promise<AgentInboxSendPolicyDto> {
        const result = this.api.agentCheckInboxSendPolicy(inboxId, agentInboxSendPolicyCheckOptions, options);
        return result.toPromise();
    }

    /**
     * Acquire an SMS conversation claim
     * @param conversationId 
     * @param acquireAgentConversationClaimOptions 
     */
    public agentClaimSmsConversation(conversationId: string, acquireAgentConversationClaimOptions: AcquireAgentConversationClaimOptions, options?: Configuration): Promise<AgentConversationClaimDto> {
        const result = this.api.agentClaimSmsConversation(conversationId, acquireAgentConversationClaimOptions, options);
        return result.toPromise();
    }

    /**
     * Revalidates conversation freshness, sends one threaded reply with an idempotency key, and releases the supplied claim only after the send succeeds.
     * Complete a work item with an idempotent reply
     * @param conversationId 
     * @param completeAgentWorkItemOptions 
     */
    public agentCompleteWorkItem(conversationId: string, completeAgentWorkItemOptions: CompleteAgentWorkItemOptions, options?: Configuration): Promise<AgentCompletedWorkItemDto> {
        const result = this.api.agentCompleteWorkItem(conversationId, completeAgentWorkItemOptions, options);
        return result.toPromise();
    }

    /**
     * Creates a saved draft in the path inbox using the same SendEmailOptions shape as sending, without sending the email.
     * Create a scoped email draft for an agent
     * @param inboxId ID of inbox to save the draft against
     * @param sendEmailOptions 
     * @param sourceEmailId Optional source email this draft responds to. When supplied, MailSlurp links the draft and later draft actions to that conversation.
     */
    public agentCreateEmailDraft(inboxId: string, sendEmailOptions: SendEmailOptions, sourceEmailId?: string, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.agentCreateEmailDraft(inboxId, sendEmailOptions, sourceEmailId, options);
        return result.toPromise();
    }

    /**
     * Creates an inbox without changing this agent connection's scopes. Account-wide scope is required so the new inbox is already covered.
     * Create an inbox with an account-wide inbox-manager connection
     * @param createInboxDto 
     */
    public agentCreateInbox(createInboxDto: CreateInboxDto, options?: Configuration): Promise<InboxDto> {
        const result = this.api.agentCreateInbox(createInboxDto, options);
        return result.toPromise();
    }

    /**
     * Builds the same recipients and RFC In-Reply-To/References headers as immediate reply, saves them as a draft, and preserves the required threading headers across later agent draft updates.
     * Create a correctly threaded reply draft
     * @param emailId 
     * @param replyToEmailOptions 
     */
    public agentCreateReplyDraft(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.agentCreateReplyDraft(emailId, replyToEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Create an agent-managed TOTP device from a base32 secret key
     * @param createTotpDeviceBase32SecretKeyOptions 
     */
    public agentCreateTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions: CreateTotpDeviceBase32SecretKeyOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.agentCreateTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions, options);
        return result.toPromise();
    }

    /**
     * Create an agent-managed TOTP device from custom options
     * @param createTotpDeviceCustomOptions 
     */
    public agentCreateTotpDeviceForCustom(createTotpDeviceCustomOptions: CreateTotpDeviceCustomOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.agentCreateTotpDeviceForCustom(createTotpDeviceCustomOptions, options);
        return result.toPromise();
    }

    /**
     * Create an agent-managed TOTP device from an OTP Auth URL
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public agentCreateTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.agentCreateTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions, options);
        return result.toPromise();
    }

    /**
     * Creates or returns the active review handoff and releases the supplied claim after the handoff is durable. Deferral is a normal workflow result rather than an operational failure.
     * Defer a work item to human review
     * @param conversationId 
     * @param deferAgentWorkItemOptions 
     */
    public agentDeferWorkItem(conversationId: string, deferAgentWorkItemOptions: DeferAgentWorkItemOptions, options?: Configuration): Promise<AgentDeferredWorkItemDto> {
        const result = this.api.agentDeferWorkItem(conversationId, deferAgentWorkItemOptions, options);
        return result.toPromise();
    }

    /**
     * Deletes a saved draft without sending it.
     * Delete a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     */
    public agentDeleteEmailDraft(inboxId: string, draftId: string, options?: Configuration): Promise<void> {
        const result = this.api.agentDeleteEmailDraft(inboxId, draftId, options);
        return result.toPromise();
    }

    /**
     * Delete an agent-managed TOTP device
     * @param id 
     */
    public agentDeleteTotpDevice(id: string, options?: Configuration): Promise<void> {
        const result = this.api.agentDeleteTotpDevice(id, options);
        return result.toPromise();
    }

    /**
     * Extracts bounded text only after verifying both the email scope and that the attachment belongs to that email. List attachments first instead of guessing IDs.
     * Extract text from a scoped email attachment for an agent
     * @param emailId 
     * @param attachmentId 
     * @param extractAttachmentTextOptions 
     */
    public agentExtractEmailAttachmentText(emailId: string, attachmentId: string, extractAttachmentTextOptions?: ExtractAttachmentTextOptions, options?: Configuration): Promise<ExtractAttachmentTextResult> {
        const result = this.api.agentExtractEmailAttachmentText(emailId, attachmentId, extractAttachmentTextOptions, options);
        return result.toPromise();
    }

    /**
     * Generate a code for an agent-managed TOTP device
     * @param id 
     * @param at 
     * @param minSecondsUntilExpire Minimum remaining code lifetime. The request may wait for the next period when needed.
     */
    public agentGenerateTotpDeviceCode(id: string, at?: Date, minSecondsUntilExpire?: number, options?: Configuration): Promise<TotpDeviceCodeDto> {
        const result = this.api.agentGenerateTotpDeviceCode(id, at, minSecondsUntilExpire, options);
        return result.toPromise();
    }

    /**
     * Returns the connection identity, role, effective permission names, declared resource scope, feature availability, and server-enforced limits. Call this once during worker startup instead of hard-coding role behavior.
     * Discover this agent connection's capabilities
     */
    public agentGetCapabilities(options?: Configuration): Promise<AgentCapabilitiesDto> {
        const result = this.api.agentGetCapabilities(options);
        return result.toPromise();
    }

    /**
     * Returns the projected conversation plus this connection's bounded activity timeline, internal notes, and active human-review handoff.
     * Get one scoped conversation
     * @param conversationId 
     */
    public agentGetConversationV2(conversationId: string, options?: Configuration): Promise<AgentConversationDetailV2Dto> {
        const result = this.api.agentGetConversationV2(conversationId, options);
        return result.toPromise();
    }

    /**
     * Returns parsed email content after resolving the message inbox and checking agent scope.
     * Get scoped hydrated email for an agent
     * @param emailId ID of email to inspect
     */
    public agentGetEmail(emailId: string, options?: Configuration): Promise<Email> {
        const result = this.api.agentGetEmail(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a saved draft including the full SendEmailOptions payload.
     * Get a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     */
    public agentGetEmailDraft(inboxId: string, draftId: string, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.agentGetEmailDraft(inboxId, draftId, options);
        return result.toPromise();
    }

    /**
     * Returns lightweight metadata and headers for an email after resolving its inbox and checking the agent key scope.
     * Get scoped email summary for an agent
     * @param emailId ID of email to inspect
     */
    public agentGetEmailSummary(emailId: string, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.agentGetEmailSummary(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns thread metadata and ordered messages using an email ID as the authorization anchor. Arbitrary thread-ID probing is not allowed.
     * Get a scoped email thread for an agent
     * @param emailId 
     * @param sort 
     */
    public agentGetEmailThread(emailId: string, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<ScopedEmailThread> {
        const result = this.api.agentGetEmailThread(emailId, sort, options);
        return result.toPromise();
    }

    /**
     * Waits for and returns the latest email in one scoped inbox. This is the agent-shaped equivalent of latest-message polling.
     * Get latest scoped inbox email for an agent
     * @param inboxId ID of inbox the agent may read
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     * @param unreadOnly Only return unread emails
     * @param since Only return email received at or after this time
     * @param before Only return email received before this time
     */
    public agentGetLatestInboxEmail(inboxId: string, timeoutMillis?: number, unreadOnly?: boolean, since?: Date, before?: Date, options?: Configuration): Promise<Email> {
        const result = this.api.agentGetLatestInboxEmail(inboxId, timeoutMillis, unreadOnly, since, before, options);
        return result.toPromise();
    }

    /**
     * Selects the oldest available scoped conversation and atomically claims it for one worker. This combines queue selection and claim acquisition so concurrent workers do not need to coordinate those steps themselves.
     * Claim the next conversation work item
     * @param getNextAgentWorkItemOptions 
     */
    public agentGetNextWorkItem(getNextAgentWorkItemOptions: GetNextAgentWorkItemOptions, options?: Configuration): Promise<AgentWorkItemDto> {
        const result = this.api.agentGetNextWorkItem(getNextAgentWorkItemOptions, options);
        return result.toPromise();
    }

    /**
     * List SMS thread messages
     * @param phoneNumberId 
     * @param otherPhoneNumber Other participant phone number in E.164 format
     * @param page 
     * @param size 
     */
    public agentGetPhoneMessageThreadItems(phoneNumberId: string, otherPhoneNumber: string, page?: number, size?: number, options?: Configuration): Promise<PagePhoneMessageThreadItemProjection> {
        const result = this.api.agentGetPhoneMessageThreadItems(phoneNumberId, otherPhoneNumber, page, size, options);
        return result.toPromise();
    }

    /**
     * List SMS threads
     * @param phoneNumberId 
     * @param page 
     * @param size 
     */
    public agentGetPhoneMessageThreads(phoneNumberId: string, page?: number, size?: number, options?: Configuration): Promise<PagePhoneMessageThreadProjection> {
        const result = this.api.agentGetPhoneMessageThreads(phoneNumberId, page, size, options);
        return result.toPromise();
    }

    /**
     * Get an assigned phone number
     * @param phoneNumberId 
     */
    public agentGetPhoneNumber(phoneNumberId: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.agentGetPhoneNumber(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Returns only active phone numbers explicitly assigned to this agent connection.
     * List assigned phone numbers
     * @param page 
     * @param size 
     * @param sort 
     * @param search 
     */
    public agentGetPhoneNumbers(page?: number, size?: number, sort?: 'ASC' | 'DESC', search?: string, options?: Configuration): Promise<PageAgentPhoneNumber> {
        const result = this.api.agentGetPhoneNumbers(page, size, sort, search, options);
        return result.toPromise();
    }

    /**
     * Get received SMS
     * @param phoneNumberId 
     * @param smsId 
     */
    public agentGetReceivedSmsMessage(phoneNumberId: string, smsId: string, options?: Configuration): Promise<SmsDto> {
        const result = this.api.agentGetReceivedSmsMessage(phoneNumberId, smsId, options);
        return result.toPromise();
    }

    /**
     * List received SMS for an assigned phone number
     * @param phoneNumberId 
     * @param page 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param search 
     * @param favourite 
     */
    public agentGetReceivedSmsMessages(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, favourite?: boolean, options?: Configuration): Promise<PageSmsProjection> {
        const result = this.api.agentGetReceivedSmsMessages(phoneNumberId, page, size, sort, since, before, search, favourite, options);
        return result.toPromise();
    }

    /**
     * Get sent SMS
     * @param phoneNumberId 
     * @param sentSmsId 
     */
    public agentGetSentSmsMessage(phoneNumberId: string, sentSmsId: string, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.agentGetSentSmsMessage(phoneNumberId, sentSmsId, options);
        return result.toPromise();
    }

    /**
     * List sent SMS for an assigned phone number
     * @param phoneNumberId 
     * @param page 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param search 
     */
    public agentGetSentSmsMessages(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageSentSmsProjection> {
        const result = this.api.agentGetSentSmsMessages(phoneNumberId, page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * Get one SMS conversation
     * @param conversationId 
     */
    public agentGetSmsConversation(conversationId: string, options?: Configuration): Promise<AgentSmsConversationDetailDto> {
        const result = this.api.agentGetSmsConversation(conversationId, options);
        return result.toPromise();
    }

    /**
     * Get an agent-accessible TOTP device
     * @param id 
     */
    public agentGetTotpDevice(id: string, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.agentGetTotpDevice(id, options);
        return result.toPromise();
    }

    /**
     * Find an agent-accessible TOTP device by name, issuer, or username
     * @param name 
     * @param issuer 
     * @param username 
     */
    public agentGetTotpDeviceBy(name?: string, issuer?: string, username?: string, options?: Configuration): Promise<TotpDeviceOptionalDto> {
        const result = this.api.agentGetTotpDeviceBy(name, issuer, username, options);
        return result.toPromise();
    }

    /**
     * List agent-accessible TOTP devices
     * @param page 
     * @param size 
     * @param sort 
     * @param issuer 
     * @param username 
     */
    public agentGetTotpDevices(page?: number, size?: number, sort?: 'ASC' | 'DESC', issuer?: string, username?: string, options?: Configuration): Promise<PageTotpDeviceProjection> {
        const result = this.api.agentGetTotpDevices(page, size, sort, issuer, username, options);
        return result.toPromise();
    }

    /**
     * Returns the inbox IDs, addresses, names, and tags visible to this resource-scoped agent key. Agents should use this endpoint instead of guessing inbox IDs.
     * List inboxes accessible to an agent
     * @param size 
     * @param sort 
     */
    public agentListAccessibleInboxes(size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<AccessibleInboxList> {
        const result = this.api.agentListAccessibleInboxes(size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns an ordered at-least-once event batch. Persist nextCursor after processing and deduplicate by eventId. waitSeconds enables bounded long polling; production workers should not continuously call latest-email polling.
     * Read durable scoped automation events
     * @param cursor 
     * @param eventType 
     * @param size 
     * @param waitSeconds 
     */
    public agentListAutomationEvents(cursor?: string, eventType?: Set<'EMAIL_RECEIVED' | 'EMAIL_SENT' | 'SMS_RECEIVED' | 'SMS_SENT' | 'CONVERSATION_CLAIMED' | 'CONVERSATION_CLAIM_RELEASED' | 'CONVERSATION_NOTE_ADDED' | 'CONVERSATION_REVIEW_REQUESTED' | 'CONVERSATION_REVIEW_DECIDED' | 'CONVERSATION_RESOLVED' | 'CONVERSATION_REOPENED' | 'AGENT_REPLY_COMPLETED' | 'AGENT_SMS_SENT' | 'AGENT_SMS_REPLY_COMPLETED' | 'AGENT_DRAFT_CREATED' | 'AGENT_DRAFT_SENT' | 'AGENT_ACTION_FAILED'>, size?: number, waitSeconds?: number, options?: Configuration): Promise<AgentAutomationEventPageDto> {
        const result = this.api.agentListAutomationEvents(cursor, eventType, size, waitSeconds, options);
        return result.toPromise();
    }

    /**
     * Reads the bounded mail-thread projection and applies current connection scope on every request. Persist nextCursor only after processing the returned page. Exact totals are intentionally omitted.
     * List active conversations with an opaque keyset cursor
     * @param workflowState 
     * @param outcome 
     * @param reviewStatus 
     * @param inboxId 
     * @param unread 
     * @param hasAttachments 
     * @param since 
     * @param before 
     * @param search 
     * @param sort 
     * @param cursor 
     * @param size 
     */
    public agentListConversationsV2(workflowState?: 'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED', outcome?: 'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED', reviewStatus?: 'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED', inboxId?: string, unread?: boolean, hasAttachments?: boolean, since?: Date, before?: Date, search?: string, sort?: 'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC', cursor?: string, size?: number, options?: Configuration): Promise<AgentConversationCursorPageDto> {
        const result = this.api.agentListConversationsV2(workflowState, outcome, reviewStatus, inboxId, unread, hasAttachments, since, before, search, sort, cursor, size, options);
        return result.toPromise();
    }

    /**
     * Returns bounded attachment metadata only after verifying the email belongs to an inbox visible to the agent key.
     * List attachments on a scoped email for an agent
     * @param emailId 
     */
    public agentListEmailAttachments(emailId: string, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        const result = this.api.agentListEmailAttachments(emailId, options);
        return result.toPromise();
    }

    /**
     * Lists draft previews for one scoped inbox.
     * List scoped email drafts for an agent
     * @param inboxId ID of inbox to list drafts for
     * @param page Optional page index in draft pagination
     * @param size Optional page size in draft pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public agentListEmailDrafts(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailDraftProjection> {
        const result = this.api.agentListEmailDrafts(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns paginated email previews for one inbox after checking the agent key has AGENT_READ_EMAIL and is scoped to the inbox.
     * List scoped inbox emails for an agent
     * @param inboxId ID of inbox the agent may read
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by received after given date time
     * @param before Optional filter by received before given date time
     * @param syncConnectors Sync connectors before fetching emails
     */
    public agentListInboxEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, syncConnectors?: boolean, options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.agentListInboxEmails(inboxId, page, size, sort, since, before, syncConnectors, options);
        return result.toPromise();
    }

    /**
     * Lists conversation threads for one scoped inbox, including unread state, attachment presence, message count, and latest-message excerpts.
     * List scoped inbox threads for an agent
     * @param inboxId 
     * @param page 
     * @param size 
     * @param sort 
     * @param search 
     * @param since 
     * @param before 
     */
    public agentListInboxThreads(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', search?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageEmailThreadProjection> {
        const result = this.api.agentListInboxThreads(inboxId, page, size, sort, search, since, before, options);
        return result.toPromise();
    }

    /**
     * List active SMS conversations
     * @param workflowState 
     * @param outcome 
     * @param reviewStatus 
     * @param phoneNumberId 
     * @param unread 
     * @param hasMedia 
     * @param since 
     * @param before 
     * @param search 
     * @param sort 
     * @param cursor 
     * @param size 
     */
    public agentListSmsConversations(workflowState?: 'AVAILABLE' | 'CLAIMED' | 'WAITING_ON_AGENT' | 'WAITING_ON_CUSTOMER' | 'REVIEW' | 'RESOLVED', outcome?: 'READ' | 'DRAFTED' | 'REPLIED' | 'REVIEW_REQUESTED' | 'FAILED' | 'RESOLVED', reviewStatus?: 'NONE' | 'REQUESTED' | 'ASSIGNED' | 'APPROVED' | 'REJECTED' | 'RESOLVED', phoneNumberId?: string, unread?: boolean, hasMedia?: boolean, since?: Date, before?: Date, search?: string, sort?: 'LAST_MESSAGE_DESC' | 'OLDEST_UNHANDLED_ASC' | 'REVIEW_PRIORITY_DESC', cursor?: string, size?: number, options?: Configuration): Promise<AgentSmsConversationCursorPageDto> {
        const result = this.api.agentListSmsConversations(workflowState, outcome, reviewStatus, phoneNumberId, unread, hasMedia, since, before, search, sort, cursor, size, options);
        return result.toPromise();
    }

    /**
     * Checks that the selected conversation and latest inbound email are still current, then creates a correctly threaded reply draft. An optional internal note records context for human review without sending email.
     * Prepare a guarded reply draft
     * @param conversationId 
     * @param prepareAgentReplyOptions 
     */
    public agentPrepareWorkItemReply(conversationId: string, prepareAgentReplyOptions: PrepareAgentReplyOptions, options?: Configuration): Promise<AgentPreparedReplyDto> {
        const result = this.api.agentPrepareWorkItemReply(conversationId, prepareAgentReplyOptions, options);
        return result.toPromise();
    }

    /**
     * Release is idempotent; repeating it does not fail.
     * Release a conversation claim
     * @param conversationId 
     * @param claimId 
     */
    public agentReleaseConversationClaim(conversationId: string, claimId: string, options?: Configuration): Promise<void> {
        const result = this.api.agentReleaseConversationClaim(conversationId, claimId, options);
        return result.toPromise();
    }

    /**
     * Release an SMS conversation claim
     * @param conversationId 
     * @param claimId 
     */
    public agentReleaseSmsClaim(conversationId: string, claimId: string, options?: Configuration): Promise<void> {
        const result = this.api.agentReleaseSmsClaim(conversationId, claimId, options);
        return result.toPromise();
    }

    /**
     * Renew a conversation claim
     * @param conversationId 
     * @param claimId 
     * @param renewAgentConversationClaimOptions 
     */
    public agentRenewConversationClaim(conversationId: string, claimId: string, renewAgentConversationClaimOptions: RenewAgentConversationClaimOptions, options?: Configuration): Promise<AgentConversationClaimDto> {
        const result = this.api.agentRenewConversationClaim(conversationId, claimId, renewAgentConversationClaimOptions, options);
        return result.toPromise();
    }

    /**
     * Renew an SMS conversation claim
     * @param conversationId 
     * @param claimId 
     * @param renewAgentConversationClaimOptions 
     */
    public agentRenewSmsClaim(conversationId: string, claimId: string, renewAgentConversationClaimOptions: RenewAgentConversationClaimOptions, options?: Configuration): Promise<AgentConversationClaimDto> {
        const result = this.api.agentRenewSmsClaim(conversationId, claimId, renewAgentConversationClaimOptions, options);
        return result.toPromise();
    }

    /**
     * Sends a reply using the original conversation context after checking AGENT_REPLY_EMAIL and inbox scope.
     * Reply to a scoped email as an agent
     * @param emailId ID of email to reply to
     * @param replyToEmailOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestEmailId 
     */
    public agentReplyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestEmailId?: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.agentReplyToEmail(emailId, replyToEmailOptions, idempotencyKey, expectedConversationVersion, expectedLatestEmailId, options);
        return result.toPromise();
    }

    /**
     * Reply to received SMS
     * @param phoneNumberId 
     * @param smsId 
     * @param smsReplyOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestMessageId 
     */
    public agentReplyToSms(phoneNumberId: string, smsId: string, smsReplyOptions: SmsReplyOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestMessageId?: string, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.agentReplyToSms(phoneNumberId, smsId, smsReplyOptions, idempotencyKey, expectedConversationVersion, expectedLatestMessageId, options);
        return result.toPromise();
    }

    /**
     * Records one running worker instance and its deployed release for owner-side health monitoring. Send this during startup and periodically while the process can accept work; it does not claim or mutate a conversation.
     * Report a worker heartbeat
     * @param agentWorkerHeartbeatOptions 
     */
    public agentReportWorkerHeartbeat(agentWorkerHeartbeatOptions: AgentWorkerHeartbeatOptions, options?: Configuration): Promise<AgentWorkerHeartbeatDto> {
        const result = this.api.agentReportWorkerHeartbeat(agentWorkerHeartbeatOptions, options);
        return result.toPromise();
    }

    /**
     * Creates or returns the active handoff and moves the shared workflow state into REVIEW without classifying the request as an operational failure.
     * Request human review for a conversation
     * @param conversationId 
     * @param createAgentConversationHandoffOptions 
     */
    public agentRequestConversationHandoff(conversationId: string, createAgentConversationHandoffOptions: CreateAgentConversationHandoffOptions, options?: Configuration): Promise<AgentConversationHandoffDto> {
        const result = this.api.agentRequestConversationHandoff(conversationId, createAgentConversationHandoffOptions, options);
        return result.toPromise();
    }

    /**
     * Request human review for an SMS conversation
     * @param conversationId 
     * @param createAgentSmsConversationHandoffOptions 
     */
    public agentRequestSmsHandoff(conversationId: string, createAgentSmsConversationHandoffOptions: CreateAgentSmsConversationHandoffOptions, options?: Configuration): Promise<AgentConversationHandoffDto> {
        const result = this.api.agentRequestSmsHandoff(conversationId, createAgentSmsConversationHandoffOptions, options);
        return result.toPromise();
    }

    /**
     * Searches one scoped inbox using explicit field matches and attachment conditions. Use this for deterministic automation recovery instead of repeatedly fetching the latest message.
     * Search scoped inbox emails for an agent
     * @param inboxId 
     * @param matchOptions 
     * @param size 
     * @param sort 
     * @param since 
     * @param before 
     * @param unreadOnly 
     */
    public agentSearchInboxEmails(inboxId: string, matchOptions: MatchOptions, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.agentSearchInboxEmails(inboxId, matchOptions, size, sort, since, before, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Sends a saved draft through the existing inbox send pipeline and deletes it only after send success.
     * Send a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     * @param idempotencyKey 
     */
    public agentSendEmailDraft(inboxId: string, draftId: string, idempotencyKey?: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.agentSendEmailDraft(inboxId, draftId, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * Send SMS from an assigned phone number
     * @param phoneNumberId 
     * @param smsSendOptions 
     * @param idempotencyKey 
     * @param expectedConversationVersion 
     * @param expectedLatestMessageId 
     */
    public agentSendSms(phoneNumberId: string, smsSendOptions: SmsSendOptions, idempotencyKey?: string, expectedConversationVersion?: number, expectedLatestMessageId?: string, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.agentSendSms(phoneNumberId, smsSendOptions, idempotencyKey, expectedConversationVersion, expectedLatestMessageId, options);
        return result.toPromise();
    }

    /**
     * Replaces the SendEmailOptions stored for a draft. The draft remains attached to its original inbox.
     * Update a scoped email draft for an agent
     * @param inboxId ID of inbox the draft belongs to
     * @param draftId ID of draft
     * @param sendEmailOptions 
     */
    public agentUpdateEmailDraft(inboxId: string, draftId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.agentUpdateEmailDraft(inboxId, draftId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Update an inbox visible to an inbox-manager connection
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public agentUpdateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<InboxDto> {
        const result = this.api.agentUpdateInbox(inboxId, updateInboxOptions, options);
        return result.toPromise();
    }

    /**
     * Update an agent-managed TOTP device
     * @param id 
     * @param updateTotpDeviceOptions 
     */
    public agentUpdateTotpDevice(id: string, updateTotpDeviceOptions: UpdateTotpDeviceOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.agentUpdateTotpDevice(id, updateTotpDeviceOptions, options);
        return result.toPromise();
    }


}



import { ObservableAliasControllerApi } from './ObservableAPI.ts';

import { AliasControllerApiRequestFactory, AliasControllerApiResponseProcessor} from "../apis/AliasControllerApi.ts";
export class PromiseAliasControllerApi {
    private api: ObservableAliasControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AliasControllerApiRequestFactory,
        responseProcessor?: AliasControllerApiResponseProcessor
    ) {
        this.api = new ObservableAliasControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Email aliases use a MailSlurp randomly generated email address (or a custom domain inbox that you provide) to mask or proxy a real email address. Emails sent to the alias address will be forwarded to the hidden email address it was created for. If you want to send a reply use the threadId attached
     * Create an email alias. Must be verified by clicking link inside verification email that will be sent to the address. Once verified the alias will be active.
     * @param createAliasOptions 
     */
    public createAlias(createAliasOptions: CreateAliasOptions, options?: Configuration): Promise<AliasDto> {
        const result = this.api.createAlias(createAliasOptions, options);
        return result.toPromise();
    }

    /**
     * Delete an email alias
     * @param aliasId 
     */
    public deleteAlias(aliasId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get an email alias by ID
     * Get an email alias
     * @param aliasId 
     */
    public getAlias(aliasId: string, options?: Configuration): Promise<AliasDto> {
        const result = this.api.getAlias(aliasId, options);
        return result.toPromise();
    }

    /**
     * Get paginated emails for an alias by ID
     * Get emails for an alias
     * @param aliasId 
     * @param page Optional page index alias email list pagination
     * @param size Optional page size alias email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasEmails(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getAliasEmails(aliasId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for an email alias in paginated form
     * Get threads created for an alias
     * @param aliasId 
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getAliasThreads(aliasId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageAliasThreadProjection> {
        const result = this.api.getAliasThreads(aliasId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all email aliases in paginated form
     * Get all email aliases you have created
     * @param search Optional search term
     * @param page Optional page index in alias list pagination
     * @param size Optional page size in alias list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAliases(search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageAlias> {
        const result = this.api.getAliases(search, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Return a thread associated with an alias
     * Get a thread
     * @param threadId 
     */
    public getThread(threadId: string, options?: Configuration): Promise<AliasThreadProjection> {
        const result = this.api.getThread(threadId, options);
        return result.toPromise();
    }

    /**
     * Returns threads created for all aliases in paginated form
     * Get all threads
     * @param page Optional page index in thread list pagination
     * @param size Optional page size in thread list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getThreadsPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageAliasThreadProjection> {
        const result = this.api.getThreadsPaginated(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Send the reply to the email sender or reply-to and include same subject cc bcc etc. Reply to an email and the contents will be sent with the existing subject to the emails `to`, `cc`, and `bcc`.
     * Reply to an email
     * @param aliasId ID of the alias that email belongs to
     * @param emailId ID of the email that should be replied to
     * @param replyToAliasEmailOptions 
     */
    public replyToAliasEmail(aliasId: string, emailId: string, replyToAliasEmailOptions: ReplyToAliasEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.replyToAliasEmail(aliasId, emailId, replyToAliasEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email from an alias. Replies to the email will be forwarded to the alias masked email address
     * Send an email from an alias inbox
     * @param aliasId 
     * @param sendEmailOptions 
     */
    public sendAliasEmail(aliasId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendAliasEmail(aliasId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Update an email alias
     * @param aliasId 
     * @param updateAliasOptions 
     */
    public updateAlias(aliasId: string, updateAliasOptions: UpdateAliasOptions, options?: Configuration): Promise<AliasDto> {
        const result = this.api.updateAlias(aliasId, updateAliasOptions, options);
        return result.toPromise();
    }


}



import { ObservableApiAuditLogControllerApi } from './ObservableAPI.ts';

import { ApiAuditLogControllerApiRequestFactory, ApiAuditLogControllerApiResponseProcessor} from "../apis/ApiAuditLogControllerApi.ts";
export class PromiseApiAuditLogControllerApi {
    private api: ObservableApiAuditLogControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiAuditLogControllerApiRequestFactory,
        responseProcessor?: ApiAuditLogControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiAuditLogControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param eventId 
     * @param since 
     * @param before 
     */
    public getAuditLogByEventId(eventId: string, since?: Date, before?: Date, options?: Configuration): Promise<AuditLogEventDto> {
        const result = this.api.getAuditLogByEventId(eventId, since, before, options);
        return result.toPromise();
    }

    /**
     * @param since 
     * @param before 
     * @param action 
     * @param userId 
     * @param actorUserId 
     * @param targetUserId 
     * @param resourceType 
     * @param resourceId 
     * @param outcome 
     * @param requestId 
     * @param ipAddress 
     * @param pageSize 
     * @param cursor 
     */
    public getAuditLogs(since?: Date, before?: Date, action?: string, userId?: string, actorUserId?: string, targetUserId?: string, resourceType?: string, resourceId?: string, outcome?: string, requestId?: string, ipAddress?: string, pageSize?: number, cursor?: string, options?: Configuration): Promise<AuditLogPageDto> {
        const result = this.api.getAuditLogs(since, before, action, userId, actorUserId, targetUserId, resourceType, resourceId, outcome, requestId, ipAddress, pageSize, cursor, options);
        return result.toPromise();
    }

    /**
     * @param auditLogSearchOptions 
     */
    public searchAuditLogs(auditLogSearchOptions: AuditLogSearchOptions, options?: Configuration): Promise<AuditLogPageDto> {
        const result = this.api.searchAuditLogs(auditLogSearchOptions, options);
        return result.toPromise();
    }


}



import { ObservableApiAutomatedInboxPlacementControllerApi } from './ObservableAPI.ts';

import { ApiAutomatedInboxPlacementControllerApiRequestFactory, ApiAutomatedInboxPlacementControllerApiResponseProcessor} from "../apis/ApiAutomatedInboxPlacementControllerApi.ts";
export class PromiseApiAutomatedInboxPlacementControllerApi {
    private api: ObservableApiAutomatedInboxPlacementControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiAutomatedInboxPlacementControllerApiRequestFactory,
        responseProcessor?: ApiAutomatedInboxPlacementControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiAutomatedInboxPlacementControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an encrypted sender connection
     * @param createAutomatedInboxPlacementConnectionOptions 
     */
    public createAutomatedInboxPlacementConnection(createAutomatedInboxPlacementConnectionOptions: CreateAutomatedInboxPlacementConnectionOptions, options?: Configuration): Promise<AutomatedInboxPlacementConnectionDto> {
        const result = this.api.createAutomatedInboxPlacementConnection(createAutomatedInboxPlacementConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Create an automated inbox placement schedule
     * @param createAutomatedInboxPlacementScheduleOptions 
     */
    public createAutomatedInboxPlacementSchedule(createAutomatedInboxPlacementScheduleOptions: CreateAutomatedInboxPlacementScheduleOptions, options?: Configuration): Promise<AutomatedInboxPlacementScheduleDto> {
        const result = this.api.createAutomatedInboxPlacementSchedule(createAutomatedInboxPlacementScheduleOptions, options);
        return result.toPromise();
    }

    /**
     * Disconnect a sender connection
     * @param connectionId 
     */
    public deleteAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomatedInboxPlacementConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * Delete an automated inbox placement schedule
     * @param scheduleId 
     */
    public deleteAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAutomatedInboxPlacementSchedule(scheduleId, options);
        return result.toPromise();
    }

    /**
     * Get a sender connection
     * @param connectionId 
     */
    public getAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<AutomatedInboxPlacementConnectionDto> {
        const result = this.api.getAutomatedInboxPlacementConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * List sender connections
     */
    public getAutomatedInboxPlacementConnections(options?: Configuration): Promise<Array<AutomatedInboxPlacementConnectionDto>> {
        const result = this.api.getAutomatedInboxPlacementConnections(options);
        return result.toPromise();
    }

    /**
     * List non-secret execution events
     * @param scheduleId 
     * @param executionId 
     */
    public getAutomatedInboxPlacementExecutionEvents(scheduleId: string, executionId: string, options?: Configuration): Promise<Array<AutomatedInboxPlacementEventDto>> {
        const result = this.api.getAutomatedInboxPlacementExecutionEvents(scheduleId, executionId, options);
        return result.toPromise();
    }

    /**
     * List schedule executions
     * @param scheduleId 
     * @param limit 
     */
    public getAutomatedInboxPlacementExecutions(scheduleId: string, limit?: number, options?: Configuration): Promise<Array<AutomatedInboxPlacementExecutionDto>> {
        const result = this.api.getAutomatedInboxPlacementExecutions(scheduleId, limit, options);
        return result.toPromise();
    }

    /**
     * List automated inbox placement sender providers
     */
    public getAutomatedInboxPlacementProviders(options?: Configuration): Promise<Array<AutomatedInboxPlacementProviderDto>> {
        const result = this.api.getAutomatedInboxPlacementProviders(options);
        return result.toPromise();
    }

    /**
     * Get an automated inbox placement schedule
     * @param scheduleId 
     */
    public getAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<AutomatedInboxPlacementScheduleDto> {
        const result = this.api.getAutomatedInboxPlacementSchedule(scheduleId, options);
        return result.toPromise();
    }

    /**
     * Returns chart-ready metrics for billed placement runs created by this schedule only.
     * Get automation inbox placement analytics over time
     * @param scheduleId 
     * @param since 
     * @param before 
     * @param bucket 
     * @param runLimit 
     */
    public getAutomatedInboxPlacementScheduleAnalyticsSeries(scheduleId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', runLimit?: number, options?: Configuration): Promise<InboxPlacementAnalyticsSeriesDto> {
        const result = this.api.getAutomatedInboxPlacementScheduleAnalyticsSeries(scheduleId, since, before, bucket, runLimit, options);
        return result.toPromise();
    }

    /**
     * List automated inbox placement schedules
     */
    public getAutomatedInboxPlacementSchedules(options?: Configuration): Promise<Array<AutomatedInboxPlacementScheduleDto>> {
        const result = this.api.getAutomatedInboxPlacementSchedules(options);
        return result.toPromise();
    }

    /**
     * Verifies the replacement SMTP settings before atomically replacing the encrypted credential envelope. A failed verification leaves the existing connection unchanged.
     * Rotate sender connection credentials
     * @param connectionId 
     * @param rotateAutomatedInboxPlacementConnectionCredentialsOptions 
     */
    public rotateAutomatedInboxPlacementConnectionCredentials(connectionId: string, rotateAutomatedInboxPlacementConnectionCredentialsOptions: RotateAutomatedInboxPlacementConnectionCredentialsOptions, options?: Configuration): Promise<AutomatedInboxPlacementConnectionDto> {
        const result = this.api.rotateAutomatedInboxPlacementConnectionCredentials(connectionId, rotateAutomatedInboxPlacementConnectionCredentialsOptions, options);
        return result.toPromise();
    }

    /**
     * Run an automated inbox placement schedule now
     * @param scheduleId 
     */
    public runAutomatedInboxPlacementSchedule(scheduleId: string, options?: Configuration): Promise<AutomatedInboxPlacementExecutionDto> {
        const result = this.api.runAutomatedInboxPlacementSchedule(scheduleId, options);
        return result.toPromise();
    }

    /**
     * Updates non-secret connection metadata. Use the credentials endpoint to replace SMTP credentials or transport settings.
     * Update a sender connection
     * @param connectionId 
     * @param updateAutomatedInboxPlacementConnectionOptions 
     */
    public updateAutomatedInboxPlacementConnection(connectionId: string, updateAutomatedInboxPlacementConnectionOptions: UpdateAutomatedInboxPlacementConnectionOptions, options?: Configuration): Promise<AutomatedInboxPlacementConnectionDto> {
        const result = this.api.updateAutomatedInboxPlacementConnection(connectionId, updateAutomatedInboxPlacementConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Update an automated inbox placement schedule
     * @param scheduleId 
     * @param updateAutomatedInboxPlacementScheduleOptions 
     */
    public updateAutomatedInboxPlacementSchedule(scheduleId: string, updateAutomatedInboxPlacementScheduleOptions: UpdateAutomatedInboxPlacementScheduleOptions, options?: Configuration): Promise<AutomatedInboxPlacementScheduleDto> {
        const result = this.api.updateAutomatedInboxPlacementSchedule(scheduleId, updateAutomatedInboxPlacementScheduleOptions, options);
        return result.toPromise();
    }

    /**
     * Verify a sender connection
     * @param connectionId 
     */
    public verifyAutomatedInboxPlacementConnection(connectionId: string, options?: Configuration): Promise<AutomatedInboxPlacementConnectionDto> {
        const result = this.api.verifyAutomatedInboxPlacementConnection(connectionId, options);
        return result.toPromise();
    }


}



import { ObservableApiEmailWarmupControllerApi } from './ObservableAPI.ts';

import { ApiEmailWarmupControllerApiRequestFactory, ApiEmailWarmupControllerApiResponseProcessor} from "../apis/ApiEmailWarmupControllerApi.ts";
export class PromiseApiEmailWarmupControllerApi {
    private api: ObservableApiEmailWarmupControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiEmailWarmupControllerApiRequestFactory,
        responseProcessor?: ApiEmailWarmupControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiEmailWarmupControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an email warmup program
     * @param createEmailWarmupProgramOptions 
     */
    public createEmailWarmupProgram(createEmailWarmupProgramOptions: CreateEmailWarmupProgramOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.createEmailWarmupProgram(createEmailWarmupProgramOptions, options);
        return result.toPromise();
    }

    /**
     * Delete an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public deleteEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Cancel purchased email warmup sender seats
     */
    public deleteEmailWarmupSenderSeats(options?: Configuration): Promise<EmailWarmupUsageSummaryDto> {
        const result = this.api.deleteEmailWarmupSenderSeats(options);
        return result.toPromise();
    }

    /**
     * Get operational email warmup activity and program progress
     * @param days 
     */
    public getEmailWarmupOverview(days?: number, options?: Configuration): Promise<EmailWarmupOverviewDto> {
        const result = this.api.getEmailWarmupOverview(days, options);
        return result.toPromise();
    }

    /**
     * List Gmail and Outlook placement checks for an email warmup program
     * @param programId 
     */
    public getEmailWarmupPlacementChecks(programId: string, options?: Configuration): Promise<Array<EmailWarmupPlacementCheckDto>> {
        const result = this.api.getEmailWarmupPlacementChecks(programId, options);
        return result.toPromise();
    }

    /**
     * Get an email warmup program
     * @param programId 
     */
    public getEmailWarmupProgram(programId: string, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.getEmailWarmupProgram(programId, options);
        return result.toPromise();
    }

    /**
     * Get email warmup program progress and daily activity
     * @param programId 
     * @param days 
     */
    public getEmailWarmupProgramAnalytics(programId: string, days?: number, options?: Configuration): Promise<EmailWarmupProgramAnalyticsDto> {
        const result = this.api.getEmailWarmupProgramAnalytics(programId, days, options);
        return result.toPromise();
    }

    /**
     * List email warmup programs
     * @param page 
     * @param size 
     */
    public getEmailWarmupPrograms(page?: number, size?: number, options?: Configuration): Promise<EmailWarmupProgramPageDto> {
        const result = this.api.getEmailWarmupPrograms(page, size, options);
        return result.toPromise();
    }

    /**
     * Get warmup readiness, adaptive pacing, and sender-health signals
     * @param programId 
     */
    public getEmailWarmupReadiness(programId: string, options?: Configuration): Promise<EmailWarmupReadinessDto> {
        const result = this.api.getEmailWarmupReadiness(programId, options);
        return result.toPromise();
    }

    /**
     * List scheduled email warmup slots
     * @param programId 
     * @param page 
     * @param size 
     */
    public getEmailWarmupSlots(programId: string, page?: number, size?: number, options?: Configuration): Promise<EmailWarmupSendSlotPageDto> {
        const result = this.api.getEmailWarmupSlots(programId, page, size, options);
        return result.toPromise();
    }

    /**
     * Get email warmup sender capacity, included credits, and billable usage
     */
    public getEmailWarmupUsage(options?: Configuration): Promise<EmailWarmupUsageSummaryDto> {
        const result = this.api.getEmailWarmupUsage(options);
        return result.toPromise();
    }

    /**
     * Pause an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public pauseEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.pauseEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Resume an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public resumeEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.resumeEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Retry a system-paused email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public retryEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.retryEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Start an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public startEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.startEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Stop an email warmup program
     * @param programId 
     * @param emailWarmupProgramCommandOptions 
     */
    public stopEmailWarmupProgram(programId: string, emailWarmupProgramCommandOptions: EmailWarmupProgramCommandOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.stopEmailWarmupProgram(programId, emailWarmupProgramCommandOptions, options);
        return result.toPromise();
    }

    /**
     * Update a draft email warmup program
     * @param programId 
     * @param updateEmailWarmupProgramOptions 
     */
    public updateEmailWarmupProgram(programId: string, updateEmailWarmupProgramOptions: UpdateEmailWarmupProgramOptions, options?: Configuration): Promise<EmailWarmupProgramDto> {
        const result = this.api.updateEmailWarmupProgram(programId, updateEmailWarmupProgramOptions, options);
        return result.toPromise();
    }

    /**
     * Update purchased email warmup sender seats
     * @param updateEmailWarmupSenderSeatsOptions 
     */
    public updateEmailWarmupSenderSeats(updateEmailWarmupSenderSeatsOptions: UpdateEmailWarmupSenderSeatsOptions, options?: Configuration): Promise<EmailWarmupUsageSummaryDto> {
        const result = this.api.updateEmailWarmupSenderSeats(updateEmailWarmupSenderSeatsOptions, options);
        return result.toPromise();
    }


}



import { ObservableApiFreeInboxControllerApi } from './ObservableAPI.ts';

import { ApiFreeInboxControllerApiRequestFactory, ApiFreeInboxControllerApiResponseProcessor} from "../apis/ApiFreeInboxControllerApi.ts";
export class PromiseApiFreeInboxControllerApi {
    private api: ObservableApiFreeInboxControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiFreeInboxControllerApiRequestFactory,
        responseProcessor?: ApiFreeInboxControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiFreeInboxControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param id 
     * @param xFreeInboxToken 
     */
    public _delete(id: string, xFreeInboxToken: string, options?: Configuration): Promise<void> {
        const result = this.api._delete(id, xFreeInboxToken, options);
        return result.toPromise();
    }

    /**
     * @param createFreeInboxOptions 
     */
    public create(createFreeInboxOptions: CreateFreeInboxOptions, options?: Configuration): Promise<CreatedFreeInboxDto> {
        const result = this.api.create(createFreeInboxOptions, options);
        return result.toPromise();
    }

    /**
     * @param id 
     * @param xFreeInboxToken 
     */
    public read(id: string, xFreeInboxToken: string, options?: Configuration): Promise<FreeInboxDto> {
        const result = this.api.read(id, xFreeInboxToken, options);
        return result.toPromise();
    }


}



import { ObservableApiInboxPlacementTestControllerApi } from './ObservableAPI.ts';

import { ApiInboxPlacementTestControllerApiRequestFactory, ApiInboxPlacementTestControllerApiResponseProcessor} from "../apis/ApiInboxPlacementTestControllerApi.ts";
export class PromiseApiInboxPlacementTestControllerApi {
    private api: ObservableApiInboxPlacementTestControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiInboxPlacementTestControllerApiRequestFactory,
        responseProcessor?: ApiInboxPlacementTestControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiInboxPlacementTestControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Reconcile any messages that arrived after seed reservation, commit allowance, and move a prepared dashboard test into its active lifecycle. This operation is idempotent.
     * Confirm an inbox placement test email has been sent
     * @param id 
     */
    public confirmInboxPlacementTestSent(id: string, options?: Configuration): Promise<InboxPlacementTestRunDto> {
        const result = this.api.confirmInboxPlacementTestSent(id, options);
        return result.toPromise();
    }

    /**
     * Create a new direct-send inbox placement test
     * @param createInboxPlacementTestOptions 
     */
    public createInboxPlacementTest(createInboxPlacementTestOptions: CreateInboxPlacementTestOptions, options?: Configuration): Promise<InboxPlacementTestRunDto> {
        const result = this.api.createInboxPlacementTest(createInboxPlacementTestOptions, options);
        return result.toPromise();
    }

    /**
     * Export the current run's seed addresses with headers recognized by the selected email platform. Downloading a prepared seed list does not confirm the send or consume allowance.
     * Download inbox placement seed addresses as an email-platform CSV
     * @param id 
     * @param provider 
     */
    public exportInboxPlacementSeedList(id: string, provider?: 'GENERIC' | 'MAILCHIMP' | 'KLAVIYO' | 'SALESFORCE' | 'HUBSPOT' | 'BRAZE' | 'BREVO' | 'MAILERLITE' | 'MAILJET' | 'OMNISEND' | 'GETRESPONSE' | 'CONSTANT_CONTACT' | 'KIT', options?: Configuration): Promise<void> {
        const result = this.api.exportInboxPlacementSeedList(id, provider, options);
        return result.toPromise();
    }

    /**
     * Export one row per placement target, including run-level delivery totals, 0-10 placement scores, and target placement outcome fields.
     * Export inbox placement test results as CSV
     * @param id 
     */
    public exportInboxPlacementTestResults(id: string, options?: Configuration): Promise<void> {
        const result = this.api.exportInboxPlacementTestResults(id, options);
        return result.toPromise();
    }

    /**
     * Return aggregated folder, provider, sender-domain, and from-email breakdowns for inbox placement runs in a time range.
     * Get inbox placement analytics breakdowns
     * @param since 
     * @param before 
     * @param senderDomain 
     * @param fromEmail 
     * @param limit 
     */
    public getInboxPlacementAnalyticsBreakdown(since?: Date, before?: Date, senderDomain?: string, fromEmail?: string, limit?: number, options?: Configuration): Promise<InboxPlacementAnalyticsBreakdownDto> {
        const result = this.api.getInboxPlacementAnalyticsBreakdown(since, before, senderDomain, fromEmail, limit, options);
        return result.toPromise();
    }

    /**
     * Return chart-ready inbox placement metrics over time, with optional sender/domain filters and grouped comparisons for sender domains or from-email addresses.
     * Get inbox placement analytics time series
     * @param since 
     * @param before 
     * @param bucket 
     * @param groupBy 
     * @param senderDomain 
     * @param fromEmail 
     * @param runLimit 
     * @param groupLimit 
     */
    public getInboxPlacementAnalyticsSeries(since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', groupBy?: 'NONE' | 'SENDER_DOMAIN' | 'FROM_EMAIL', senderDomain?: string, fromEmail?: string, runLimit?: number, groupLimit?: number, options?: Configuration): Promise<InboxPlacementAnalyticsSeriesDto> {
        const result = this.api.getInboxPlacementAnalyticsSeries(since, before, bucket, groupBy, senderDomain, fromEmail, runLimit, groupLimit, options);
        return result.toPromise();
    }

    /**
     * Get a public inbox placement share
     * @param shareToken 
     */
    public getInboxPlacementPublicShare(shareToken: string, options?: Configuration): Promise<InboxPlacementPublicShareDto> {
        const result = this.api.getInboxPlacementPublicShare(shareToken, options);
        return result.toPromise();
    }

    /**
     * Get public inbox placement share analysis
     * @param shareToken 
     */
    public getInboxPlacementPublicShareAnalysis(shareToken: string, options?: Configuration): Promise<InboxPlacementAnalysisBundleDto> {
        const result = this.api.getInboxPlacementPublicShareAnalysis(shareToken, options);
        return result.toPromise();
    }

    /**
     * Get inbox placement test run
     * @param id 
     */
    public getInboxPlacementTest(id: string, options?: Configuration): Promise<InboxPlacementTestRunDto> {
        const result = this.api.getInboxPlacementTest(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox placement run analysis
     * @param id 
     */
    public getInboxPlacementTestAnalysis(id: string, options?: Configuration): Promise<InboxPlacementAnalysisBundleDto> {
        const result = this.api.getInboxPlacementTestAnalysis(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox placement test results
     * @param id 
     */
    public getInboxPlacementTestResults(id: string, options?: Configuration): Promise<InboxPlacementTestResultsDto> {
        const result = this.api.getInboxPlacementTestResults(id, options);
        return result.toPromise();
    }

    /**
     * List inbox placement test runs
     * @param limit 
     */
    public getInboxPlacementTests(limit?: number, options?: Configuration): Promise<Array<InboxPlacementTestRunDto>> {
        const result = this.api.getInboxPlacementTests(limit, options);
        return result.toPromise();
    }

    /**
     * Reserve seed addresses for the dashboard create flow. The run remains staged and allowance is not committed until send confirmation. Reuses a recent active preparation when possible.
     * Prepare a direct-send inbox placement test without consuming allowance
     * @param createInboxPlacementTestOptions 
     */
    public prepareInboxPlacementTest(createInboxPlacementTestOptions: CreateInboxPlacementTestOptions, options?: Configuration): Promise<InboxPlacementTestRunDto> {
        const result = this.api.prepareInboxPlacementTest(createInboxPlacementTestOptions, options);
        return result.toPromise();
    }


}



import { ObservableApiMcpControllerApi } from './ObservableAPI.ts';

import { ApiMcpControllerApiRequestFactory, ApiMcpControllerApiResponseProcessor} from "../apis/ApiMcpControllerApi.ts";
export class PromiseApiMcpControllerApi {
    private api: ObservableApiMcpControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiMcpControllerApiRequestFactory,
        responseProcessor?: ApiMcpControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiMcpControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param body 
     */
    public post(body: string, options?: Configuration): Promise<string> {
        const result = this.api.post(body, options);
        return result.toPromise();
    }


}



import { ObservableApiMcpOAuthControllerApi } from './ObservableAPI.ts';

import { ApiMcpOAuthControllerApiRequestFactory, ApiMcpOAuthControllerApiResponseProcessor} from "../apis/ApiMcpOAuthControllerApi.ts";
export class PromiseApiMcpOAuthControllerApi {
    private api: ObservableApiMcpOAuthControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiMcpOAuthControllerApiRequestFactory,
        responseProcessor?: ApiMcpOAuthControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiMcpOAuthControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     */
    public authorizationServerMetadata(options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.authorizationServerMetadata(options);
        return result.toPromise();
    }

    /**
     */
    public authorizationServerMetadata1(options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.authorizationServerMetadata1(options);
        return result.toPromise();
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
    public authorize(clientId: string, redirectUri: string, responseType: string, codeChallenge: string, codeChallengeMethod: string, resource: string, scope?: string, state?: string, options?: Configuration): Promise<any> {
        const result = this.api.authorize(clientId, redirectUri, responseType, codeChallenge, codeChallengeMethod, resource, scope, state, options);
        return result.toPromise();
    }

    /**
     */
    public protectedResourceMetadata(options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.protectedResourceMetadata(options);
        return result.toPromise();
    }

    /**
     */
    public protectedResourceMetadata1(options?: Configuration): Promise<{ [key: string]: any; }> {
        const result = this.api.protectedResourceMetadata1(options);
        return result.toPromise();
    }

    /**
     * @param mcpOAuthClientRegistrationOptions 
     */
    public register(mcpOAuthClientRegistrationOptions: McpOAuthClientRegistrationOptions, options?: Configuration): Promise<any> {
        const result = this.api.register(mcpOAuthClientRegistrationOptions, options);
        return result.toPromise();
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
    public token(grantType: string, clientId: string, resource: string, code?: string, redirectUri?: string, codeVerifier?: string, refreshToken?: string, options?: Configuration): Promise<any> {
        const result = this.api.token(grantType, clientId, resource, code, redirectUri, codeVerifier, refreshToken, options);
        return result.toPromise();
    }


}



import { ObservableApiSendingConnectionControllerApi } from './ObservableAPI.ts';

import { ApiSendingConnectionControllerApiRequestFactory, ApiSendingConnectionControllerApiResponseProcessor} from "../apis/ApiSendingConnectionControllerApi.ts";
export class PromiseApiSendingConnectionControllerApi {
    private api: ObservableApiSendingConnectionControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ApiSendingConnectionControllerApiRequestFactory,
        responseProcessor?: ApiSendingConnectionControllerApiResponseProcessor
    ) {
        this.api = new ObservableApiSendingConnectionControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a sending connection
     * @param createSendingConnectionOptions 
     */
    public createSendingConnection(createSendingConnectionOptions: CreateSendingConnectionOptions, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.createSendingConnection(createSendingConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Cancel purchased Delivery Sender seats
     */
    public deleteDeliverySenderSeats(options?: Configuration): Promise<DeliverySenderCapacityDto> {
        const result = this.api.deleteDeliverySenderSeats(options);
        return result.toPromise();
    }

    /**
     * Disconnect a sending connection
     * @param connectionId 
     */
    public deleteSendingConnection(connectionId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSendingConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * Releases this connection's shared sender allocation while retaining its verified credentials.
     * Disable Delivery Sender capacity
     * @param connectionId 
     */
    public disableSendingConnection(connectionId: string, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.disableSendingConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * Allocates shared sender capacity. Included capacity is used first and supported additional capacity is added to the existing subscription when possible.
     * Enable a verified Delivery Sender
     * @param connectionId 
     */
    public enableSendingConnection(connectionId: string, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.enableSendingConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * Get shared Delivery Sender capacity
     */
    public getDeliverySenderCapacity(options?: Configuration): Promise<DeliverySenderCapacityDto> {
        const result = this.api.getDeliverySenderCapacity(options);
        return result.toPromise();
    }

    /**
     * Get a sending connection
     * @param connectionId 
     */
    public getSendingConnection(connectionId: string, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.getSendingConnection(connectionId, options);
        return result.toPromise();
    }

    /**
     * List sending connection providers
     */
    public getSendingConnectionProviders(options?: Configuration): Promise<Array<SendingConnectionProviderDto>> {
        const result = this.api.getSendingConnectionProviders(options);
        return result.toPromise();
    }

    /**
     * List sending connections
     */
    public getSendingConnections(options?: Configuration): Promise<Array<SendingConnectionDto>> {
        const result = this.api.getSendingConnections(options);
        return result.toPromise();
    }

    /**
     * Uses only the selected customer-owned connection. A successful receipt proves provider acceptance and delivery to MailSlurp, not Gmail or Outlook placement.
     * Send an unbilled delivery test to a temporary MailSlurp inbox
     * @param connectionId 
     */
    public probeSendingConnectionDelivery(connectionId: string, options?: Configuration): Promise<SendingConnectionDeliveryProbeDto> {
        const result = this.api.probeSendingConnectionDelivery(connectionId, options);
        return result.toPromise();
    }

    /**
     * Verifies supported replacement credentials before atomically replacing the encrypted credential envelope.
     * Rotate sending connection credentials
     * @param connectionId 
     * @param rotateSendingConnectionCredentialsOptions 
     */
    public rotateSendingConnectionCredentials(connectionId: string, rotateSendingConnectionCredentialsOptions: RotateSendingConnectionCredentialsOptions, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.rotateSendingConnectionCredentials(connectionId, rotateSendingConnectionCredentialsOptions, options);
        return result.toPromise();
    }

    /**
     * Update purchased Delivery Sender seats
     * @param updateDeliverySenderSeatsOptions 
     */
    public updateDeliverySenderSeats(updateDeliverySenderSeatsOptions: UpdateDeliverySenderSeatsOptions, options?: Configuration): Promise<DeliverySenderCapacityDto> {
        const result = this.api.updateDeliverySenderSeats(updateDeliverySenderSeatsOptions, options);
        return result.toPromise();
    }

    /**
     * Updates non-secret connection metadata. Use the credentials endpoint to replace supported SMTP or API-key credentials.
     * Update a sending connection
     * @param connectionId 
     * @param updateSendingConnectionOptions 
     */
    public updateSendingConnection(connectionId: string, updateSendingConnectionOptions: UpdateSendingConnectionOptions, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.updateSendingConnection(connectionId, updateSendingConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Verifies the customer credential without enabling billable sender capacity. A consuming product enables the shared Delivery Sender seat when sending starts.
     * Verify a sending connection
     * @param connectionId 
     */
    public verifySendingConnection(connectionId: string, options?: Configuration): Promise<SendingConnectionDto> {
        const result = this.api.verifySendingConnection(connectionId, options);
        return result.toPromise();
    }


}



import { ObservableAttachmentControllerApi } from './ObservableAPI.ts';

import { AttachmentControllerApiRequestFactory, AttachmentControllerApiResponseProcessor} from "../apis/AttachmentControllerApi.ts";
export class PromiseAttachmentControllerApi {
    private api: ObservableAttachmentControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentControllerApiRequestFactory,
        responseProcessor?: AttachmentControllerApiResponseProcessor
    ) {
        this.api = new ObservableAttachmentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all attachments
     * Delete all attachments
     */
    public deleteAllAttachments(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllAttachments(options);
        return result.toPromise();
    }

    /**
     * Delete an attachment
     * Delete an attachment
     * @param attachmentId ID of attachment
     */
    public deleteAttachment(attachmentId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAttachment(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a base 64 encoded string. The response type is application/json. This method is similar to the `downloadAttachment` method but allows some clients to get around issues with binary responses.
     * Get email attachment as base64 encoded string as alternative to binary responses. To read the content decode the Base64 encoded contents.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBase64Encoded(attachmentId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentAsBase64Encoded(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the specified attachment for a given email as a stream / array of bytes. You can find attachment ids in email responses endpoint responses. The response type is application/octet-stream.
     * Download attachments. Get email attachment bytes. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints.
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentAsBytes(attachmentId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadAttachmentAsBytes(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Extract text content from an attachment using the requested method. `NATIVE` decoding supports text-like files, common Word and spreadsheet documents, and PDFs with embedded text.
     * Extract text from an attachment
     * @param attachmentId ID of attachment
     * @param extractAttachmentTextOptions 
     */
    public extractAttachmentText(attachmentId: string, extractAttachmentTextOptions?: ExtractAttachmentTextOptions, options?: Configuration): Promise<ExtractAttachmentTextResult> {
        const result = this.api.extractAttachmentText(attachmentId, extractAttachmentTextOptions, options);
        return result.toPromise();
    }

    /**
     * Get an attachment entity
     * @param attachmentId ID of attachment
     */
    public getAttachment(attachmentId: string, options?: Configuration): Promise<AttachmentEntityDto> {
        const result = this.api.getAttachment(attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns the metadata for an attachment. It is saved separately to the content of the attachment. Contains properties `name` and `content-type` and `content-length` in bytes for a given attachment.
     * Get email attachment metadata information
     * @param attachmentId ID of attachment
     */
    public getAttachmentInfo(attachmentId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentInfo(attachmentId, options);
        return result.toPromise();
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
    public getAttachments(page?: number, size?: number, sort?: 'ASC' | 'DESC', fileNameFilter?: string, since?: Date, before?: Date, inboxId?: string, emailId?: string, sentEmailId?: string, include?: Array<string>, options?: Configuration): Promise<PageAttachmentEntity> {
        const result = this.api.getAttachments(page, size, sort, fileNameFilter, since, before, inboxId, emailId, sentEmailId, include, options);
        return result.toPromise();
    }

    /**
     * Upload an attachment for sending using base64 file encoding. Returns an array whose first element is the ID of the uploaded attachment.
     * @param uploadAttachmentOptions 
     */
    public uploadAttachment(uploadAttachmentOptions: UploadAttachmentOptions, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachment(uploadAttachmentOptions, options);
        return result.toPromise();
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
    public uploadAttachmentBytes(contentType?: string, contentType2?: string, contentId?: string, filename?: string, fileSize?: number, filename2?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadAttachmentBytes(contentType, contentType2, contentId, filename, fileSize, filename2, options);
        return result.toPromise();
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
     * @param inlineObject6 
     */
    public uploadMultipartForm(contentId?: string, contentType?: string, filename?: string, contentTypeHeader?: string, xFilename?: string, xFilenameRaw?: string, xFilesize?: number, inlineObject6?: InlineObject6, options?: Configuration): Promise<Array<string>> {
        const result = this.api.uploadMultipartForm(contentId, contentType, filename, contentTypeHeader, xFilename, xFilenameRaw, xFilesize, inlineObject6, options);
        return result.toPromise();
    }


}



import { ObservableAuthV2Api } from './ObservableAPI.ts';

import { AuthV2ApiRequestFactory, AuthV2ApiResponseProcessor} from "../apis/AuthV2Api.ts";
export class PromiseAuthV2Api {
    private api: ObservableAuthV2Api

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthV2ApiRequestFactory,
        responseProcessor?: AuthV2ApiResponseProcessor
    ) {
        this.api = new ObservableAuthV2Api(configuration, requestFactory, responseProcessor);
    }

    /**
     * Switch the account bound to an Auth v2 session
     * @param switchAccountOptions 
     */
    public authV2AccountSwitch(switchAccountOptions: SwitchAccountOptions, options?: Configuration): Promise<AuthV2BootstrapDto> {
        const result = this.api.authV2AccountSwitch(switchAccountOptions, options);
        return result.toPromise();
    }

    /**
     * Bootstrap an existing Auth v2 session
     * @param authV2BootstrapOptions 
     */
    public authV2Bootstrap(authV2BootstrapOptions?: AuthV2BootstrapOptions, options?: Configuration): Promise<AuthV2BootstrapDto> {
        const result = this.api.authV2Bootstrap(authV2BootstrapOptions, options);
        return result.toPromise();
    }

    /**
     * Switch the environment bound to an Auth v2 session
     * @param targetUserId 
     */
    public authV2EnvironmentSwitch(targetUserId: string, options?: Configuration): Promise<AuthV2BootstrapDto> {
        const result = this.api.authV2EnvironmentSwitch(targetUserId, options);
        return result.toPromise();
    }

    /**
     * Revoke an Auth v2 session
     */
    public authV2Logout(options?: Configuration): Promise<void> {
        const result = this.api.authV2Logout(options);
        return result.toPromise();
    }

    /**
     * Create an Auth v2 session using a password
     * @param authV2PasswordLoginOptions 
     */
    public authV2PasswordLogin(authV2PasswordLoginOptions: AuthV2PasswordLoginOptions, options?: Configuration): Promise<AuthV2BootstrapDto> {
        const result = this.api.authV2PasswordLogin(authV2PasswordLoginOptions, options);
        return result.toPromise();
    }

    /**
     * Redeem a staging provider handoff and continue to the app
     * @param providerKind 
     * @param code 
     */
    public authV2ProviderCallback(providerKind: string, code?: string, options?: Configuration): Promise<void> {
        const result = this.api.authV2ProviderCallback(providerKind, code, options);
        return result.toPromise();
    }

    /**
     * @param code 
     */
    public emailCallback(code?: string, options?: Configuration): Promise<void> {
        const result = this.api.emailCallback(code, options);
        return result.toPromise();
    }

    /**
     * @param attempt 
     */
    public emailCallbackComplete(attempt?: string, options?: Configuration): Promise<void> {
        const result = this.api.emailCallbackComplete(attempt, options);
        return result.toPromise();
    }

    /**
     * @param attempt 
     */
    public emailCallbackContinue(attempt?: string, options?: Configuration): Promise<string> {
        const result = this.api.emailCallbackContinue(attempt, options);
        return result.toPromise();
    }

    /**
     */
    public emailCallbackContinueScript(options?: Configuration): Promise<string> {
        const result = this.api.emailCallbackContinueScript(options);
        return result.toPromise();
    }

    /**
     */
    public emailCallbackHead(options?: Configuration): Promise<void> {
        const result = this.api.emailCallbackHead(options);
        return result.toPromise();
    }


}



import { ObservableBounceControllerApi } from './ObservableAPI.ts';

import { BounceControllerApiRequestFactory, BounceControllerApiResponseProcessor} from "../apis/BounceControllerApi.ts";
export class PromiseBounceControllerApi {
    private api: ObservableBounceControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BounceControllerApiRequestFactory,
        responseProcessor?: BounceControllerApiResponseProcessor
    ) {
        this.api = new ObservableBounceControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Prevent email sending errors by remove recipients who have resulted in past email bounces or complaints
     * Filter a list of email recipients and remove those who have bounced
     * @param filterBouncedRecipientsOptions 
     */
    public filterBouncedRecipient(filterBouncedRecipientsOptions: FilterBouncedRecipientsOptions, options?: Configuration): Promise<FilterBouncedRecipientsResult> {
        const result = this.api.filterBouncedRecipient(filterBouncedRecipientsOptions, options);
        return result.toPromise();
    }

    /**
     * Check if account block status prevents sending
     * Can account send email
     */
    public getAccountBounceBlockStatus(options?: Configuration): Promise<AccountBounceBlockDto> {
        const result = this.api.getAccountBounceBlockStatus(options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced email to fetch
     */
    public getBouncedEmail(id: string, options?: Configuration): Promise<BouncedEmailDto> {
        const result = this.api.getBouncedEmail(id, options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get paginated list of bounced emails.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageBouncedEmail> {
        const result = this.api.getBouncedEmails(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Bounced emails are email you have sent that were rejected by a recipient
     * Get a bounced email.
     * @param id ID of the bounced recipient
     */
    public getBouncedRecipient(id: string, options?: Configuration): Promise<BouncedRecipientDto> {
        const result = this.api.getBouncedRecipient(id, options);
        return result.toPromise();
    }

    /**
     * Bounced recipients are email addresses that you have sent emails to that did not accept the sent email. Once a recipient is bounced you cannot send emails to that address.
     * Get paginated list of bounced recipients.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getBouncedRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageBouncedRecipients> {
        const result = this.api.getBouncedRecipients(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get complaint
     * Get complaint
     * @param id ID of the complaint
     */
    public getComplaint(id: string, options?: Configuration): Promise<Complaint> {
        const result = this.api.getComplaint(id, options);
        return result.toPromise();
    }

    /**
     * SMTP complaints made against your account
     * Get paginated list of complaints.
     * @param page Optional page index 
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getComplaints(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageComplaint> {
        const result = this.api.getComplaints(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Unsubscribed recipient have unsubscribed from a mailing list for a user or domain and cannot be contacted again.
     * Get paginated list of unsubscribed recipients.
     * @param page Optional page index
     * @param size Optional page size 
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param domainId Filter by domainId
     */
    public getListUnsubscribeRecipients(page?: number, size?: number, sort?: 'ASC' | 'DESC', domainId?: string, options?: Configuration): Promise<PageListUnsubscribeRecipients> {
        const result = this.api.getListUnsubscribeRecipients(page, size, sort, domainId, options);
        return result.toPromise();
    }

    /**
     * List of complaints and bounces
     * Get paginated list of reputation items.
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getReputationItems(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageReputationItems> {
        const result = this.api.getReputationItems(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get SES tenant reputation recommendations/findings for this user.
     * Get SES tenant reputation findings
     * @param accountRegion Optional account region filter
     */
    public getTenantReputationFindings(accountRegion?: 'US_WEST_2_ACCOUNT_STAGING' | 'US_EAST_1_ACCOUNT_STAGING' | 'EU_WEST_1_ACCOUNT_STAGING' | 'US_WEST_2_ACCOUNT_SES_1' | 'US_EAST_1_ACCOUNT_SES_1' | 'EU_WEST_1_ACCOUNT_SES_1' | 'US_WEST_2_ACCOUNT_SES_2' | 'EU_WEST_1_ACCOUNT_SES_2' | 'US_WEST_2_ACCOUNT_SES_3' | 'US_WEST_2_ACCOUNT_BYTEWISE' | 'EU_WEST_1_ACCOUNT_BYTEWISE' | 'US_WEST_2' | 'EU_WEST_1' | 'US_EAST_1', options?: Configuration): Promise<TenantReputationFindingsDto> {
        const result = this.api.getTenantReputationFindings(accountRegion, options);
        return result.toPromise();
    }

    /**
     * Get SES tenant sending and reputation status rows for this user. Includes complaint and bounce rates from CloudWatch.
     * Get SES tenant status summary
     * @param accountRegion Optional account region filter
     */
    public getTenantReputationStatusSummary(accountRegion?: 'US_WEST_2_ACCOUNT_STAGING' | 'US_EAST_1_ACCOUNT_STAGING' | 'EU_WEST_1_ACCOUNT_STAGING' | 'US_WEST_2_ACCOUNT_SES_1' | 'US_EAST_1_ACCOUNT_SES_1' | 'EU_WEST_1_ACCOUNT_SES_1' | 'US_WEST_2_ACCOUNT_SES_2' | 'EU_WEST_1_ACCOUNT_SES_2' | 'US_WEST_2_ACCOUNT_SES_3' | 'US_WEST_2_ACCOUNT_BYTEWISE' | 'EU_WEST_1_ACCOUNT_BYTEWISE' | 'US_WEST_2' | 'EU_WEST_1' | 'US_EAST_1', options?: Configuration): Promise<TenantReputationStatusSummaryDto> {
        const result = this.api.getTenantReputationStatusSummary(accountRegion, options);
        return result.toPromise();
    }


}



import { ObservableBulkActionsControllerApi } from './ObservableAPI.ts';

import { BulkActionsControllerApiRequestFactory, BulkActionsControllerApiResponseProcessor} from "../apis/BulkActionsControllerApi.ts";
export class PromiseBulkActionsControllerApi {
    private api: ObservableBulkActionsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BulkActionsControllerApiRequestFactory,
        responseProcessor?: BulkActionsControllerApiResponseProcessor
    ) {
        this.api = new ObservableBulkActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Bulk create Inboxes (email addresses)
     * @param count Number of inboxes to be created in bulk
     */
    public bulkCreateInboxes(count: number, options?: Configuration): Promise<Array<InboxDto>> {
        const result = this.api.bulkCreateInboxes(count, options);
        return result.toPromise();
    }

    /**
     * Bulk Delete Inboxes
     * @param requestBody 
     */
    public bulkDeleteInboxes(requestBody: Array<string>, options?: Configuration): Promise<void> {
        const result = this.api.bulkDeleteInboxes(requestBody, options);
        return result.toPromise();
    }

    /**
     * Bulk Send Emails
     * @param bulkSendEmailOptions 
     */
    public bulkSendEmails(bulkSendEmailOptions: BulkSendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.bulkSendEmails(bulkSendEmailOptions, options);
        return result.toPromise();
    }


}



import { ObservableCampaignProbeControllerApi } from './ObservableAPI.ts';

import { CampaignProbeControllerApiRequestFactory, CampaignProbeControllerApiResponseProcessor} from "../apis/CampaignProbeControllerApi.ts";
export class PromiseCampaignProbeControllerApi {
    private api: ObservableCampaignProbeControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CampaignProbeControllerApiRequestFactory,
        responseProcessor?: CampaignProbeControllerApiResponseProcessor
    ) {
        this.api = new ObservableCampaignProbeControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Compare two campaign probe runs
     * @param probeId 
     * @param runId 
     * @param otherRunId 
     */
    public compareCampaignProbeRuns(probeId: string, runId: string, otherRunId: string, options?: Configuration): Promise<CampaignProbeRunComparisonDto> {
        const result = this.api.compareCampaignProbeRuns(probeId, runId, otherRunId, options);
        return result.toPromise();
    }

    /**
     * Create campaign probe
     * @param createCampaignProbeOptions 
     */
    public createCampaignProbe(createCampaignProbeOptions: CreateCampaignProbeOptions, options?: Configuration): Promise<CampaignProbeDto> {
        const result = this.api.createCampaignProbe(createCampaignProbeOptions, options);
        return result.toPromise();
    }

    /**
     * Delete campaign probe
     * @param probeId 
     */
    public deleteCampaignProbe(probeId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteCampaignProbe(probeId, options);
        return result.toPromise();
    }

    /**
     * Get campaign probe
     * @param probeId 
     */
    public getCampaignProbe(probeId: string, options?: Configuration): Promise<CampaignProbeDto> {
        const result = this.api.getCampaignProbe(probeId, options);
        return result.toPromise();
    }

    /**
     * Get campaign probe insights
     * @param probeId 
     * @param since 
     * @param before 
     */
    public getCampaignProbeInsights(probeId: string, since?: Date, before?: Date, options?: Configuration): Promise<CampaignProbeInsightsDto> {
        const result = this.api.getCampaignProbeInsights(probeId, since, before, options);
        return result.toPromise();
    }

    /**
     * Get campaign probe run
     * @param probeId 
     * @param runId 
     */
    public getCampaignProbeRun(probeId: string, runId: string, options?: Configuration): Promise<CampaignProbeRunDto> {
        const result = this.api.getCampaignProbeRun(probeId, runId, options);
        return result.toPromise();
    }

    /**
     * List campaign probe runs
     * @param probeId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public getCampaignProbeRuns(probeId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'WARNING' | 'FAILED', limit?: number, options?: Configuration): Promise<Array<CampaignProbeRunDto>> {
        const result = this.api.getCampaignProbeRuns(probeId, since, before, status, limit, options);
        return result.toPromise();
    }

    /**
     * Get campaign probe trend series
     * @param probeId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public getCampaignProbeSeries(probeId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Promise<CampaignProbeSeriesDto> {
        const result = this.api.getCampaignProbeSeries(probeId, since, before, bucket, options);
        return result.toPromise();
    }

    /**
     * List campaign probes
     */
    public getCampaignProbes(options?: Configuration): Promise<Array<CampaignProbeDto>> {
        const result = this.api.getCampaignProbes(options);
        return result.toPromise();
    }

    /**
     * Run campaign probe now
     * @param probeId 
     * @param createCampaignProbeRunOptions 
     */
    public runCampaignProbeNow(probeId: string, createCampaignProbeRunOptions: CreateCampaignProbeRunOptions, options?: Configuration): Promise<CampaignProbeRunNowResult> {
        const result = this.api.runCampaignProbeNow(probeId, createCampaignProbeRunOptions, options);
        return result.toPromise();
    }

    /**
     * Run due campaign probes for user
     * @param maxRuns 
     */
    public runDueCampaignProbes(maxRuns?: number, options?: Configuration): Promise<CampaignProbeRunDueResult> {
        const result = this.api.runDueCampaignProbes(maxRuns, options);
        return result.toPromise();
    }

    /**
     * Update campaign probe
     * @param probeId 
     * @param updateCampaignProbeOptions 
     */
    public updateCampaignProbe(probeId: string, updateCampaignProbeOptions: UpdateCampaignProbeOptions, options?: Configuration): Promise<CampaignProbeDto> {
        const result = this.api.updateCampaignProbe(probeId, updateCampaignProbeOptions, options);
        return result.toPromise();
    }


}



import { ObservableCommonActionsControllerApi } from './ObservableAPI.ts';

import { CommonActionsControllerApiRequestFactory, CommonActionsControllerApiResponseProcessor} from "../apis/CommonActionsControllerApi.ts";
export class PromiseCommonActionsControllerApi {
    private api: ObservableCommonActionsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CommonActionsControllerApiRequestFactory,
        responseProcessor?: CommonActionsControllerApiResponseProcessor
    ) {
        this.api = new ObservableCommonActionsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createNewEmailAddress(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createNewEmailAddress(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);
        return result.toPromise();
    }

    /**
     * Returns an Inbox with an `id` and an `emailAddress`
     * Create new random inbox
     * @param allowTeamAccess 
     * @param useDomainPool 
     * @param expiresAt 
     * @param expiresIn 
     * @param emailAddress 
     * @param inboxType 
     * @param description 
     * @param name 
     * @param tags 
     * @param favourite 
     * @param virtualInbox 
     * @param useShortAddress 
     * @param domainName 
     * @param domainId 
     * @param prefix 
     */
    public createRandomInbox(allowTeamAccess?: boolean, useDomainPool?: boolean, expiresAt?: Date, expiresIn?: number, emailAddress?: string, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', description?: string, name?: string, tags?: Array<string>, favourite?: boolean, virtualInbox?: boolean, useShortAddress?: boolean, domainName?: string, domainId?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createRandomInbox(allowTeamAccess, useDomainPool, expiresAt, expiresIn, emailAddress, inboxType, description, name, tags, favourite, virtualInbox, useShortAddress, domainName, domainId, prefix, options);
        return result.toPromise();
    }

    /**
     * Deletes inbox email address
     * Delete inbox email address by inbox id
     * @param inboxId ID of inbox to delete
     */
    public deleteEmailAddress(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailAddress(inboxId, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails
     * Delete all emails in an inbox
     * @param inboxId ID of inbox to empty
     */
    public emptyInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.emptyInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from. Ensure your parameters are URL encoded.
     * Send an email using query parameters
     * @param to Email address to send to
     * @param senderId ID of inbox to send from. If null an inbox will be created for sending
     * @param body Body of the email message. Supports HTML
     * @param subject Subject line of the email
     */
    public sendEmailQuery(to: string, senderId?: string, body?: string, subject?: string, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailQuery(to, senderId, body, subject, options);
        return result.toPromise();
    }

    /**
     * If no senderId or inboxId provided a random email address will be used to send from.
     * Send an email
     * @param simpleSendEmailOptions 
     */
    public sendEmailSimple(simpleSendEmailOptions: SimpleSendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSimple(simpleSendEmailOptions, options);
        return result.toPromise();
    }


}



import { ObservableConnectorControllerApi } from './ObservableAPI.ts';

import { ConnectorControllerApiRequestFactory, ConnectorControllerApiResponseProcessor} from "../apis/ConnectorControllerApi.ts";
export class PromiseConnectorControllerApi {
    private api: ObservableConnectorControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConnectorControllerApiRequestFactory,
        responseProcessor?: ConnectorControllerApiResponseProcessor
    ) {
        this.api = new ObservableConnectorControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector
     * @param createConnectorOptions 
     * @param inboxId Optional inbox ID to associate with the connector
     */
    public createConnector(createConnectorOptions: CreateConnectorOptions, inboxId?: string, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.createConnector(createConnectorOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Allows the reading of emails in an external mailbox and syncing to a MailSlurp inbox
     * Create an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public createConnectorImapConnection(id: string, createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Promise<ConnectorImapConnectionDto> {
        const result = this.api.createConnectorImapConnection(id, createConnectorImapConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Allows sending via connector and email is routed to connected inbox and sent via SMTP
     * Create an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public createConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Promise<ConnectorSmtpConnectionDto> {
        const result = this.api.createConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Configure automatic pull or emails from external inboxes using an interval or schedule
     * Create an inbox connector sync settings
     * @param id 
     * @param createConnectorSyncSettingsOptions 
     */
    public createConnectorSyncSettings(id: string, createConnectorSyncSettingsOptions: CreateConnectorSyncSettingsOptions, options?: Configuration): Promise<ConnectorSyncSettingsDto> {
        const result = this.api.createConnectorSyncSettings(id, createConnectorSyncSettingsOptions, options);
        return result.toPromise();
    }

    /**
     * Sync emails between external mailboxes and MailSlurp inboxes
     * Create an inbox connector with options
     * @param createConnectorWithOptions 
     * @param inboxId Optional inbox ID to associate with the connector
     */
    public createConnectorWithOptions(createConnectorWithOptions: CreateConnectorWithOptions, inboxId?: string, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.createConnectorWithOptions(createConnectorWithOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Delete all inbox connectors
     */
    public deleteAllConnector(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllConnector(options);
        return result.toPromise();
    }

    /**
     * Delete an inbox connector
     * @param id 
     */
    public deleteConnector(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnector(id, options);
        return result.toPromise();
    }

    /**
     * Delete IMAP connection for external inbox
     * Delete an inbox connector IMAP connection
     * @param id 
     */
    public deleteConnectorImapConnection(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnectorImapConnection(id, options);
        return result.toPromise();
    }

    /**
     * Delete SMTP connection for external inbox
     * Delete an inbox connector SMTP connection
     * @param id 
     */
    public deleteConnectorSmtpConnection(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnectorSmtpConnection(id, options);
        return result.toPromise();
    }

    /**
     * Configure automatic pull or emails from external inboxes using an interval or schedule
     * Create an inbox connector sync settings
     * @param id 
     */
    public deleteConnectorSyncSettings(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteConnectorSyncSettings(id, options);
        return result.toPromise();
    }

    /**
     * Get all inbox connector events
     * @param id Optional connector ID
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Filter by event type
     */
    public getAllConnectorEvents(id?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'SEND' | 'SYNC', options?: Configuration): Promise<PageConnectorEvents> {
        const result = this.api.getAllConnectorEvents(id, page, size, sort, since, before, eventType, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector
     * @param id 
     */
    public getConnector(id: string, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.getConnector(id, options);
        return result.toPromise();
    }

    /**
     * Find an inbox connector by email address
     * Get connector by email address
     * @param emailAddress Email address to search for connector by
     */
    public getConnectorByEmailAddress(emailAddress: string, options?: Configuration): Promise<OptionalConnectorDto> {
        const result = this.api.getConnectorByEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Find an inbox connector by inbox ID
     * Get connector by inbox ID
     * @param inboxId Inbox ID to search for connector by
     */
    public getConnectorByInboxId(inboxId: string, options?: Configuration): Promise<OptionalConnectorDto> {
        const result = this.api.getConnectorByInboxId(inboxId, options);
        return result.toPromise();
    }

    /**
     * Find an inbox connector by name
     * Get connector by name
     * @param name Name to search for connector by
     */
    public getConnectorByName(name: string, options?: Configuration): Promise<OptionalConnectorDto> {
        const result = this.api.getConnectorByName(name, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector event
     * @param id 
     */
    public getConnectorEvent(id: string, options?: Configuration): Promise<ConnectorEventDto> {
        const result = this.api.getConnectorEvent(id, options);
        return result.toPromise();
    }

    /**
     * Get an inbox connector events
     * @param id 
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Filter by event type
     */
    public getConnectorEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'SEND' | 'SYNC', options?: Configuration): Promise<PageConnectorEvents> {
        const result = this.api.getConnectorEvents(id, page, size, sort, since, before, eventType, options);
        return result.toPromise();
    }

    /**
     * Get IMAP connection for external inbox
     * Get an inbox connector IMAP connection
     * @param id 
     */
    public getConnectorImapConnection(id: string, options?: Configuration): Promise<OptionalConnectorImapConnectionDto> {
        const result = this.api.getConnectorImapConnection(id, options);
        return result.toPromise();
    }

    /**
     * Get common mail provider SMTP and IMAP connection settings
     * Get SMTP and IMAP connection settings for common mail providers
     */
    public getConnectorProviderSettings(options?: Configuration): Promise<ConnectorProviderSettingsDto> {
        const result = this.api.getConnectorProviderSettings(options);
        return result.toPromise();
    }

    /**
     * Get SMTP connection for external inbox
     * Get an inbox connector SMTP connection
     * @param id 
     */
    public getConnectorSmtpConnection(id: string, options?: Configuration): Promise<OptionalConnectorSmtpConnectionDto> {
        const result = this.api.getConnectorSmtpConnection(id, options);
        return result.toPromise();
    }

    /**
     * Get sync settings for connection with external inbox
     * Get an inbox connector sync settings
     * @param id 
     */
    public getConnectorSyncSettings(id: string, options?: Configuration): Promise<OptionalConnectorSyncSettingsDto> {
        const result = this.api.getConnectorSyncSettings(id, options);
        return result.toPromise();
    }

    /**
     * List inbox connectors that sync external emails to MailSlurp inboxes
     * Get inbox connectors
     * @param page Optional page index in connector list pagination
     * @param size Optional page size in connector list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getConnectors(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageConnector> {
        const result = this.api.getConnectors(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Send from an inbox connector
     * @param id 
     * @param sendEmailOptions 
     * @param useFallback 
     */
    public sendEmailFromConnector(id: string, sendEmailOptions: SendEmailOptions, useFallback?: boolean, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailFromConnector(id, sendEmailOptions, useFallback, options);
        return result.toPromise();
    }

    /**
     * Sync an inbox connector
     * @param id 
     * @param since Date to request emails since
     * @param folder Which folder to sync emails with
     * @param logging Enable or disable logging for the sync operation
     */
    public syncConnector(id: string, since?: Date, folder?: string, logging?: boolean, options?: Configuration): Promise<ConnectorSyncRequestResult> {
        const result = this.api.syncConnector(id, since, folder, logging, options);
        return result.toPromise();
    }

    /**
     * Test the IMAP connection for a connector
     * Test an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public testConnectorImapConnection(id: string, createConnectorImapConnectionOptions?: CreateConnectorImapConnectionOptions, options?: Configuration): Promise<ConnectorImapConnectionTestResult> {
        const result = this.api.testConnectorImapConnection(id, createConnectorImapConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Test the IMAP connection options for a connector
     * Test an inbox connector IMAP connection options
     * @param createConnectorImapConnectionOptions 
     */
    public testConnectorImapConnectionOptions(createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Promise<ConnectorImapConnectionTestResult> {
        const result = this.api.testConnectorImapConnectionOptions(createConnectorImapConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Test the SMTP connection for a connector
     * Test an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public testConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions?: CreateConnectorSmtpConnectionOptions, options?: Configuration): Promise<ConnectorSmtpConnectionTestResult> {
        const result = this.api.testConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Test the SMTP connection options for a connector
     * Test an inbox connector SMTP connection options
     * @param createConnectorSmtpConnectionOptions 
     */
    public testConnectorSmtpConnectionOptions(createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Promise<ConnectorSmtpConnectionTestResult> {
        const result = this.api.testConnectorSmtpConnectionOptions(createConnectorSmtpConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Update an inbox connector
     * @param id 
     * @param createConnectorOptions 
     */
    public updateConnector(id: string, createConnectorOptions: CreateConnectorOptions, options?: Configuration): Promise<ConnectorDto> {
        const result = this.api.updateConnector(id, createConnectorOptions, options);
        return result.toPromise();
    }

    /**
     * Update IMAP connection for external inbox
     * Update an inbox connector IMAP connection
     * @param id 
     * @param createConnectorImapConnectionOptions 
     */
    public updateConnectorImapConnection(id: string, createConnectorImapConnectionOptions: CreateConnectorImapConnectionOptions, options?: Configuration): Promise<ConnectorImapConnectionDto> {
        const result = this.api.updateConnectorImapConnection(id, createConnectorImapConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Update SMTP connection for external inbox
     * Update an inbox connector SMTP connection
     * @param id 
     * @param createConnectorSmtpConnectionOptions 
     */
    public updateConnectorSmtpConnection(id: string, createConnectorSmtpConnectionOptions: CreateConnectorSmtpConnectionOptions, options?: Configuration): Promise<ConnectorSmtpConnectionDto> {
        const result = this.api.updateConnectorSmtpConnection(id, createConnectorSmtpConnectionOptions, options);
        return result.toPromise();
    }


}



import { ObservableConsentControllerApi } from './ObservableAPI.ts';

import { ConsentControllerApiRequestFactory, ConsentControllerApiResponseProcessor} from "../apis/ConsentControllerApi.ts";
export class PromiseConsentControllerApi {
    private api: ObservableConsentControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ConsentControllerApiRequestFactory,
        responseProcessor?: ConsentControllerApiResponseProcessor
    ) {
        this.api = new ObservableConsentControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param emailAddress Email address to check consent for
     */
    public checkSendingConsentForEmailAddress(emailAddress: string, options?: Configuration): Promise<OptInSendingConsentDto> {
        const result = this.api.checkSendingConsentForEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOptInIdentities(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageOptInIdentityProjection> {
        const result = this.api.getOptInIdentities(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * @param emailAddress Email address to revoke consent for
     */
    public revokeOptInConsentForEmailAddress(emailAddress: string, options?: Configuration): Promise<OptInSendingConsentDto> {
        const result = this.api.revokeOptInConsentForEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Send double-opt in consent for an email address
     * Send a verification code to a user once they have explicitly submitted their email address
     * @param optInConsentOptions 
     */
    public sendOptInConsentForEmailAddress(optInConsentOptions: OptInConsentOptions, options?: Configuration): Promise<OptInConsentSendResult> {
        const result = this.api.sendOptInConsentForEmailAddress(optInConsentOptions, options);
        return result.toPromise();
    }


}



import { ObservableContactControllerApi } from './ObservableAPI.ts';

import { ContactControllerApiRequestFactory, ContactControllerApiResponseProcessor} from "../apis/ContactControllerApi.ts";
export class PromiseContactControllerApi {
    private api: ObservableContactControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactControllerApiRequestFactory,
        responseProcessor?: ContactControllerApiResponseProcessor
    ) {
        this.api = new ObservableContactControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a contact
     * @param createContactOptions 
     */
    public createContact(createContactOptions: CreateContactOptions, options?: Configuration): Promise<ContactDto> {
        const result = this.api.createContact(createContactOptions, options);
        return result.toPromise();
    }

    /**
     * Delete contact
     * @param contactId 
     */
    public deleteContact(contactId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get all contacts
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param search Search terms
     */
    public getAllContacts(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getAllContacts(page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * Get contact
     * @param contactId 
     */
    public getContact(contactId: string, options?: Configuration): Promise<ContactDto> {
        const result = this.api.getContact(contactId, options);
        return result.toPromise();
    }

    /**
     * Get contact vCard vcf file
     * @param contactId 
     */
    public getContactVCard(contactId: string, options?: Configuration): Promise<void> {
        const result = this.api.getContactVCard(contactId, options);
        return result.toPromise();
    }

    /**
     * Get all contacts
     */
    public getContacts(options?: Configuration): Promise<Array<ContactProjection>> {
        const result = this.api.getContacts(options);
        return result.toPromise();
    }


}



import { ObservableDeliverabilityTestControllerApi } from './ObservableAPI.ts';

import { DeliverabilityTestControllerApiRequestFactory, DeliverabilityTestControllerApiResponseProcessor} from "../apis/DeliverabilityTestControllerApi.ts";
export class PromiseDeliverabilityTestControllerApi {
    private api: ObservableDeliverabilityTestControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeliverabilityTestControllerApiRequestFactory,
        responseProcessor?: DeliverabilityTestControllerApiResponseProcessor
    ) {
        this.api = new ObservableDeliverabilityTestControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel a running or paused simulation job.
     * Cancel deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public cancelDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.cancelDeliverabilitySimulationJob(testId, jobId, options);
        return result.toPromise();
    }

    /**
     * Create and start a simulation job for a running load test. Only one active simulation job is allowed per user.
     * Create deliverability simulation job
     * @param testId 
     * @param createDeliverabilitySimulationJobOptions 
     */
    public createDeliverabilitySimulationJob(testId: string, createDeliverabilitySimulationJobOptions: CreateDeliverabilitySimulationJobOptions, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.createDeliverabilitySimulationJob(testId, createDeliverabilitySimulationJobOptions, options);
        return result.toPromise();
    }

    /**
     * Create a load test for inboxes or phone numbers using ALL, PATTERN, or EXPLICIT selector scope.
     * Create load test
     * @param createDeliverabilityTestOptions 
     */
    public createDeliverabilityTest(createDeliverabilityTestOptions: CreateDeliverabilityTestOptions, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.createDeliverabilityTest(createDeliverabilityTestOptions, options);
        return result.toPromise();
    }

    /**
     * Delete test and all persisted entity-level results.
     * Delete load test
     * @param testId 
     */
    public deleteDeliverabilityTest(testId: string, options?: Configuration): Promise<DeleteResult> {
        const result = this.api.deleteDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Create a fresh load test using an existing test configuration, including selector scope, exclusions, and expectations.
     * Duplicate load test
     * @param testId 
     */
    public duplicateDeliverabilityTest(testId: string, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.duplicateDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Export a PDF report for a terminal load test (COMPLETE, FAILED, or STOPPED), including configuration, summary outcomes, and detailed entity-level results.
     * Export load-test report as PDF
     * @param testId 
     */
    public exportDeliverabilityTestReport(testId: string, options?: Configuration): Promise<void> {
        const result = this.api.exportDeliverabilityTestReport(testId, options);
        return result.toPromise();
    }

    /**
     * Export per-entity deliverability results including expectation-level pass/fail counts. The latest status is evaluated with the same polling safeguards before export.
     * Export load-test entity results as CSV
     * @param testId 
     * @param matched 
     */
    public exportDeliverabilityTestResults(testId: string, matched?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.exportDeliverabilityTestResults(testId, matched, options);
        return result.toPromise();
    }

    /**
     * Compare deliverability runs over a time range with bucketed chart metrics and run-level rows for table views.
     * Get deliverability analytics time series
     * @param since 
     * @param before 
     * @param scope 
     * @param bucket 
     * @param runLimit 
     */
    public getDeliverabilityAnalyticsSeries(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', bucket?: 'HOUR' | 'DAY', runLimit?: number, options?: Configuration): Promise<DeliverabilityAnalyticsSeriesDto> {
        const result = this.api.getDeliverabilityAnalyticsSeries(since, before, scope, bucket, runLimit, options);
        return result.toPromise();
    }

    /**
     * Find commonly failing entities and phone country/variant dimensions across deliverability runs in a time range.
     * Get deliverability failure hotspots
     * @param since 
     * @param before 
     * @param scope 
     * @param limit 
     */
    public getDeliverabilityFailureHotspots(since?: Date, before?: Date, scope?: 'INBOX' | 'PHONE', limit?: number, options?: Configuration): Promise<DeliverabilityFailureHotspotsDto> {
        const result = this.api.getDeliverabilityFailureHotspots(since, before, scope, limit, options);
        return result.toPromise();
    }

    /**
     * Get simulation job status and progress counters.
     * Get deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public getDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.getDeliverabilitySimulationJob(testId, jobId, options);
        return result.toPromise();
    }

    /**
     * Get paged simulation events including send successes and failures.
     * Get deliverability simulation job events
     * @param testId 
     * @param jobId 
     * @param page 
     * @param size 
     * @param sort 
     */
    public getDeliverabilitySimulationJobEvents(testId: string, jobId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<DeliverabilitySimulationJobEventPageDto> {
        const result = this.api.getDeliverabilitySimulationJobEvents(testId, jobId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get load-test configuration and latest progress counters.
     * Get load test
     * @param testId 
     */
    public getDeliverabilityTest(testId: string, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.getDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Get paged per-entity expectation results with optional matched/unmatched filtering.
     * Get load-test entity results
     * @param testId 
     * @param matched 
     * @param page 
     * @param size 
     * @param sort 
     */
    public getDeliverabilityTestResults(testId: string, matched?: boolean, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<DeliverabilityEntityResultPageDto> {
        const result = this.api.getDeliverabilityTestResults(testId, matched, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List load tests for the authenticated account.
     * List load tests
     * @param page Page index
     * @param size Page size
     * @param sort Sort direction
     */
    public getDeliverabilityTests(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<DeliverabilityTestPageDto> {
        const result = this.api.getDeliverabilityTests(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get the most recent simulation job for a load test.
     * Get latest deliverability simulation job
     * @param testId 
     */
    public getLatestDeliverabilitySimulationJob(testId: string, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.getLatestDeliverabilitySimulationJob(testId, options);
        return result.toPromise();
    }

    /**
     * Pause a running simulation job.
     * Pause deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public pauseDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.pauseDeliverabilitySimulationJob(testId, jobId, options);
        return result.toPromise();
    }

    /**
     * Pause a RUNNING or SCHEDULED load test.
     * Pause load test
     * @param testId 
     */
    public pauseDeliverabilityTest(testId: string, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.pauseDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Poll test progress. Evaluation is throttled with a 5-second cache window to protect backing data stores.
     * Poll load-test status
     * @param testId 
     */
    public pollDeliverabilityTestStatus(testId: string, options?: Configuration): Promise<DeliverabilityPollStatusResultDto> {
        const result = this.api.pollDeliverabilityTestStatus(testId, options);
        return result.toPromise();
    }

    /**
     * Resume a paused simulation job.
     * Resume deliverability simulation job
     * @param testId 
     * @param jobId 
     */
    public resumeDeliverabilitySimulationJob(testId: string, jobId: string, options?: Configuration): Promise<DeliverabilitySimulationJobDto> {
        const result = this.api.resumeDeliverabilitySimulationJob(testId, jobId, options);
        return result.toPromise();
    }

    /**
     * Start a CREATED test or resume a PAUSED/SCHEDULED test.
     * Start or resume load test
     * @param testId 
     */
    public startDeliverabilityTest(testId: string, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.startDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Stop a load test and mark it terminal.
     * Stop load test
     * @param testId 
     */
    public stopDeliverabilityTest(testId: string, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.stopDeliverabilityTest(testId, options);
        return result.toPromise();
    }

    /**
     * Update metadata, timeout, and expectations for a non-running non-terminal test.
     * Update load test
     * @param testId 
     * @param updateDeliverabilityTestOptions 
     */
    public updateDeliverabilityTest(testId: string, updateDeliverabilityTestOptions: UpdateDeliverabilityTestOptions, options?: Configuration): Promise<DeliverabilityTestDto> {
        const result = this.api.updateDeliverabilityTest(testId, updateDeliverabilityTestOptions, options);
        return result.toPromise();
    }


}



import { ObservableDevicePreviewsControllerApi } from './ObservableAPI.ts';

import { DevicePreviewsControllerApiRequestFactory, DevicePreviewsControllerApiResponseProcessor} from "../apis/DevicePreviewsControllerApi.ts";
export class PromiseDevicePreviewsControllerApi {
    private api: ObservableDevicePreviewsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DevicePreviewsControllerApiRequestFactory,
        responseProcessor?: DevicePreviewsControllerApiResponseProcessor
    ) {
        this.api = new ObservableDevicePreviewsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Cancel a running device preview run
     * @param runId 
     * @param cancelDevicePreviewRunOptions 
     */
    public cancelDevicePreviewRun(runId: string, cancelDevicePreviewRunOptions?: CancelDevicePreviewRunOptions, options?: Configuration): Promise<CancelDevicePreviewRunResult> {
        const result = this.api.cancelDevicePreviewRun(runId, cancelDevicePreviewRunOptions, options);
        return result.toPromise();
    }

    /**
     * Create device preview feedback
     * @param createDevicePreviewFeedbackOptions 
     */
    public createDevicePreviewFeedback(createDevicePreviewFeedbackOptions: CreateDevicePreviewFeedbackOptions, options?: Configuration): Promise<DevicePreviewFeedbackDto> {
        const result = this.api.createDevicePreviewFeedback(createDevicePreviewFeedbackOptions, options);
        return result.toPromise();
    }

    /**
     * Create a device preview folder
     * @param createDevicePreviewFolderOptions 
     */
    public createDevicePreviewFolder(createDevicePreviewFolderOptions: CreateDevicePreviewFolderOptions, options?: Configuration): Promise<DevicePreviewFolderDto> {
        const result = this.api.createDevicePreviewFolder(createDevicePreviewFolderOptions, options);
        return result.toPromise();
    }

    /**
     * Create a temporary email address for device preview import
     * @param createDevicePreviewIngestAddressOptions 
     */
    public createDevicePreviewImportAddress(createDevicePreviewIngestAddressOptions?: CreateDevicePreviewIngestAddressOptions, options?: Configuration): Promise<DevicePreviewIngestAddressDto> {
        const result = this.api.createDevicePreviewImportAddress(createDevicePreviewIngestAddressOptions, options);
        return result.toPromise();
    }

    /**
     * Create a device preview profile
     * @param createDevicePreviewProfileOptions 
     */
    public createDevicePreviewProfile(createDevicePreviewProfileOptions: CreateDevicePreviewProfileOptions, options?: Configuration): Promise<DevicePreviewProfileDto> {
        const result = this.api.createDevicePreviewProfile(createDevicePreviewProfileOptions, options);
        return result.toPromise();
    }

    /**
     * Create a new device preview run for an email
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public createDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRun(emailId, createDevicePreviewOptions, options);
        return result.toPromise();
    }

    /**
     * Uploads an HTML or RFC822 EML file, or a ZIP archive containing exactly one HTML or EML file. ZIP uploads are bounded by entry count, expanded size, and compression ratio.
     * Create a device preview run from an HTML, EML, or ZIP file
     * @param file An .html, .htm, or .eml file, or a .zip archive containing exactly one supported file.
     * @param subject 
     * @param from 
     * @param to 
     * @param sourceAlias 
     * @param externalId 
     * @param providers Legacy web-provider keys to render.
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param emailAudit 
     * @param domainMonitor 
     * @param senderDomain 
     * @param folderId 
     */
    public createDevicePreviewRunFromFile(file: HttpFile, subject?: string, from?: string, to?: string, sourceAlias?: string, externalId?: string, providers?: Array<string>, allTargets?: boolean, targets?: Array<string>, emailAudit?: boolean, domainMonitor?: boolean, senderDomain?: string, folderId?: string, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRunFromFile(file, subject, from, to, sourceAlias, externalId, providers, allTargets, targets, emailAudit, domainMonitor, senderDomain, folderId, options);
        return result.toPromise();
    }

    /**
     * Create a device preview run from HTML
     * @param createDevicePreviewHtmlImportOptions 
     */
    public createDevicePreviewRunFromHtmlImport(createDevicePreviewHtmlImportOptions: CreateDevicePreviewHtmlImportOptions, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRunFromHtmlImport(createDevicePreviewHtmlImportOptions, options);
        return result.toPromise();
    }

    /**
     * Create a device preview run from imported raw MIME
     * @param createDevicePreviewImportOptions 
     */
    public createDevicePreviewRunFromImport(createDevicePreviewImportOptions: CreateDevicePreviewImportOptions, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRunFromImport(createDevicePreviewImportOptions, options);
        return result.toPromise();
    }

    /**
     * Create a device preview run from multipart EML upload
     * @param file 
     * @param sourceAlias 
     * @param externalId 
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param folderId 
     */
    public createDevicePreviewRunFromMultipartImport(file: HttpFile, sourceAlias?: string, externalId?: string, allTargets?: boolean, targets?: Array<string>, folderId?: string, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRunFromMultipartImport(file, sourceAlias, externalId, allTargets, targets, folderId, options);
        return result.toPromise();
    }

    /**
     * Create a device preview run from raw MIME bytes
     * @param sourceAlias 
     * @param externalId 
     * @param allTargets Render every currently configured target.
     * @param targets Device preview target keys to render.
     * @param folderId 
     */
    public createDevicePreviewRunFromRawImport(sourceAlias?: string, externalId?: string, allTargets?: boolean, targets?: Array<string>, folderId?: string, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.createDevicePreviewRunFromRawImport(sourceAlias, externalId, allTargets, targets, folderId, options);
        return result.toPromise();
    }

    /**
     * Create a share link for a device preview run
     * @param runId 
     * @param createDevicePreviewShareLinkOptions 
     */
    public createDevicePreviewShareLink(runId: string, createDevicePreviewShareLinkOptions?: CreateDevicePreviewShareLinkOptions, options?: Configuration): Promise<DevicePreviewShareLinkDto> {
        const result = this.api.createDevicePreviewShareLink(runId, createDevicePreviewShareLinkOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a folder, preserving renders and child folders
     * @param folderId 
     */
    public deleteDevicePreviewFolder(folderId: string, options?: Configuration): Promise<DeleteDevicePreviewFolderResult> {
        const result = this.api.deleteDevicePreviewFolder(folderId, options);
        return result.toPromise();
    }

    /**
     * Delete a device preview profile
     * @param profileId 
     */
    public deleteDevicePreviewProfile(profileId: string, options?: Configuration): Promise<DeleteDevicePreviewProfileResult> {
        const result = this.api.deleteDevicePreviewProfile(profileId, options);
        return result.toPromise();
    }

    /**
     * Delete local device preview run data
     * @param runId 
     */
    public deleteDevicePreviewRun(runId: string, options?: Configuration): Promise<DeleteDevicePreviewRunResult> {
        const result = this.api.deleteDevicePreviewRun(runId, options);
        return result.toPromise();
    }

    /**
     * Revoke a device preview share link
     * @param shareLinkId 
     */
    public deleteDevicePreviewShareLink(shareLinkId: string, options?: Configuration): Promise<DeleteDevicePreviewShareLinkResult> {
        const result = this.api.deleteDevicePreviewShareLink(shareLinkId, options);
        return result.toPromise();
    }

    /**
     * Download the original RFC822 email for a device preview submission
     * @param submissionId 
     */
    public downloadDevicePreviewEmailSubmissionSourceEmail(submissionId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadDevicePreviewEmailSubmissionSourceEmail(submissionId, options);
        return result.toPromise();
    }

    /**
     * Download the original RFC822 email for a device preview run
     * @param runId 
     */
    public downloadDevicePreviewRunSourceEmail(runId: string, options?: Configuration): Promise<HttpFile> {
        const result = this.api.downloadDevicePreviewRunSourceEmail(runId, options);
        return result.toPromise();
    }

    /**
     * Return active run for email or create one when none exists
     * @param emailId 
     * @param createDevicePreviewOptions 
     */
    public ensureDevicePreviewRun(emailId: string, createDevicePreviewOptions?: CreateDevicePreviewOptions, options?: Configuration): Promise<CreateDevicePreviewRunResult> {
        const result = this.api.ensureDevicePreviewRun(emailId, createDevicePreviewOptions, options);
        return result.toPromise();
    }

    /**
     * Return account device preview email domain setup or create one
     */
    public getDevicePreviewEmailDomainOrCreate(options?: Configuration): Promise<DevicePreviewAccountSettingsDto> {
        const result = this.api.getDevicePreviewEmailDomainOrCreate(options);
        return result.toPromise();
    }

    /**
     * List device preview runs created from account email domains
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public getDevicePreviewEmailRuns(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<Array<DevicePreviewRunDto>> {
        const result = this.api.getDevicePreviewEmailRuns(since, emailDomainId, profileId, localPart, limit, hydrateThumbnail, options);
        return result.toPromise();
    }

    /**
     * Get the original email content for a device preview submission
     * @param submissionId 
     */
    public getDevicePreviewEmailSubmissionSourceEmail(submissionId: string, options?: Configuration): Promise<DevicePreviewSourceEmailDto> {
        const result = this.api.getDevicePreviewEmailSubmissionSourceEmail(submissionId, options);
        return result.toPromise();
    }

    /**
     * List received device preview email submissions
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param recipientEmailAddress 
     */
    public getDevicePreviewEmailSubmissions(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, recipientEmailAddress?: string, options?: Configuration): Promise<Array<DevicePreviewEmailSubmissionDto>> {
        const result = this.api.getDevicePreviewEmailSubmissions(since, emailDomainId, profileId, localPart, limit, recipientEmailAddress, options);
        return result.toPromise();
    }

    /**
     * Get a single device preview feedback item
     * @param feedbackId 
     */
    public getDevicePreviewFeedback(feedbackId: string, options?: Configuration): Promise<DevicePreviewFeedbackDto> {
        const result = this.api.getDevicePreviewFeedback(feedbackId, options);
        return result.toPromise();
    }

    /**
     * List device preview feedback
     * @param page 
     * @param size 
     * @param source 
     * @param runId 
     * @param status 
     * @param provider 
     * @param category 
     * @param search 
     */
    public getDevicePreviewFeedbackItems(page?: number, size?: number, source?: 'API_SERVICE' | 'LAB_USER' | 'END_USER' | 'SYSTEM', runId?: string, status?: 'OPEN' | 'ACKNOWLEDGED' | 'RESOLVED' | 'DISMISSED', provider?: 'GMAIL' | 'OUTLOOK' | 'YAHOO', category?: 'GENERAL' | 'RUN_QUALITY' | 'SCREENSHOT_QUALITY' | 'PROVIDER_ISSUE' | 'BUG_REPORT' | 'FEATURE_REQUEST' | 'NOTE', search?: string, options?: Configuration): Promise<DevicePreviewFeedbackListDto> {
        const result = this.api.getDevicePreviewFeedbackItems(page, size, source, runId, status, provider, category, search, options);
        return result.toPromise();
    }

    /**
     * Get a device preview folder
     * @param folderId 
     */
    public getDevicePreviewFolder(folderId: string, options?: Configuration): Promise<DevicePreviewFolderDto> {
        const result = this.api.getDevicePreviewFolder(folderId, options);
        return result.toPromise();
    }

    /**
     * List device preview folders
     */
    public getDevicePreviewFolders(options?: Configuration): Promise<Array<DevicePreviewFolderDto>> {
        const result = this.api.getDevicePreviewFolders(options);
        return result.toPromise();
    }

    /**
     * Get temporary device preview import address status
     * @param sessionId 
     */
    public getDevicePreviewImportAddress(sessionId: string, options?: Configuration): Promise<DevicePreviewIngestAddressDto> {
        const result = this.api.getDevicePreviewImportAddress(sessionId, options);
        return result.toPromise();
    }

    /**
     * Returns live native device preview target availability for authenticated API clients, including worker health, queue, timeout, and status fields. Use `/device-preview-targets` when you need the stable catalog without transient availability data.
     * Get native device preview target availability
     */
    public getDevicePreviewNativeTargetAvailability(options?: Configuration): Promise<DevicePreviewNativeTargetAvailabilityListDto> {
        const result = this.api.getDevicePreviewNativeTargetAvailability(options);
        return result.toPromise();
    }

    /**
     * Get a device preview profile
     * @param profileId 
     */
    public getDevicePreviewProfile(profileId: string, options?: Configuration): Promise<DevicePreviewProfileDto> {
        const result = this.api.getDevicePreviewProfile(profileId, options);
        return result.toPromise();
    }

    /**
     * List device preview profiles
     */
    public getDevicePreviewProfiles(options?: Configuration): Promise<Array<DevicePreviewProfileDto>> {
        const result = this.api.getDevicePreviewProfiles(options);
        return result.toPromise();
    }

    /**
     * Get device preview run status
     * @param runId 
     */
    public getDevicePreviewRun(runId: string, options?: Configuration): Promise<DevicePreviewRunDto> {
        const result = this.api.getDevicePreviewRun(runId, options);
        return result.toPromise();
    }

    /**
     * Get provider-level progress for a device preview run
     * @param runId 
     * @param provider 
     */
    public getDevicePreviewRunProviderProgress(runId: string, provider: 'GMAIL' | 'OUTLOOK' | 'YAHOO', options?: Configuration): Promise<DevicePreviewProviderProgressDto> {
        const result = this.api.getDevicePreviewRunProviderProgress(runId, provider, options);
        return result.toPromise();
    }

    /**
     * Get device preview run results
     * @param runId 
     */
    public getDevicePreviewRunResults(runId: string, options?: Configuration): Promise<DevicePreviewRunResultsDto> {
        const result = this.api.getDevicePreviewRunResults(runId, options);
        return result.toPromise();
    }

    /**
     * Get a device preview screenshot image
     * @param runId 
     * @param screenshotId 
     */
    public getDevicePreviewRunScreenshot(runId: string, screenshotId: string, options?: Configuration): Promise<string> {
        const result = this.api.getDevicePreviewRunScreenshot(runId, screenshotId, options);
        return result.toPromise();
    }

    /**
     * Get the original email content for a device preview run
     * @param runId 
     */
    public getDevicePreviewRunSourceEmail(runId: string, options?: Configuration): Promise<DevicePreviewSourceEmailDto> {
        const result = this.api.getDevicePreviewRunSourceEmail(runId, options);
        return result.toPromise();
    }

    /**
     * List previous device preview runs for an email
     * @param emailId 
     * @param limit 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public getDevicePreviewRuns(emailId: string, limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<Array<DevicePreviewRunDto>> {
        const result = this.api.getDevicePreviewRuns(emailId, limit, hydrateThumbnail, options);
        return result.toPromise();
    }

    /**
     * List previous device preview runs for account
     * @param limit 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public getDevicePreviewRunsForAccount(limit?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<Array<DevicePreviewRunDto>> {
        const result = this.api.getDevicePreviewRunsForAccount(limit, hydrateThumbnail, options);
        return result.toPromise();
    }

    /**
     * List previous device preview runs for account in paginated form
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     * @param folderId 
     * @param unfiledOnly 
     * @param emailId 
     */
    public getDevicePreviewRunsForAccountOffsetPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', hydrateThumbnail?: boolean, folderId?: string, unfiledOnly?: boolean, emailId?: string, options?: Configuration): Promise<PageDevicePreviewRunProjection> {
        const result = this.api.getDevicePreviewRunsForAccountOffsetPaginated(page, size, sort, hydrateThumbnail, folderId, unfiledOnly, emailId, options);
        return result.toPromise();
    }

    /**
     * List previous device preview runs for an email in paginated form
     * @param emailId 
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public getDevicePreviewRunsOffsetPaginated(emailId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', hydrateThumbnail?: boolean, options?: Configuration): Promise<PageDevicePreviewRunProjection> {
        const result = this.api.getDevicePreviewRunsOffsetPaginated(emailId, page, size, sort, hydrateThumbnail, options);
        return result.toPromise();
    }

    /**
     * List share links for a device preview run
     * @param runId 
     */
    public getDevicePreviewShareLinks(runId: string, options?: Configuration): Promise<Array<DevicePreviewShareLinkDto>> {
        const result = this.api.getDevicePreviewShareLinks(runId, options);
        return result.toPromise();
    }

    /**
     * Get a public shared device preview result
     * @param shareToken 
     */
    public getDevicePreviewSharedResult(shareToken: string, options?: Configuration): Promise<DevicePreviewSharedResultDto> {
        const result = this.api.getDevicePreviewSharedResult(shareToken, options);
        return result.toPromise();
    }

    /**
     * Get a public shared device preview screenshot image
     * @param shareToken 
     * @param screenshotId 
     */
    public getDevicePreviewSharedResultScreenshot(shareToken: string, screenshotId: string, options?: Configuration): Promise<string> {
        const result = this.api.getDevicePreviewSharedResultScreenshot(shareToken, screenshotId, options);
        return result.toPromise();
    }

    /**
     * Returns visible native device preview target metadata without worker availability, queue, or health fields.
     * List device preview targets
     */
    public getDevicePreviewTargets(options?: Configuration): Promise<DevicePreviewNativeTargetListDto> {
        const result = this.api.getDevicePreviewTargets(options);
        return result.toPromise();
    }

    /**
     * Move device preview runs to a folder or Unfiled
     * @param moveDevicePreviewRunsOptions 
     */
    public moveDevicePreviewRuns(moveDevicePreviewRunsOptions: MoveDevicePreviewRunsOptions, options?: Configuration): Promise<MoveDevicePreviewRunsResult> {
        const result = this.api.moveDevicePreviewRuns(moveDevicePreviewRunsOptions, options);
        return result.toPromise();
    }

    /**
     * Set failedOnly=false to rerun a successful target. Successful targets consume their configured credit cost again.
     * Rerun selected device preview targets in the same run
     * @param runId 
     * @param rerunDevicePreviewTargetsOptions 
     */
    public rerunDevicePreviewTargets(runId: string, rerunDevicePreviewTargetsOptions: RerunDevicePreviewTargetsOptions, options?: Configuration): Promise<RerunDevicePreviewTargetsResult> {
        const result = this.api.rerunDevicePreviewTargets(runId, rerunDevicePreviewTargetsOptions, options);
        return result.toPromise();
    }

    /**
     * Update account device preview email subdomain
     * @param updateDevicePreviewIngestDomainOptions 
     */
    public updateDevicePreviewEmailDomainSubdomain(updateDevicePreviewIngestDomainOptions: UpdateDevicePreviewIngestDomainOptions, options?: Configuration): Promise<DevicePreviewAccountSettingsDto> {
        const result = this.api.updateDevicePreviewEmailDomainSubdomain(updateDevicePreviewIngestDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Update device preview feedback
     * @param feedbackId 
     * @param updateDevicePreviewFeedbackOptions 
     */
    public updateDevicePreviewFeedback(feedbackId: string, updateDevicePreviewFeedbackOptions: UpdateDevicePreviewFeedbackOptions, options?: Configuration): Promise<DevicePreviewFeedbackDto> {
        const result = this.api.updateDevicePreviewFeedback(feedbackId, updateDevicePreviewFeedbackOptions, options);
        return result.toPromise();
    }

    /**
     * Rename or move a device preview folder
     * @param folderId 
     * @param updateDevicePreviewFolderOptions 
     */
    public updateDevicePreviewFolder(folderId: string, updateDevicePreviewFolderOptions: UpdateDevicePreviewFolderOptions, options?: Configuration): Promise<DevicePreviewFolderDto> {
        const result = this.api.updateDevicePreviewFolder(folderId, updateDevicePreviewFolderOptions, options);
        return result.toPromise();
    }

    /**
     * Update a device preview profile
     * @param profileId 
     * @param updateDevicePreviewProfileOptions 
     */
    public updateDevicePreviewProfile(profileId: string, updateDevicePreviewProfileOptions: UpdateDevicePreviewProfileOptions, options?: Configuration): Promise<DevicePreviewProfileDto> {
        const result = this.api.updateDevicePreviewProfile(profileId, updateDevicePreviewProfileOptions, options);
        return result.toPromise();
    }

    /**
     * Wait for device preview runs created from account email domains
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     * @param hydrateThumbnail Hydrate each returned run with a nullable primary screenshot thumbnail URL.
     */
    public waitForDevicePreviewEmailRuns(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, timeoutMillis?: number, pollIntervalMillis?: number, hydrateThumbnail?: boolean, options?: Configuration): Promise<DevicePreviewIngestRunWaitResult> {
        const result = this.api.waitForDevicePreviewEmailRuns(since, emailDomainId, profileId, localPart, limit, timeoutMillis, pollIntervalMillis, hydrateThumbnail, options);
        return result.toPromise();
    }

    /**
     * Wait for received device preview email submissions
     * @param since 
     * @param emailDomainId 
     * @param profileId 
     * @param localPart 
     * @param limit 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     * @param recipientEmailAddress 
     */
    public waitForDevicePreviewEmailSubmissions(since: Date, emailDomainId?: string, profileId?: string, localPart?: string, limit?: number, timeoutMillis?: number, pollIntervalMillis?: number, recipientEmailAddress?: string, options?: Configuration): Promise<DevicePreviewEmailSubmissionWaitResult> {
        const result = this.api.waitForDevicePreviewEmailSubmissions(since, emailDomainId, profileId, localPart, limit, timeoutMillis, pollIntervalMillis, recipientEmailAddress, options);
        return result.toPromise();
    }

    /**
     * Wait for device preview run to complete
     * @param runId 
     * @param timeoutMillis 
     * @param pollIntervalMillis 
     */
    public waitForDevicePreviewRun(runId: string, timeoutMillis?: number, pollIntervalMillis?: number, options?: Configuration): Promise<DevicePreviewRunWaitResult> {
        const result = this.api.waitForDevicePreviewRun(runId, timeoutMillis, pollIntervalMillis, options);
        return result.toPromise();
    }


}



import { ObservableDomainControllerApi } from './ObservableAPI.ts';

import { DomainControllerApiRequestFactory, DomainControllerApiResponseProcessor} from "../apis/DomainControllerApi.ts";
export class PromiseDomainControllerApi {
    private api: ObservableDomainControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainControllerApiRequestFactory,
        responseProcessor?: DomainControllerApiResponseProcessor
    ) {
        this.api = new ObservableDomainControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add a catch all inbox to a domain so that any emails sent to it that cannot be matched will be sent to the catch all inbox generated
     * Add catch all wild card inbox to domain
     * @param id 
     */
    public addDomainWildcardCatchAll(id: string, options?: Configuration): Promise<DomainDto> {
        const result = this.api.addDomainWildcardCatchAll(id, options);
        return result.toPromise();
    }

    /**
     * Link a domain that you own with MailSlurp so you can create email addresses using it. Endpoint returns DNS records used for validation. You must add these verification records to your host provider's DNS setup to verify the domain.
     * Create Domain
     * @param createDomainOptions 
     */
    public createDomain(createDomainOptions: CreateDomainOptions, options?: Configuration): Promise<DomainDto> {
        const result = this.api.createDomain(createDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a domain. This will disable any existing inboxes that use this domain.
     * Delete a domain
     * @param id 
     */
    public deleteDomain(id: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.deleteDomain(id, options);
        return result.toPromise();
    }

    /**
     * List all domains available for use with email address creation, including account-region and create/send enablement flags.
     * Get all usable domains with account region status
     * @param inboxType 
     */
    public getAvailableDomainRegions(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Promise<DomainRegionGroupsDto> {
        const result = this.api.getAvailableDomainRegions(inboxType, options);
        return result.toPromise();
    }

    /**
     * List all domains available for use with email address creation
     * Get all usable domains
     * @param inboxType 
     */
    public getAvailableDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Promise<DomainGroupsDto> {
        const result = this.api.getAvailableDomains(inboxType, options);
        return result.toPromise();
    }

    /**
     * Returns domain verification status and tokens for a given domain
     * Get a domain
     * @param id 
     * @param checkForErrors 
     */
    public getDomain(id: string, checkForErrors?: boolean, options?: Configuration): Promise<DomainDto> {
        const result = this.api.getDomain(id, checkForErrors, options);
        return result.toPromise();
    }

    /**
     * List recent health events for a custom domain using MailSlurp domain-health terminology.
     * Get domain health events
     * @param id 
     */
    public getDomainHealthEvents(id: string, options?: Configuration): Promise<Array<DomainHealthEventDto>> {
        const result = this.api.getDomainHealthEvents(id, options);
        return result.toPromise();
    }

    /**
     * List domain issues for domains you have created
     * Get domain issues
     */
    public getDomainIssues(options?: Configuration): Promise<DomainIssuesDto> {
        const result = this.api.getDomainIssues(options);
        return result.toPromise();
    }

    /**
     * Get the catch all inbox for a domain for missed emails
     * Get catch all wild card inbox for domain
     * @param id 
     */
    public getDomainWildcardCatchAllInbox(id: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.getDomainWildcardCatchAllInbox(id, options);
        return result.toPromise();
    }

    /**
     * List all custom domains you have created
     * Get domains
     */
    public getDomains(options?: Configuration): Promise<Array<DomainPreview>> {
        const result = this.api.getDomains(options);
        return result.toPromise();
    }

    /**
     * List all MailSlurp domains used with non-custom email addresses
     * Get MailSlurp domains
     * @param inboxType 
     */
    public getMailSlurpDomains(inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', options?: Configuration): Promise<DomainGroupsDto> {
        const result = this.api.getMailSlurpDomains(inboxType, options);
        return result.toPromise();
    }

    /**
     * Update values on a domain. Note you cannot change the domain name as it is immutable. Recreate the domain if you need to alter this.
     * Update a domain
     * @param id 
     * @param updateDomainOptions 
     */
    public updateDomain(id: string, updateDomainOptions: UpdateDomainOptions, options?: Configuration): Promise<DomainDto> {
        const result = this.api.updateDomain(id, updateDomainOptions, options);
        return result.toPromise();
    }


}



import { ObservableDomainMonitorControllerApi } from './ObservableAPI.ts';

import { DomainMonitorControllerApiRequestFactory, DomainMonitorControllerApiResponseProcessor} from "../apis/DomainMonitorControllerApi.ts";
export class PromiseDomainMonitorControllerApi {
    private api: ObservableDomainMonitorControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainMonitorControllerApiRequestFactory,
        responseProcessor?: DomainMonitorControllerApiResponseProcessor
    ) {
        this.api = new ObservableDomainMonitorControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Compare two monitor runs
     * @param monitorId 
     * @param runId 
     * @param otherRunId 
     */
    public compareDomainMonitorRuns(monitorId: string, runId: string, otherRunId: string, options?: Configuration): Promise<DomainMonitorRunComparisonDto> {
        const result = this.api.compareDomainMonitorRuns(monitorId, runId, otherRunId, options);
        return result.toPromise();
    }

    /**
     * Create domain monitor
     * @param createDomainMonitorOptions 
     */
    public createDomainMonitor(createDomainMonitorOptions: CreateDomainMonitorOptions, options?: Configuration): Promise<DomainMonitorDto> {
        const result = this.api.createDomainMonitor(createDomainMonitorOptions, options);
        return result.toPromise();
    }

    /**
     * Create alert sink for monitor
     * @param monitorId 
     * @param createDomainMonitorAlertSinkOptions 
     */
    public createDomainMonitorAlertSink(monitorId: string, createDomainMonitorAlertSinkOptions: CreateDomainMonitorAlertSinkOptions, options?: Configuration): Promise<DomainMonitorAlertSinkDto> {
        const result = this.api.createDomainMonitorAlertSink(monitorId, createDomainMonitorAlertSinkOptions, options);
        return result.toPromise();
    }

    /**
     * Create or rotate domain monitor email verification address
     * @param monitorId 
     */
    public createDomainMonitorEmailVerificationAddress(monitorId: string, options?: Configuration): Promise<DomainMonitorEmailVerificationDto> {
        const result = this.api.createDomainMonitorEmailVerificationAddress(monitorId, options);
        return result.toPromise();
    }

    /**
     * Delete domain monitor
     * @param monitorId 
     */
    public deleteDomainMonitor(monitorId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteDomainMonitor(monitorId, options);
        return result.toPromise();
    }

    /**
     * Delete monitor alert sink
     * @param monitorId 
     * @param sinkId 
     */
    public deleteDomainMonitorAlertSink(monitorId: string, sinkId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteDomainMonitorAlertSink(monitorId, sinkId, options);
        return result.toPromise();
    }

    /**
     * Delete domain monitor observed authentication sample
     * @param monitorId 
     * @param sampleId 
     */
    public deleteDomainMonitorObservedAuthSample(monitorId: string, sampleId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteDomainMonitorObservedAuthSample(monitorId, sampleId, options);
        return result.toPromise();
    }

    /**
     * Export one row per domain monitor check, including run-level score metadata and per-check pass, fail, or not-checked status.
     * Export monitor run results as CSV
     * @param monitorId 
     * @param runId 
     */
    public exportDomainMonitorRunResults(monitorId: string, runId: string, options?: Configuration): Promise<void> {
        const result = this.api.exportDomainMonitorRunResults(monitorId, runId, options);
        return result.toPromise();
    }

    /**
     * Get domain monitor
     * @param monitorId 
     */
    public getDomainMonitor(monitorId: string, options?: Configuration): Promise<DomainMonitorDto> {
        const result = this.api.getDomainMonitor(monitorId, options);
        return result.toPromise();
    }

    /**
     * List alert sinks for monitor
     * @param monitorId 
     */
    public getDomainMonitorAlertSinks(monitorId: string, options?: Configuration): Promise<Array<DomainMonitorAlertSinkDto>> {
        const result = this.api.getDomainMonitorAlertSinks(monitorId, options);
        return result.toPromise();
    }

    /**
     * Get current auth stack for monitor domain
     * @param monitorId 
     * @param dkimSelector 
     */
    public getDomainMonitorAuthStack(monitorId: string, dkimSelector?: string, options?: Configuration): Promise<CheckEmailAuthStackResults> {
        const result = this.api.getDomainMonitorAuthStack(monitorId, dkimSelector, options);
        return result.toPromise();
    }

    /**
     * Get domain monitor email verification setup
     * @param monitorId 
     */
    public getDomainMonitorEmailVerification(monitorId: string, options?: Configuration): Promise<DomainMonitorEmailVerificationDto> {
        const result = this.api.getDomainMonitorEmailVerification(monitorId, options);
        return result.toPromise();
    }

    /**
     * Get monitor insights
     * @param monitorId 
     * @param since 
     * @param before 
     */
    public getDomainMonitorInsights(monitorId: string, since?: Date, before?: Date, options?: Configuration): Promise<DomainMonitorInsightsDto> {
        const result = this.api.getDomainMonitorInsights(monitorId, since, before, options);
        return result.toPromise();
    }

    /**
     * List domain monitor observed authentication samples
     * @param monitorId 
     */
    public getDomainMonitorObservedAuthSamples(monitorId: string, options?: Configuration): Promise<Array<DomainMonitorObservedAuthSampleDto>> {
        const result = this.api.getDomainMonitorObservedAuthSamples(monitorId, options);
        return result.toPromise();
    }

    /**
     * Get monitor run
     * @param monitorId 
     * @param runId 
     */
    public getDomainMonitorRun(monitorId: string, runId: string, options?: Configuration): Promise<DomainMonitorRunDto> {
        const result = this.api.getDomainMonitorRun(monitorId, runId, options);
        return result.toPromise();
    }

    /**
     * List monitor runs
     * @param monitorId 
     * @param since 
     * @param before 
     * @param status 
     * @param limit 
     */
    public getDomainMonitorRuns(monitorId: string, since?: Date, before?: Date, status?: 'HEALTHY' | 'DEGRADED' | 'CRITICAL' | 'FAILED', limit?: number, options?: Configuration): Promise<Array<DomainMonitorRunDto>> {
        const result = this.api.getDomainMonitorRuns(monitorId, since, before, status, limit, options);
        return result.toPromise();
    }

    /**
     * Get monitor trend series
     * @param monitorId 
     * @param since 
     * @param before 
     * @param bucket 
     */
    public getDomainMonitorSeries(monitorId: string, since?: Date, before?: Date, bucket?: 'HOUR' | 'DAY', options?: Configuration): Promise<DomainMonitorSeriesDto> {
        const result = this.api.getDomainMonitorSeries(monitorId, since, before, bucket, options);
        return result.toPromise();
    }

    /**
     * Get domain monitor summary
     * @param monitorId 
     * @param dkimSelector 
     */
    public getDomainMonitorSummary(monitorId: string, dkimSelector?: string, options?: Configuration): Promise<DomainMonitorSummaryDto> {
        const result = this.api.getDomainMonitorSummary(monitorId, dkimSelector, options);
        return result.toPromise();
    }

    /**
     * List domain monitors
     */
    public getDomainMonitors(options?: Configuration): Promise<Array<DomainMonitorDto>> {
        const result = this.api.getDomainMonitors(options);
        return result.toPromise();
    }

    /**
     * Run monitor now
     * @param monitorId 
     */
    public runDomainMonitorNow(monitorId: string, options?: Configuration): Promise<DomainMonitorRunNowResult> {
        const result = this.api.runDomainMonitorNow(monitorId, options);
        return result.toPromise();
    }

    /**
     * Run due monitors for user
     * @param maxRuns 
     */
    public runDueDomainMonitors(maxRuns?: number, options?: Configuration): Promise<DomainMonitorRunDueResult> {
        const result = this.api.runDueDomainMonitors(maxRuns, options);
        return result.toPromise();
    }

    /**
     * Update domain monitor
     * @param monitorId 
     * @param updateDomainMonitorOptions 
     */
    public updateDomainMonitor(monitorId: string, updateDomainMonitorOptions: UpdateDomainMonitorOptions, options?: Configuration): Promise<DomainMonitorDto> {
        const result = this.api.updateDomainMonitor(monitorId, updateDomainMonitorOptions, options);
        return result.toPromise();
    }


}



import { ObservableDomainMonitorPostmasterControllerApi } from './ObservableAPI.ts';

import { DomainMonitorPostmasterControllerApiRequestFactory, DomainMonitorPostmasterControllerApiResponseProcessor} from "../apis/DomainMonitorPostmasterControllerApi.ts";
export class PromiseDomainMonitorPostmasterControllerApi {
    private api: ObservableDomainMonitorPostmasterControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainMonitorPostmasterControllerApiRequestFactory,
        responseProcessor?: DomainMonitorPostmasterControllerApiResponseProcessor
    ) {
        this.api = new ObservableDomainMonitorPostmasterControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Postmaster OAuth connection URL
     * @param createPostmasterConnectionOptions 
     */
    public createDomainMonitorPostmasterConnection(createPostmasterConnectionOptions: CreatePostmasterConnectionOptions, options?: Configuration): Promise<CreatePostmasterConnectionResult> {
        const result = this.api.createDomainMonitorPostmasterConnection(createPostmasterConnectionOptions, options);
        return result.toPromise();
    }

    /**
     * Disconnect Postmaster OAuth
     */
    public deleteDomainMonitorPostmasterConnection(options?: Configuration): Promise<void> {
        const result = this.api.deleteDomainMonitorPostmasterConnection(options);
        return result.toPromise();
    }

    /**
     * Exchange Postmaster OAuth authorization code
     * @param exchangePostmasterCodeOptions 
     */
    public exchangeDomainMonitorPostmasterCode(exchangePostmasterCodeOptions: ExchangePostmasterCodeOptions, options?: Configuration): Promise<PostmasterConnectionDto> {
        const result = this.api.exchangeDomainMonitorPostmasterCode(exchangePostmasterCodeOptions, options);
        return result.toPromise();
    }

    /**
     * Get Postmaster connection status
     */
    public getDomainMonitorPostmasterConnection(options?: Configuration): Promise<PostmasterConnectionStatusDto> {
        const result = this.api.getDomainMonitorPostmasterConnection(options);
        return result.toPromise();
    }

    /**
     * List local Postmaster domain snapshots
     */
    public getDomainMonitorPostmasterDomains(options?: Configuration): Promise<Array<PostmasterDomainDto>> {
        const result = this.api.getDomainMonitorPostmasterDomains(options);
        return result.toPromise();
    }

    /**
     * Get local Postmaster traffic stats
     * @param domain 
     * @param startDate 
     * @param endDate 
     */
    public getDomainMonitorPostmasterTrafficStats(domain: string, startDate?: string, endDate?: string, options?: Configuration): Promise<PostmasterTrafficStatsListDto> {
        const result = this.api.getDomainMonitorPostmasterTrafficStats(domain, startDate, endDate, options);
        return result.toPromise();
    }

    /**
     * Sync Postmaster domains
     */
    public syncDomainMonitorPostmasterDomains(options?: Configuration): Promise<Array<PostmasterDomainDto>> {
        const result = this.api.syncDomainMonitorPostmasterDomains(options);
        return result.toPromise();
    }

    /**
     * Sync Postmaster traffic stats
     * @param domain 
     * @param startDate 
     * @param endDate 
     */
    public syncDomainMonitorPostmasterTrafficStats(domain: string, startDate?: string, endDate?: string, options?: Configuration): Promise<PostmasterTrafficStatsListDto> {
        const result = this.api.syncDomainMonitorPostmasterTrafficStats(domain, startDate, endDate, options);
        return result.toPromise();
    }


}



import { ObservableEmailAuditControllerApi } from './ObservableAPI.ts';

import { EmailAuditControllerApiRequestFactory, EmailAuditControllerApiResponseProcessor} from "../apis/EmailAuditControllerApi.ts";
export class PromiseEmailAuditControllerApi {
    private api: ObservableEmailAuditControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailAuditControllerApiRequestFactory,
        responseProcessor?: EmailAuditControllerApiResponseProcessor
    ) {
        this.api = new ObservableEmailAuditControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Compare two email audits
     * @param auditId 
     * @param otherAuditId 
     */
    public compareEmailAudits(auditId: string, otherAuditId: string, options?: Configuration): Promise<EmailAuditComparisonDto> {
        const result = this.api.compareEmailAudits(auditId, otherAuditId, options);
        return result.toPromise();
    }

    /**
     * Create email audit
     * @param createEmailAuditOptions 
     */
    public createEmailAudit(createEmailAuditOptions: CreateEmailAuditOptions, options?: Configuration): Promise<EmailAuditDto> {
        const result = this.api.createEmailAudit(createEmailAuditOptions, options);
        return result.toPromise();
    }

    /**
     * Delete email audit
     * @param auditId 
     */
    public deleteEmailAudit(auditId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailAudit(auditId, options);
        return result.toPromise();
    }

    /**
     * Get email audit
     * @param auditId 
     */
    public getEmailAudit(auditId: string, options?: Configuration): Promise<EmailAuditDto> {
        const result = this.api.getEmailAudit(auditId, options);
        return result.toPromise();
    }

    /**
     * List email audits
     * @param emailId 
     * @param since 
     * @param before 
     * @param limit 
     */
    public getEmailAudits(emailId?: string, since?: Date, before?: Date, limit?: number, options?: Configuration): Promise<Array<EmailAuditDto>> {
        const result = this.api.getEmailAudits(emailId, since, before, limit, options);
        return result.toPromise();
    }


}



import { ObservableEmailControllerApi } from './ObservableAPI.ts';

import { EmailControllerApiRequestFactory, EmailControllerApiResponseProcessor} from "../apis/EmailControllerApi.ts";
export class PromiseEmailControllerApi {
    private api: ObservableEmailControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailControllerApiRequestFactory,
        responseProcessor?: EmailControllerApiResponseProcessor
    ) {
        this.api = new ObservableEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Applies RFC3501 IMAP flag operations on a message. Current implementation supports read/unread semantics via the `\\\\Seen` flag only.
     * Set IMAP flags associated with a message. Only supports '\\Seen' flag.
     * @param emailId 
     * @param imapFlagOperationOptions 
     */
    public applyImapFlagOperation(emailId: string, imapFlagOperationOptions: ImapFlagOperationOptions, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.applyImapFlagOperation(emailId, imapFlagOperationOptions, options);
        return result.toPromise();
    }

    /**
     * Validates sender/inbox context and recipient eligibility before attempting a send. Useful for preflight checks in UI or test workflows.
     * Check whether an email send would be accepted
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public canSend(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<CanSendEmailResults> {
        const result = this.api.canSend(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Runs the same message-level audit bundle used by the email audit dashboard in one request. Combines content checks, HTML validation, compatibility analysis, and reputation verdict rollup when available.
     * Run aggregate email audit for a stored email
     * @param emailId 
     */
    public checkEmailAudit1(emailId: string, options?: Configuration): Promise<EmailAuditAnalysisResult> {
        const result = this.api.checkEmailAudit1(emailId, options);
        return result.toPromise();
    }

    /**
     * Runs content quality checks against hydrated email body content. This endpoint performs outbound HTTP checks for linked resources, so avoid use with sensitive or stateful URLs.
     * Check email body for broken links, images, and spelling issues
     * @param emailId 
     */
    public checkEmailBody(emailId: string, options?: Configuration): Promise<CheckEmailBodyResults> {
        const result = this.api.checkEmailBody(emailId, options);
        return result.toPromise();
    }

    /**
     * Detects HTML/CSS features in the target email body and reports compatibility across major email clients and devices.
     * Check client support for features used in a stored email body
     * @param emailId 
     */
    public checkEmailBodyFeatureSupport(emailId: string, options?: Configuration): Promise<CheckEmailBodyFeatureSupportResults> {
        const result = this.api.checkEmailBodyFeatureSupport(emailId, options);
        return result.toPromise();
    }

    /**
     * Evaluates HTML/CSS features in the supplied body and reports support coverage across major email clients and platforms.
     * Check email-client support for a provided HTML body
     * @param checkEmailClientSupportOptions 
     */
    public checkEmailClientSupport(checkEmailClientSupportOptions: CheckEmailClientSupportOptions, options?: Configuration): Promise<CheckEmailClientSupportResults> {
        const result = this.api.checkEmailClientSupport(checkEmailClientSupportOptions, options);
        return result.toPromise();
    }

    /**
     * Runs the aggregate audit bundle for the target email and stores the resulting audit record for later review and history tracking.
     * Persist aggregate email audit for a stored email
     * @param emailId 
     */
    public createEmailAuditForEmail(emailId: string, options?: Configuration): Promise<EmailAuditDto> {
        const result = this.api.createEmailAuditForEmail(emailId, options);
        return result.toPromise();
    }

    /**
     * Create a saved email draft using the same SendEmailOptions shape used for sending. Provide an inboxId query parameter or sendOptions.inboxId to choose the inbox the draft will send from. Draft creation does not send email and does not create a new inbox.
     * Create an email draft
     * @param sendEmailOptions 
     * @param inboxId ID of the inbox you want to save the draft against
     */
    public createEmailDraft(sendEmailOptions: SendEmailOptions, inboxId?: string, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.createEmailDraft(sendEmailOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails for the authenticated account context. This operation is destructive and cannot be undone.
     * Delete all emails in all inboxes.
     * @param createdAtSince Optional minimum email created-at timestamp to delete from.
     * @param createdAtBefore Optional maximum email created-at timestamp to delete through.
     */
    public deleteAllEmails(createdAtSince?: Date, createdAtBefore?: Date, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllEmails(createdAtSince, createdAtBefore, options);
        return result.toPromise();
    }

    /**
     * Deletes a single email from account scope. Operation is destructive and not reversible.
     * Delete an email
     * @param emailId ID of email to delete
     */
    public deleteEmail(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmail(emailId, options);
        return result.toPromise();
    }

    /**
     * Delete a saved email draft without sending it.
     * Delete an email draft
     * @param draftId ID of draft
     */
    public deleteEmailDraft(draftId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteEmailDraft(draftId, options);
        return result.toPromise();
    }

    /**
     * Returns attachment bytes by attachment ID. Use attachment IDs from email payloads or attachment listing endpoints.
     * Get email attachment bytes. Returned as `octet-stream` with content type header. If you have trouble with byte responses try the `downloadAttachmentBase64` response endpoints and convert the base 64 encoded content to a file or string.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     * @param apiKey Can pass apiKey in url for this request if you wish to download the file in a browser. Content type will be set to original content type of the attachment file. This is so that browsers can download the file correctly.
     */
    public downloadAttachment(emailId: string, attachmentId: string, apiKey?: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadAttachment(emailId, attachmentId, apiKey, options);
        return result.toPromise();
    }

    /**
     * Returns attachment payload as base64 in JSON. Useful for clients that cannot reliably consume binary streaming responses.
     * Get email attachment as base64 encoded string as an alternative to binary responses. Decode the `base64FileContents` as a `utf-8` encoded string or array of bytes depending on the `contentType`.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public downloadAttachmentBase64(emailId: string, attachmentId: string, options?: Configuration): Promise<DownloadAttachmentDto> {
        const result = this.api.downloadAttachmentBase64(emailId, attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns hydrated email body text as a string with content type aligned to the underlying body format.
     * Get email body as string. Returned as `plain/text` with content type header.
     * @param emailId ID of email
     */
    public downloadBody(emailId: string, options?: Configuration): Promise<string> {
        const result = this.api.downloadBody(emailId, options);
        return result.toPromise();
    }

    /**
     * Streams hydrated email body bytes with content type derived from the message body format.
     * Get email body in bytes. Returned as `octet-stream` with content type header.
     * @param emailId ID of email
     */
    public downloadBodyBytes(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadBodyBytes(emailId, options);
        return result.toPromise();
    }

    /**
     * Forwards an existing email to new recipients. Uses the owning inbox context unless overridden by allowed sender options.
     * Forward email to recipients
     * @param emailId ID of email
     * @param forwardEmailOptions 
     */
    public forwardEmail(emailId: string, forwardEmailOptions: ForwardEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.forwardEmail(emailId, forwardEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Returns metadata for a specific attachment ID (name, content type, and size fields).
     * Get email attachment metadata. This is the `contentType` and `contentLength` of an attachment. To get the individual attachments  use the `downloadAttachment` methods.
     * @param emailId ID of email
     * @param attachmentId ID of attachment
     */
    public getAttachmentMetaData(emailId: string, attachmentId: string, options?: Configuration): Promise<AttachmentMetaData> {
        const result = this.api.getAttachmentMetaData(emailId, attachmentId, options);
        return result.toPromise();
    }

    /**
     * Returns parsed email content including headers and body fields. Accessing hydrated content may mark the email as read depending on read-state rules.
     * Get hydrated email (headers and body)
     * @param emailId 
     */
    public getEmail(emailId: string, options?: Configuration): Promise<Email> {
        const result = this.api.getEmail(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns metadata for all attachment IDs associated with the email (name, content type, size, and IDs).
     * List attachment metadata for an email
     * @param emailId ID of email
     */
    public getEmailAttachments(emailId: string, options?: Configuration): Promise<Array<AttachmentMetaData>> {
        const result = this.api.getEmailAttachments(emailId, options);
        return result.toPromise();
    }

    /**
     * Extracts one-time passcodes and similar tokens from email content using the selected extraction method and fallback options.
     * Extract verification codes from an email
     * @param emailId ID of email to extract codes from
     * @param extractCodesOptions 
     */
    public getEmailCodes(emailId: string, extractCodesOptions?: ExtractCodesOptions, options?: Configuration): Promise<ExtractCodesResult> {
        const result = this.api.getEmailCodes(emailId, extractCodesOptions, options);
        return result.toPromise();
    }

    /**
     * Executes a Java regex pattern over hydrated email body text and returns the full match plus capture groups. Pattern syntax follows Java `Pattern` rules.
     * Run regex against hydrated email body and return matches
     * @param emailId ID of email to match against
     * @param contentMatchOptions 
     */
    public getEmailContentMatch(emailId: string, contentMatchOptions: ContentMatchOptions, options?: Configuration): Promise<EmailContentMatchResult> {
        const result = this.api.getEmailContentMatch(emailId, contentMatchOptions, options);
        return result.toPromise();
    }

    /**
     * Extracts one MIME body part by `contentType` and optional `index`, returned in a structured DTO with metadata.
     * Get email content part by content type
     * @param emailId ID of email to match against
     * @param contentType Content type
     * @param strict Strict content type match
     * @param index Index of content type part if multiple
     */
    public getEmailContentPart(emailId: string, contentType: string, strict?: boolean, index?: number, options?: Configuration): Promise<EmailContentPartResult> {
        const result = this.api.getEmailContentPart(emailId, contentType, strict, index, options);
        return result.toPromise();
    }

    /**
     * Extracts one MIME body part by `contentType` and optional `index`, and returns raw content with matching response content type when valid.
     * Get multipart content part as raw response
     * @param emailId ID of email to match against
     * @param contentType Content type
     * @param strict Strict content type match
     * @param index Index of content type part if multiple. Starts from 0 and applies to the result list after selecting for your content type. Content type parts are sorted by order found in original MIME message.
     */
    public getEmailContentPartContent(emailId: string, contentType: string, strict?: boolean, index?: number, options?: Configuration): Promise<string> {
        const result = this.api.getEmailContentPartContent(emailId, contentType, strict, index, options);
        return result.toPromise();
    }

    /**
     * Returns total email count for the authenticated user, or count scoped to a specific inbox when `inboxId` is provided.
     * Get email count
     * @param inboxId 
     */
    public getEmailCount(inboxId?: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getEmailCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a saved email draft including the full SendEmailOptions payload.
     * Get an email draft
     * @param draftId ID of draft
     */
    public getEmailDraft(draftId: string, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.getEmailDraft(draftId, options);
        return result.toPromise();
    }

    /**
     * List saved email drafts for the authenticated user, optionally filtered by inbox.
     * List email drafts
     * @param inboxId Optional inbox filter
     * @param page Optional page index in draft pagination
     * @param size Optional page size in draft pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getEmailDrafts(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageEmailDraftProjection> {
        const result = this.api.getEmailDrafts(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Returns hydrated HTML body directly with `text/html` content type. Supports temporary access/browser usage and optional CID replacement for inline asset rendering.
     * Get hydrated email HTML for browser rendering
     * @param emailId 
     * @param replaceCidImages 
     */
    public getEmailHTML(emailId: string, replaceCidImages?: boolean, options?: Configuration): Promise<string> {
        const result = this.api.getEmailHTML(emailId, replaceCidImages, options);
        return result.toPromise();
    }

    /**
     * Returns hydrated HTML body and subject in a JSON DTO. Useful for API clients that need structured response payloads instead of raw HTML responses.
     * Get hydrated email HTML wrapped in JSON
     * @param emailId 
     * @param replaceCidImages 
     */
    public getEmailHTMLJson(emailId: string, replaceCidImages?: boolean, options?: Configuration): Promise<EmailHtmlDto> {
        const result = this.api.getEmailHTMLJson(emailId, replaceCidImages, options);
        return result.toPromise();
    }

    /**
     * Applies a JSoup/CSS selector to hydrated HTML email body and returns matching text lines.
     * Query hydrated HTML body and return matching text lines
     * @param emailId ID of email to perform HTML query on
     * @param htmlSelector HTML selector to search for. Uses JQuery/JSoup/CSS style selector like &#39;.my-div&#39; to match content. See https://jsoup.org/apidocs/org/jsoup/select/Selector.html for more information.
     */
    public getEmailHTMLQuery(emailId: string, htmlSelector: string, options?: Configuration): Promise<EmailTextLinesResult> {
        const result = this.api.getEmailHTMLQuery(emailId, htmlSelector, options);
        return result.toPromise();
    }

    /**
     * Parses HTML content and extracts link URLs (`href`). For non-HTML emails this endpoint returns a validation error.
     * Extract links from an email HTML body
     * @param emailId ID of email to fetch text for
     * @param selector Optional HTML query selector for links
     */
    public getEmailLinks(emailId: string, selector?: string, options?: Configuration): Promise<EmailLinksResult> {
        const result = this.api.getEmailLinks(emailId, selector, options);
        return result.toPromise();
    }

    /**
     * Returns a server-normalized preview document with active content removed and restrictive browser metadata. This representation can normalize malformed email layout and is deprecated for fidelity-sensitive rendering. Fetch the original HTML source and apply link hardening inside an opaque-origin browser sandbox instead.
     * Get deprecated server-normalized email preview HTML
     * @param emailId 
     * @param replaceCidImages 
     * @param linkBehavior 
     */
    public getEmailPreviewHTML(emailId: string, replaceCidImages?: boolean, linkBehavior?: 'PRESERVE' | 'NEW_TAB' | 'DISABLED', options?: Configuration): Promise<EmailPreviewHtmlDto> {
        const result = this.api.getEmailPreviewHTML(emailId, replaceCidImages, linkBehavior, options);
        return result.toPromise();
    }

    /**
     * Returns precomputed URLs for preview and raw message access for the specified email.
     * Get email URLs for viewing in browser or downloading
     * @param emailId 
     */
    public getEmailPreviewURLs(emailId: string, options?: Configuration): Promise<EmailPreviewUrls> {
        const result = this.api.getEmailPreviewURLs(emailId, options);
        return result.toPromise();
    }

    /**
     * Renders the email in a browser engine and returns PNG data as base64. Useful for APIs and dashboards that cannot easily stream binary responses.
     * Take a screenshot of an email in a browser and return base64 encoded string
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBase64(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Promise<EmailScreenshotResult> {
        const result = this.api.getEmailScreenshotAsBase64(emailId, getEmailScreenshotOptions, options);
        return result.toPromise();
    }

    /**
     * Renders the email in a browser engine and returns PNG bytes. Intended for visual QA and rendering regression checks.
     * Take a screenshot of an email in a browser
     * @param emailId 
     * @param getEmailScreenshotOptions 
     */
    public getEmailScreenshotAsBinary(emailId: string, getEmailScreenshotOptions: GetEmailScreenshotOptions, options?: Configuration): Promise<void> {
        const result = this.api.getEmailScreenshotAsBinary(emailId, getEmailScreenshotOptions, options);
        return result.toPromise();
    }

    /**
     * Attempts to parse a sender signature block from an email body. Uses raw MIME content parts when possible and falls back to hydrated body parsing. This is heuristic and may not be accurate for all email clients or formats.
     * Extract signature from an inbound email
     * @param emailId ID of email to extract signature from
     */
    public getEmailSignature(emailId: string, options?: Configuration): Promise<EmailSignatureParseResult> {
        const result = this.api.getEmailSignature(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns lightweight metadata and headers for an email. Use `getEmail` for hydrated body content or `getRawEmail` for original SMTP content.
     * Get email summary (headers/metadata only)
     * @param emailId 
     * @param decode Deprecated and ignored. Retained for backwards compatibility.
     */
    public getEmailSummary(emailId: string, decode?: boolean, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.getEmailSummary(emailId, decode, options);
        return result.toPromise();
    }

    /**
     * Converts email body content to line-based plain text with optional HTML entity decoding and custom line separator.
     * Extract normalized text lines from email body
     * @param emailId ID of email to fetch text for
     * @param decodeHtmlEntities Decode HTML entities
     * @param lineSeparator Line separator character
     */
    public getEmailTextLines(emailId: string, decodeHtmlEntities?: boolean, lineSeparator?: string, options?: Configuration): Promise<EmailTextLinesResult> {
        const result = this.api.getEmailTextLines(emailId, decodeHtmlEntities, lineSeparator, options);
        return result.toPromise();
    }

    /**
     * Returns thread metadata built from RFC 5322 `Message-ID`, `In-Reply-To`, and `References` headers. Use `getEmailThreadItems` to fetch the thread messages.
     * Get email thread metadata by thread ID
     * @param threadId 
     */
    public getEmailThread(threadId: string, options?: Configuration): Promise<EmailThreadDto> {
        const result = this.api.getEmailThread(threadId, options);
        return result.toPromise();
    }

    /**
     * Returns all messages in a thread ordered by `createdAt` using the requested sort direction.
     * Get messages in a specific email thread
     * @param threadId 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getEmailThreadItems(threadId: string, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<EmailThreadItemsDto> {
        const result = this.api.getEmailThreadItems(threadId, sort, options);
        return result.toPromise();
    }

    /**
     * Lists conversation threads inferred from `Message-ID`, `In-Reply-To`, and `References`. Supports filtering by inbox, search text, and time range.
     * List email threads in paginated form
     * @param htmlSelector Optional inbox filter. Query parameter name is &#x60;htmlSelector&#x60; for legacy compatibility.
     * @param inboxId Optional inbox filter.
     * @param page Optional page index in email thread pagination
     * @param size Optional page size in email thread pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter search filter for email threads.
     * @param since Optional filter email threads created since time
     * @param before Optional filter emails threads created before given date time
     */
    public getEmailThreads(htmlSelector?: string, inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageEmailThreadProjection> {
        const result = this.api.getEmailThreads(htmlSelector, inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Offset-style pagination endpoint for listing emails across inboxes. Supports inbox filters, unread-only, search, date boundaries, favourites, connector sync, plus-address filtering, and explicit include IDs.
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Matches email ID, inbox ID, sender address, subject, receiving inbox email address, receiving plus-address full address, or plus-address suffix. Pasted email address tokens are normalized before matching.
     * @param since Optional filter emails received after given date time
     * @param before Optional filter emails received before given date time
     * @param favourited Optional filter emails that are favourited
     * @param syncConnectors Sync connectors
     * @param plusAddressId Optional plus address ID filter
     * @param include Optional list of IDs to include in result
     */
    public getEmailsOffsetPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, favourited?: boolean, syncConnectors?: boolean, plusAddressId?: string, include?: Array<string>, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsOffsetPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, favourited, syncConnectors, plusAddressId, include, options);
        return result.toPromise();
    }

    /**
     * Primary paginated email listing endpoint. Returns emails across inboxes with support for inbox filters, unread-only, search, date boundaries, favourites, connector sync, and plus-address filtering.
     * Get all emails in all inboxes in paginated form. Email API list all.
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Matches email ID, inbox ID, sender address, subject, receiving inbox email address, receiving plus-address full address, or plus-address suffix. Pasted email address tokens are normalized before matching.
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     * @param syncConnectors Sync connectors
     * @param plusAddressId Optional plus address ID filter
     * @param favourited Optional filter emails that are favourited
     */
    public getEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, syncConnectors?: boolean, plusAddressId?: string, favourited?: boolean, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, syncConnectors, plusAddressId, favourited, options);
        return result.toPromise();
    }

    /**
     * Builds a Gravatar image URL from the provided email address and optional size. This endpoint does not fetch image bytes; it only returns the computed URL.
     * Get Gravatar URL for an email address
     * @param emailAddress 
     * @param size 
     */
    public getGravatarUrlForEmailAddress(emailAddress: string, size?: string, options?: Configuration): Promise<GravatarUrl> {
        const result = this.api.getGravatarUrlForEmailAddress(emailAddress, size, options);
        return result.toPromise();
    }

    /**
     * Returns the most recently received email across all inboxes or an optional subset of inbox IDs.
     * Get latest email in all inboxes. Most recently received.
     * @param inboxIds Optional set of inboxes to filter by. Only get the latest email from these inbox IDs. If not provided will search across all inboxes
     */
    public getLatestEmail(inboxIds?: Array<string>, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmail(inboxIds, options);
        return result.toPromise();
    }

    /**
     * Returns the newest email for the specified inbox ID. For polling/wait semantics use wait endpoints.
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     */
    public getLatestEmailInInbox1(inboxId: string, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox1(inboxId, options);
        return result.toPromise();
    }

    /**
     * Returns paginated emails visible through organization/team access. Supports inbox filtering, unread-only filtering, search, favourites, plus-address filtering, and optional connector sync.
     * List organization-visible emails
     * @param inboxId Optional inbox ids to filter by. Can be repeated. By default will use all inboxes belonging to your account.
     * @param page Optional page index in email list pagination
     * @param size Optional page size in email list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param unreadOnly Optional filter for unread emails only. All emails are considered unread until they are viewed in the dashboard or requested directly
     * @param searchFilter Optional search filter. Matches email ID, inbox ID, sender address, subject, receiving inbox email address, receiving plus-address full address, or plus-address suffix. Pasted email address tokens are normalized before matching.
     * @param since Optional filter emails received after given date time. If unset will use time 24hours prior to now.
     * @param before Optional filter emails received before given date time
     * @param syncConnectors Sync connectors
     * @param favourited Search only favorited emails
     * @param plusAddressId Optional plus address ID filter
     */
    public getOrganizationEmailsPaginated(inboxId?: Array<string>, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, searchFilter?: string, since?: Date, before?: Date, syncConnectors?: boolean, favourited?: boolean, plusAddressId?: string, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.getOrganizationEmailsPaginated(inboxId, page, size, sort, unreadOnly, searchFilter, since, before, syncConnectors, favourited, plusAddressId, options);
        return result.toPromise();
    }

    /**
     * Returns the original unparsed SMTP/MIME message as `text/plain`. Use JSON variant if your client expects JSON transport.
     * Get raw email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawEmailContents(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.getRawEmailContents(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns the original unparsed SMTP/MIME message wrapped in a JSON DTO for API clients that avoid plain-text stream responses.
     * Get raw email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawEmailJson(emailId: string, options?: Configuration): Promise<RawEmailJson> {
        const result = this.api.getRawEmailJson(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns unread email count. An email is considered read after dashboard/API retrieval depending on your read workflow.
     * Get unread email count
     * @param inboxId Inbox ID filter for unread count scope
     */
    public getUnreadEmailCount(inboxId?: string, options?: Configuration): Promise<UnreadCount> {
        const result = this.api.getUnreadEmailCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Sets read state for all emails, optionally scoped to one inbox. Use `read=false` to reset unread state in bulk.
     * Mark all emails as read or unread
     * @param read What value to assign to email read property. Default true.
     * @param inboxId Optional inbox ID filter
     */
    public markAllAsRead(read?: boolean, inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.markAllAsRead(read, inboxId, options);
        return result.toPromise();
    }

    /**
     * Sets read state for one email. Useful when implementing custom mailbox workflows that treat viewed messages as unread.
     * Mark an email as read or unread
     * @param emailId 
     * @param read What value to assign to email read property. Default true.
     */
    public markAsRead(emailId: string, read?: boolean, options?: Configuration): Promise<EmailPreview> {
        const result = this.api.markAsRead(emailId, read, options);
        return result.toPromise();
    }

    /**
     * Sends a reply using the original conversation context (subject/thread headers). Reply target resolution honors sender/reply-to semantics.
     * Reply to an email
     * @param emailId ID of the email that should be replied to
     * @param replyToEmailOptions 
     */
    public replyToEmail(emailId: string, replyToEmailOptions: ReplyToEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.replyToEmail(emailId, replyToEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Searches emails by email ID, inbox ID, sender address, subject, receiving inbox address, or receiving plus-address.
     * Get all emails by search criteria. Return in paginated form.
     * @param searchEmailsOptions 
     * @param syncConnectors Sync connectors
     * @param favourited Search only favourited emails
     * @param plusAddressId Optional plus address ID filter
     */
    public searchEmails(searchEmailsOptions: SearchEmailsOptions, syncConnectors?: boolean, favourited?: boolean, plusAddressId?: string, options?: Configuration): Promise<PageEmailProjection> {
        const result = this.api.searchEmails(searchEmailsOptions, syncConnectors, favourited, plusAddressId, options);
        return result.toPromise();
    }

    /**
     * Send a saved draft using the existing inbox send pipeline. The draft is deleted only after the send succeeds.
     * Send an email draft
     * @param draftId ID of draft
     */
    public sendEmailDraft(draftId: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailDraft(draftId, options);
        return result.toPromise();
    }

    /**
     * Sends an email from an existing inbox, or creates a temporary inbox when `inboxId` is not provided. Supports `useDomainPool` and `virtualSend` inbox creation behavior for convenience sends.
     * Send email
     * @param sendEmailOptions 
     * @param inboxId ID of the inbox you want to send the email from
     * @param useDomainPool Use domain pool. Optionally create inbox to send from using the mailslurp domain pool.
     * @param virtualSend Optionally create inbox to send from that is a virtual inbox and won&#39;t send to external addresses
     */
    public sendEmailSourceOptional(sendEmailOptions: SendEmailOptions, inboxId?: string, useDomainPool?: boolean, virtualSend?: boolean, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailSourceOptional(sendEmailOptions, inboxId, useDomainPool, virtualSend, options);
        return result.toPromise();
    }

    /**
     * Sets favourite state for an email for dashboard/search workflows.
     * Set email favourited state
     * @param emailId ID of email to set favourite state
     * @param favourited 
     */
    public setEmailFavourited(emailId: string, favourited: boolean, options?: Configuration): Promise<void> {
        const result = this.api.setEmailFavourited(emailId, favourited, options);
        return result.toPromise();
    }

    /**
     * Replace the SendEmailOptions stored for a draft. The draft remains attached to its original inbox; create a new draft to use a different inbox.
     * Update an email draft
     * @param draftId ID of draft
     * @param sendEmailOptions 
     */
    public updateEmailDraft(draftId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<EmailDraftDto> {
        const result = this.api.updateEmailDraft(draftId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Runs HTML validation on the email body when HTML is present. Non-HTML emails are treated as valid for this check.
     * Validate email HTML contents
     * @param emailId ID of email
     */
    public validateEmail(emailId: string, options?: Configuration): Promise<ValidationDto> {
        const result = this.api.validateEmail(emailId, options);
        return result.toPromise();
    }


}



import { ObservableEmailVerificationControllerApi } from './ObservableAPI.ts';

import { EmailVerificationControllerApiRequestFactory, EmailVerificationControllerApiResponseProcessor} from "../apis/EmailVerificationControllerApi.ts";
export class PromiseEmailVerificationControllerApi {
    private api: ObservableEmailVerificationControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EmailVerificationControllerApiRequestFactory,
        responseProcessor?: EmailVerificationControllerApiResponseProcessor
    ) {
        this.api = new ObservableEmailVerificationControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Run reputation-oriented checks for an email address, domain, IP address, or MX host. This is separate from address validation.
     * Check email/domain reputation signals including configured DNS blacklists.
     * @param emailDomainReputationOptions 
     */
    public checkEmailDomainReputation(emailDomainReputationOptions: EmailDomainReputationOptions, options?: Configuration): Promise<EmailDomainReputationResult> {
        const result = this.api.checkEmailDomainReputation(emailDomainReputationOptions, options);
        return result.toPromise();
    }

    /**
     * Remove validation requests
     * Delete all validation requests
     */
    public deleteAllValidationRequests(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllValidationRequests(options);
        return result.toPromise();
    }

    /**
     * Delete a validation record
     * Delete a validation record
     * @param id 
     */
    public deleteValidationRequest(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteValidationRequest(id, options);
        return result.toPromise();
    }

    /**
     * Run email intelligence scoring for one or more email addresses or domains. Submitting a single target in the list supports one-off checks.
     * Get intelligence score and breakdown for email/domain targets. Per unit billing for non-cached evaluations.
     * @param emailIntelligenceOptions 
     */
    public getEmailIntelligence(emailIntelligenceOptions: EmailIntelligenceOptions, options?: Configuration): Promise<EmailIntelligenceListResult> {
        const result = this.api.getEmailIntelligence(emailIntelligenceOptions, options);
        return result.toPromise();
    }

    /**
     * List email verification requests
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param isValid Filter where email is valid is true or false
     */
    public getValidationRequests(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, isValid?: boolean, options?: Configuration): Promise<PageEmailValidationRequest> {
        const result = this.api.getValidationRequests(page, size, sort, searchFilter, since, before, isValid, options);
        return result.toPromise();
    }

    /**
     * Verify a list of email addresses is valid and can be contacted.
     * Validate a list of email addresses. Per unit billing. See your plan for pricing.
     * @param validateEmailAddressListOptions 
     */
    public validateEmailAddressList(validateEmailAddressListOptions: ValidateEmailAddressListOptions, options?: Configuration): Promise<ValidateEmailAddressListResult> {
        const result = this.api.validateEmailAddressList(validateEmailAddressListOptions, options);
        return result.toPromise();
    }


}



import { ObservableExpiredControllerApi } from './ObservableAPI.ts';

import { ExpiredControllerApiRequestFactory, ExpiredControllerApiResponseProcessor} from "../apis/ExpiredControllerApi.ts";
export class PromiseExpiredControllerApi {
    private api: ObservableExpiredControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExpiredControllerApiRequestFactory,
        responseProcessor?: ExpiredControllerApiResponseProcessor
    ) {
        this.api = new ObservableExpiredControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Return default times used for inbox expiration
     * Get default expiration settings
     */
    public getExpirationDefaults(options?: Configuration): Promise<ExpirationDefaults> {
        const result = this.api.getExpirationDefaults(options);
        return result.toPromise();
    }

    /**
     * Use the inboxId to return an ExpiredInboxRecord if an inbox has expired. Inboxes expire and are disabled if an expiration date is set or plan requires. Returns 404 if no expired inbox is found for the inboxId
     * Get expired inbox record for a previously existing inbox
     * @param inboxId ID of inbox you want to retrieve (not the inbox ID)
     */
    public getExpiredInboxByInboxId(inboxId: string, options?: Configuration): Promise<ExpiredInboxDto> {
        const result = this.api.getExpiredInboxByInboxId(inboxId, options);
        return result.toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date and be moved to an ExpiredInbox entity. You can still read emails in the inbox but it can no longer send or receive emails. Fetch the expired inboxes to view the old inboxes properties
     * Get an expired inbox record
     * @param expiredId ID of the ExpiredInboxRecord you want to retrieve. This is different from the ID of the inbox you are interested in. See other methods for getting ExpiredInboxRecord for an inbox inboxId
     */
    public getExpiredInboxRecord(expiredId: string, options?: Configuration): Promise<ExpiredInboxDto> {
        const result = this.api.getExpiredInboxRecord(expiredId, options);
        return result.toPromise();
    }

    /**
     * Inboxes created with an expiration date will expire after the given date. An ExpiredInboxRecord is created that records the inboxes old ID and email address. You can still read emails in the inbox (using the inboxes old ID) but the email address associated with the inbox can no longer send or receive emails. Fetch expired inbox records to view the old inboxes properties
     * List records of expired inboxes
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optionally filter by inbox ID
     */
    public getExpiredInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageExpiredInboxRecordProjection> {
        const result = this.api.getExpiredInboxes(page, size, sort, since, before, inboxId, options);
        return result.toPromise();
    }


}



import { ObservableExportControllerApi } from './ObservableAPI.ts';

import { ExportControllerApiRequestFactory, ExportControllerApiResponseProcessor} from "../apis/ExportControllerApi.ts";
export class PromiseExportControllerApi {
    private api: ObservableExportControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ExportControllerApiRequestFactory,
        responseProcessor?: ExportControllerApiResponseProcessor
    ) {
        this.api = new ObservableExportControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Export inboxes link callable via browser
     * @param exportType 
     * @param apiKey 
     * @param outputFormat 
     * @param filter 
     * @param listSeparatorToken 
     * @param excludePreviouslyExported 
     * @param createdEarliestTime 
     * @param createdOldestTime 
     */
    public exportEntities(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', apiKey: string, outputFormat: 'CSV_DEFAULT' | 'CSV_EXCEL', filter?: string, listSeparatorToken?: string, excludePreviouslyExported?: boolean, createdEarliestTime?: Date, createdOldestTime?: Date, options?: Configuration): Promise<string> {
        const result = this.api.exportEntities(exportType, apiKey, outputFormat, filter, listSeparatorToken, excludePreviouslyExported, createdEarliestTime, createdOldestTime, options);
        return result.toPromise();
    }

    /**
     * Get export link
     * @param exportType 
     * @param exportOptions 
     * @param apiKey 
     */
    public getExportLink(exportType: 'INBOXES' | 'CONTACTS' | 'ATTACHMENTS' | 'EMAILS', exportOptions: ExportOptions, apiKey?: string, options?: Configuration): Promise<ExportLink> {
        const result = this.api.getExportLink(exportType, exportOptions, apiKey, options);
        return result.toPromise();
    }


}



import { ObservableFormControllerApi } from './ObservableAPI.ts';

import { FormControllerApiRequestFactory, FormControllerApiResponseProcessor} from "../apis/FormControllerApi.ts";
export class PromiseFormControllerApi {
    private api: ObservableFormControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FormControllerApiRequestFactory,
        responseProcessor?: FormControllerApiResponseProcessor
    ) {
        this.api = new ObservableFormControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * This endpoint allows you to submit HTML forms and receive the field values and files via email.   #### Parameters The endpoint looks for special meta parameters in the form fields OR in the URL request parameters. The meta parameters can be used to specify the behaviour of the email.   You must provide at-least a `_to` email address to tell the endpoint where the form should be emailed. These can be submitted as hidden HTML input fields with the corresponding `name` attributes or as URL query parameters such as `?_to=test@example.com`  The endpoint takes all other form fields that are named and includes them in the message body of the email. Files are sent as attachments.  #### Submitting This endpoint accepts form submission via POST method. It accepts `application/x-www-form-urlencoded`, and `multipart/form-data` content-types.  #### HTML Example ```html <form    action=\"https://api.mailslurp.com/forms\"   method=\"post\" >   <input name=\"_to\" type=\"hidden\" value=\"test@example.com\"/>   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```  #### URL Example ```html <form    action=\"https://api.mailslurp.com/forms?_to=test@example.com\"   method=\"post\" >   <textarea name=\"feedback\"></textarea>   <button type=\"submit\">Submit</button> </form> ```    The email address is specified by a `_to` field OR is extracted from an email alias specified by a `_toAlias` field (see the alias controller for more information).  Endpoint accepts .  You can specify a content type in HTML forms using the `enctype` attribute, for instance: `<form enctype=\"multipart/form-data\">`.  
     * Submit a form to be parsed and sent as an email to an address determined by the form fields
     * @param to The email address that submitted form should be sent to.
     * @param subject Optional subject of the email that will be sent.
     * @param emailAddress Email address of the submitting user. Include this if you wish to record the submitters email address and reply to it later.
     * @param successMessage Optional success message to display if no _redirectTo present.
     * @param spamCheck Optional but recommended field that catches spammers out. Include as a hidden form field but LEAVE EMPTY. Spam-bots will usually fill every field. If the _spamCheck field is filled the form submission will be ignored.
     * @param otherParameters All other parameters or fields will be accepted and attached to the sent email. This includes files and any HTML form field with a name. These fields will become the body of the email that is sent.
     */
    public submitForm(to?: string, subject?: string, emailAddress?: string, successMessage?: string, spamCheck?: string, otherParameters?: string, options?: Configuration): Promise<string> {
        const result = this.api.submitForm(to, subject, emailAddress, successMessage, spamCheck, otherParameters, options);
        return result.toPromise();
    }


}



import { ObservableGroupControllerApi } from './ObservableAPI.ts';

import { GroupControllerApiRequestFactory, GroupControllerApiResponseProcessor} from "../apis/GroupControllerApi.ts";
export class PromiseGroupControllerApi {
    private api: ObservableGroupControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupControllerApiRequestFactory,
        responseProcessor?: GroupControllerApiResponseProcessor
    ) {
        this.api = new ObservableGroupControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Add contacts to a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public addContactsToGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.addContactsToGroup(groupId, updateGroupContacts, options);
        return result.toPromise();
    }

    /**
     * Create a group
     * @param createGroupOptions 
     */
    public createGroup1(createGroupOptions: CreateGroupOptions, options?: Configuration): Promise<GroupDto> {
        const result = this.api.createGroup1(createGroupOptions, options);
        return result.toPromise();
    }

    /**
     * Delete group
     * @param groupId 
     */
    public deleteGroup1(groupId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteGroup1(groupId, options);
        return result.toPromise();
    }

    /**
     * Get all Contact Groups in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGroups(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageGroupProjection> {
        const result = this.api.getAllGroups(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get group
     * @param groupId 
     */
    public getGroup1(groupId: string, options?: Configuration): Promise<GroupDto> {
        const result = this.api.getGroup1(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and contacts belonging to it
     * @param groupId 
     */
    public getGroupWithContacts(groupId: string, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.getGroupWithContacts(groupId, options);
        return result.toPromise();
    }

    /**
     * Get group and paginated contacts belonging to it
     * @param groupId 
     * @param page Optional page index in group contact pagination
     * @param size Optional page size in group contact pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getGroupWithContactsPaginated(groupId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageContactProjection> {
        const result = this.api.getGroupWithContactsPaginated(groupId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all groups
     */
    public getGroups(options?: Configuration): Promise<Array<GroupProjection>> {
        const result = this.api.getGroups(options);
        return result.toPromise();
    }

    /**
     * Remove contacts from a group
     * @param groupId 
     * @param updateGroupContacts 
     */
    public removeContactsFromGroup(groupId: string, updateGroupContacts: UpdateGroupContacts, options?: Configuration): Promise<GroupContactsDto> {
        const result = this.api.removeContactsFromGroup(groupId, updateGroupContacts, options);
        return result.toPromise();
    }


}



import { ObservableGuestPortalControllerApi } from './ObservableAPI.ts';

import { GuestPortalControllerApiRequestFactory, GuestPortalControllerApiResponseProcessor} from "../apis/GuestPortalControllerApi.ts";
export class PromiseGuestPortalControllerApi {
    private api: ObservableGuestPortalControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GuestPortalControllerApiRequestFactory,
        responseProcessor?: GuestPortalControllerApiResponseProcessor
    ) {
        this.api = new ObservableGuestPortalControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a guest login page for customers or clients to access assigned email addresses
     * Create a portal page for your customers or clients to log into email accounts and view emails.
     * @param createPortalOptions 
     */
    public createGuestPortal(createPortalOptions: CreatePortalOptions, options?: Configuration): Promise<GuestPortalDto> {
        const result = this.api.createGuestPortal(createPortalOptions, options);
        return result.toPromise();
    }

    /**
     * Add customer to portal
     * Create a portal guest user
     * @param portalId 
     * @param createPortalUserOptions 
     */
    public createGuestPortalUser(portalId: string, createPortalUserOptions: CreatePortalUserOptions, options?: Configuration): Promise<GuestPortalUserCreateDto> {
        const result = this.api.createGuestPortalUser(portalId, createPortalUserOptions, options);
        return result.toPromise();
    }

    /**
     * Get all customers for a portal
     * Get all guest users for portal
     * @param portalId Optional portal ID
     * @param search Optional search term
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllGuestPortalUsers(portalId?: string, search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageGuestPortalUsers> {
        const result = this.api.getAllGuestPortalUsers(portalId, search, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Fetch a customer guest portal
     * Get a client email portal
     * @param portalId 
     */
    public getGuestPortal(portalId: string, options?: Configuration): Promise<GuestPortalDto> {
        const result = this.api.getGuestPortal(portalId, options);
        return result.toPromise();
    }

    /**
     * Get customer for portal
     * Get guest user for portal
     * @param portalId 
     * @param guestId 
     */
    public getGuestPortalUser(portalId: string, guestId: string, options?: Configuration): Promise<GuestPortalUserDto> {
        const result = this.api.getGuestPortalUser(portalId, guestId, options);
        return result.toPromise();
    }

    /**
     * Get customer by ID
     * Get guest user
     * @param guestId 
     */
    public getGuestPortalUserById(guestId: string, options?: Configuration): Promise<GuestPortalUserDto> {
        const result = this.api.getGuestPortalUserById(guestId, options);
        return result.toPromise();
    }

    /**
     * Get customers for a portal
     * Get all guest users for portal
     * @param portalId 
     * @param search Optional search term
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getGuestPortalUsers(portalId: string, search?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageGuestPortalUsers> {
        const result = this.api.getGuestPortalUsers(portalId, search, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get portals
     * Get guest portals
     */
    public getGuestPortals(options?: Configuration): Promise<Array<GuestPortalDto>> {
        const result = this.api.getGuestPortals(options);
        return result.toPromise();
    }


}



import { ObservableImapControllerApi } from './ObservableAPI.ts';

import { ImapControllerApiRequestFactory, ImapControllerApiResponseProcessor} from "../apis/ImapControllerApi.ts";
export class PromiseImapControllerApi {
    private api: ObservableImapControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ImapControllerApiRequestFactory,
        responseProcessor?: ImapControllerApiResponseProcessor
    ) {
        this.api = new ObservableImapControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Fetch message in an inbox
     * @param seqNum 
     * @param inboxId Inbox ID to search
     */
    public imapServerFetch(seqNum: number, inboxId?: string, options?: Configuration): Promise<ImapServerFetchResult> {
        const result = this.api.imapServerFetch(seqNum, inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a message by email ID
     * @param emailId Email ID to get
     * @param inboxId Inbox ID to search
     */
    public imapServerGet(emailId: string, inboxId?: string, options?: Configuration): Promise<ImapServerGetResult> {
        const result = this.api.imapServerGet(emailId, inboxId, options);
        return result.toPromise();
    }

    /**
     * List messages in an inbox
     * @param imapServerListOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerList(imapServerListOptions: ImapServerListOptions, inboxId?: string, options?: Configuration): Promise<ImapServerListResult> {
        const result = this.api.imapServerList(imapServerListOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Create a new mailbox if possible
     * @param name Inbox email address to create
     */
    public imapServerMailbox(name: string, options?: Configuration): Promise<ImapServerMailboxResult> {
        const result = this.api.imapServerMailbox(name, options);
        return result.toPromise();
    }

    /**
     * Search messages in an inbox
     * @param imapServerSearchOptions 
     * @param inboxId Inbox ID to search
     */
    public imapServerSearch(imapServerSearchOptions: ImapServerSearchOptions, inboxId?: string, options?: Configuration): Promise<ImapServerSearchResult> {
        const result = this.api.imapServerSearch(imapServerSearchOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Get status for mailbox
     * @param imapServerStatusOptions 
     * @param inboxId Inbox ID to list
     */
    public imapServerStatus(imapServerStatusOptions: ImapServerStatusOptions, inboxId?: string, options?: Configuration): Promise<ImapServerStatusResult> {
        const result = this.api.imapServerStatus(imapServerStatusOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Update message flags
     * @param imapUpdateFlagsOptions 
     * @param inboxId 
     */
    public imapServerUpdateFlags(imapUpdateFlagsOptions: ImapUpdateFlagsOptions, inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.imapServerUpdateFlags(imapUpdateFlagsOptions, inboxId, options);
        return result.toPromise();
    }


}



import { ObservableInboxControllerApi } from './ObservableAPI.ts';

import { InboxControllerApiRequestFactory, InboxControllerApiResponseProcessor} from "../apis/InboxControllerApi.ts";
export class PromiseInboxControllerApi {
    private api: ObservableInboxControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxControllerApiRequestFactory,
        responseProcessor?: InboxControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get a scheduled email job and cancel it. Will fail if status of job is already cancelled, failed, or complete.
     * Cancel a scheduled email job
     * @param jobId 
     */
    public cancelScheduledJob(jobId: string, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.cancelScheduledJob(jobId, options);
        return result.toPromise();
    }

    /**
     * Create a new inbox and with a randomized email address to send and receive from. Pass emailAddress parameter if you wish to use a specific email address. Creating an inbox is required before sending or receiving emails. If writing tests it is recommended that you create a new inbox during each test method so that it is unique and empty. 
     * Create an inbox email address. An inbox has a real email address and can send and receive emails. Inboxes can be either `SMTP` or `HTTP` inboxes.
     * @param emailAddress A custom email address to use with the inbox. Defaults to null. When null MailSlurp will assign a random email address to the inbox such as &#x60;123@mailslurp.com&#x60;. If you use the &#x60;useDomainPool&#x60; option when the email address is null it will generate an email address with a more varied domain ending such as &#x60;123@mailslurp.info&#x60; or &#x60;123@mailslurp.biz&#x60;. When a custom email address is provided the address is split into a domain and the domain is queried against your user. If you have created the domain in the MailSlurp dashboard and verified it you can use any email address that ends with the domain. Note domain types must match the inbox type - so &#x60;SMTP&#x60; inboxes will only work with &#x60;SMTP&#x60; type domains. Avoid &#x60;SMTP&#x60; inboxes if you need to send emails as they can only receive. Send an email to this address and the inbox will receive and store it for you. To retrieve the email use the Inbox and Email Controller endpoints with the inbox ID.
     * @param tags Tags that inbox has been tagged with. Tags can be added to inboxes to group different inboxes within an account. You can also search for inboxes by tag in the dashboard UI.
     * @param name Optional name of the inbox. Displayed in the dashboard for easier search and used as the sender name when sending emails.
     * @param description Optional description of the inbox for labelling purposes. Is shown in the dashboard and can be used with
     * @param useDomainPool Use the MailSlurp domain name pool with this inbox when creating the email address. Defaults to null. If enabled the inbox will be an email address with a domain randomly chosen from a list of the MailSlurp domains. This is useful when the default &#x60;@mailslurp.com&#x60; email addresses used with inboxes are blocked or considered spam by a provider or receiving service. When domain pool is enabled an email address will be generated ending in &#x60;@mailslurp.{world,info,xyz,...}&#x60; . This means a TLD is randomly selecting from a list of &#x60;.biz&#x60;, &#x60;.info&#x60;, &#x60;.xyz&#x60; etc to add variance to the generated email addresses. When null or false MailSlurp uses the default behavior of &#x60;@mailslurp.com&#x60; or custom email address provided by the emailAddress field. Note this feature is only available for &#x60;HTTP&#x60; inbox types.
     * @param favourite Is the inbox a favorite. Marking an inbox as a favorite is typically done in the dashboard for quick access or filtering
     * @param expiresAt Optional inbox expiration date. If null then this inbox is permanent and the emails in it won&#39;t be deleted. If an expiration date is provided or is required by your plan the inbox will be closed when the expiration time is reached. Expired inboxes still contain their emails but can no longer send or receive emails. An ExpiredInboxRecord is created when an inbox and the email address and inbox ID are recorded. The expiresAt property is a timestamp string in ISO DateTime Format yyyy-MM-dd&#39;T&#39;HH:mm:ss.SSSXXX.
     * @param expiresIn Number of milliseconds that inbox should exist for
     * @param allowTeamAccess DEPRECATED (team access is always true). Grant team access to this inbox and the emails that belong to it for team members of your organization.
     * @param inboxType HTTP (default) or SMTP inbox type. HTTP inboxes are default and best solution for most cases. SMTP inboxes are more reliable for public inbound email consumption (but do not support sending emails). When using custom domains the domain type must match the inbox type. HTTP inboxes are processed by AWS SES while SMTP inboxes use a custom mail server running at &#x60;mxslurp.click&#x60;.
     * @param virtualInbox Virtual inbox prevents any outbound emails from being sent. It creates sent email records but will never send real emails to recipients. Great for testing and faking email sending.
     * @param useShortAddress Use a shorter email address under 31 characters
     * @param domainId ID of custom domain to use for email address.
     * @param domainName FQDN domain name for the domain you have verified. Will be appended with a randomly assigned recipient name. Use the &#x60;emailAddress&#x60; option instead to specify the full custom inbox.
     * @param prefix Prefix to add before the email address for easier labelling or identification.
     */
    public createInbox(emailAddress?: string, tags?: Array<string>, name?: string, description?: string, useDomainPool?: boolean, favourite?: boolean, expiresAt?: Date, expiresIn?: number, allowTeamAccess?: boolean, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', virtualInbox?: boolean, useShortAddress?: boolean, domainId?: string, domainName?: string, prefix?: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInbox(emailAddress, tags, name, description, useDomainPool, favourite, expiresAt, expiresIn, allowTeamAccess, inboxType, virtualInbox, useShortAddress, domainId, domainName, prefix, options);
        return result.toPromise();
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox ruleset
     * @param inboxId inboxId
     * @param createRulesetOptions 
     */
    public createInboxRuleset(inboxId: string, createRulesetOptions: CreateRulesetOptions, options?: Configuration): Promise<RulesetDto> {
        const result = this.api.createInboxRuleset(inboxId, createRulesetOptions, options);
        return result.toPromise();
    }

    /**
     * Create an inbox with default options. Uses MailSlurp domain pool address and is private.
     */
    public createInboxWithDefaults(options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInboxWithDefaults(options);
        return result.toPromise();
    }

    /**
     * Additional endpoint that allows inbox creation with request body options. Can be more flexible that other methods for some clients.
     * Create an inbox with options. Extended options for inbox creation.
     * @param createInboxDto 
     */
    public createInboxWithOptions(createInboxDto: CreateInboxDto, options?: Configuration): Promise<InboxDto> {
        const result = this.api.createInboxWithOptions(createInboxDto, options);
        return result.toPromise();
    }

    /**
     * Deletes all emails in an inbox. Be careful as emails cannot be recovered
     * Delete all emails in a given inboxes.
     * @param inboxId 
     */
    public deleteAllInboxEmails(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxEmails(inboxId, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes and associated email addresses. This will also delete all emails within the inboxes. Be careful as inboxes cannot be recovered once deleted. Note: deleting inboxes will not impact your usage limits. Monthly inbox creation limits are based on how many inboxes were created in the last 30 days, not how many inboxes you currently have.
     * Delete all inboxes
     * @param createdAtSince Optional minimum inbox created-at timestamp to delete from.
     * @param createdAtBefore Optional maximum inbox created-at timestamp to delete through.
     */
    public deleteAllInboxes(createdAtSince?: Date, createdAtBefore?: Date, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxes(createdAtSince, createdAtBefore, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by description
     * Delete inboxes by description
     * @param description 
     */
    public deleteAllInboxesByDescription(description: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByDescription(description, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by name
     * Delete inboxes by name
     * @param name 
     */
    public deleteAllInboxesByName(name: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByName(name, options);
        return result.toPromise();
    }

    /**
     * Permanently delete all inboxes by tag
     * Delete inboxes by tag
     * @param tag 
     */
    public deleteAllInboxesByTag(tag: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllInboxesByTag(tag, options);
        return result.toPromise();
    }

    /**
     * Permanently delete an inbox and associated email address as well as all emails within the given inbox. This action cannot be undone. Note: deleting an inbox will not affect your account usage. Monthly inbox usage is based on how many inboxes you create within 30 days, not how many exist at time of request.
     * Delete inbox
     * @param inboxId 
     */
    public deleteInbox(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Check if inboxes exist by email address. Useful if you are sending emails to mailslurp addresses
     * Does inbox exist
     * @param emailAddress Email address
     * @param allowCatchAll Allow catch all
     * @param ipAddress IP address
     * @param sender Sender
     */
    public doesInboxExist(emailAddress: string, allowCatchAll?: boolean, ipAddress?: string, sender?: string, options?: Configuration): Promise<InboxExistsDto> {
        const result = this.api.doesInboxExist(emailAddress, allowCatchAll, ipAddress, sender, options);
        return result.toPromise();
    }

    /**
     * Check if an inbox has automations.
     * Does inbox have automations
     */
    public doesInboxHaveAutomations(options?: Configuration): Promise<void> {
        const result = this.api.doesInboxHaveAutomations(options);
        return result.toPromise();
    }

    /**
     * Remove any expired inboxes for your account (instead of waiting for scheduled removal on server)
     * Remove expired inboxes
     * @param before Optional expired at before flag to flush expired inboxes that have expired before the given time
     */
    public flushExpired(before?: Date, options?: Configuration): Promise<FlushExpiredInboxesResult> {
        const result = this.api.flushExpired(before, options);
        return result.toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching name and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR' | 'ACCOUNT' | 'GUIDED_TOUR' | 'GUEST' | 'OAUTH_CONNECTION_GMAIL', domainId?: string, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxes(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);
        return result.toPromise();
    }

    /**
     * List inboxes in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * List All Inboxes Offset Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param favourite Optionally filter results for favourites only
     * @param search Optionally filter by search words partial matching name and email address
     * @param tag Optionally filter by tags. Will return inboxes that include given tags
     * @param teamAccess DEPRECATED. Optionally filter by team access.
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     * @param inboxType Optional filter by inbox type
     * @param inboxFunction Optional filter by inbox function
     * @param domainId Optional domain ID filter
     */
    public getAllInboxesOffsetPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', favourite?: boolean, search?: string, tag?: string, teamAccess?: boolean, since?: Date, before?: Date, inboxType?: 'HTTP_INBOX' | 'SMTP_INBOX', inboxFunction?: 'ALIAS' | 'THREAD' | 'CATCH_ALL' | 'CONNECTOR' | 'ACCOUNT' | 'GUIDED_TOUR' | 'GUEST' | 'OAUTH_CONNECTION_GMAIL', domainId?: string, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getAllInboxesOffsetPaginated(page, size, sort, favourite, search, tag, teamAccess, since, before, inboxType, inboxFunction, domainId, options);
        return result.toPromise();
    }

    /**
     * Returns paginated list of all plus alias addresses found for in account based on received emails that used the inbox address with a +xyz alias.
     * Get all sub address plus address aliases for an inbox
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param inboxId Optional inboxId filter
     */
    public getAllPlusAddresses(page?: number, size?: number, sort?: 'ASC' | 'DESC', inboxId?: string, options?: Configuration): Promise<PagePlusAddressProjection> {
        const result = this.api.getAllPlusAddresses(page, size, sort, inboxId, options);
        return result.toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs. These can be inbox or account level.
     * Get all scheduled email sending jobs for account
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId 
     */
    public getAllScheduledJobs(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageScheduledJobs> {
        const result = this.api.getAllScheduledJobs(page, size, sort, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * Get all email delivery statuses for an inbox
     * @param inboxId 
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getDeliveryStatusesByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getDeliveryStatusesByInboxId(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * List emails that an inbox has received. Only emails that are sent to the inbox's email address will appear in the inbox. It may take several seconds for any email you send to an inbox's email address to appear in the inbox. To make this endpoint wait for a minimum number of emails use the `minCount` parameter. The server will retry the inbox database until the `minCount` is satisfied or the `retryTimeout` is reached
     * Get emails in an Inbox. This method is not idempotent as it allows retries and waits if you want certain conditions to be met before returning. For simple listing and sorting of known emails use the email controller instead.
     * @param inboxId Id of inbox that emails belongs to
     * @param size Alias for limit. Assessed first before assessing any passed limit.
     * @param limit Limit the result set, ordered by received date time sort direction. Maximum 100. For more listing options see the email controller
     * @param sort Sort the results by received date and direction ASC or DESC
     * @param retryTimeout Maximum milliseconds to spend retrying inbox database until minCount emails are returned
     * @param delayTimeout 
     * @param minCount Minimum acceptable email count. Will cause request to hang (and retry) until minCount is satisfied or retryTimeout is reached.
     * @param unreadOnly 
     * @param before Exclude emails received after this ISO 8601 date time
     * @param since Exclude emails received before this ISO 8601 date time
     */
    public getEmails(inboxId: string, size?: number, limit?: number, sort?: 'ASC' | 'DESC', retryTimeout?: number, delayTimeout?: number, minCount?: number, unreadOnly?: boolean, before?: Date, since?: Date, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.getEmails(inboxId, size, limit, sort, retryTimeout, delayTimeout, minCount, unreadOnly, before, since, options);
        return result.toPromise();
    }

    /**
     * Get IMAP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapAccess(inboxId?: string, options?: Configuration): Promise<ImapAccessDetails> {
        const result = this.api.getImapAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get IMAP and SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccess(inboxId?: string, options?: Configuration): Promise<ImapSmtpAccessDetails> {
        const result = this.api.getImapSmtpAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get IMAP and SMTP access details in .env format
     * @param inboxId Inbox ID
     */
    public getImapSmtpAccessEnv(inboxId?: string, options?: Configuration): Promise<string> {
        const result = this.api.getImapSmtpAccessEnv(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get IMAP and SMTP server hosts
     */
    public getImapSmtpAccessServers(options?: Configuration): Promise<ImapSmtpAccessServers> {
        const result = this.api.getImapSmtpAccessServers(options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's properties, including its email address and ID.
     * Get Inbox. Returns properties of an inbox.
     * @param inboxId 
     */
    public getInbox(inboxId: string, options?: Configuration): Promise<InboxDto> {
        const result = this.api.getInbox(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a inbox result by email address
     * Search for an inbox with the provided email address
     * @param emailAddress 
     */
    public getInboxByEmailAddress(emailAddress: string, options?: Configuration): Promise<InboxByEmailAddressResult> {
        const result = this.api.getInboxByEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Get a inbox result by name
     * Search for an inbox with the given name
     * @param name 
     */
    public getInboxByName(name: string, options?: Configuration): Promise<InboxByNameResult> {
        const result = this.api.getInboxByName(name, options);
        return result.toPromise();
    }

    /**
     * Get total inbox count
     */
    public getInboxCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getInboxCount(options);
        return result.toPromise();
    }

    /**
     * Get email count in inbox
     * @param inboxId Id of inbox that emails belongs to
     */
    public getInboxEmailCount(inboxId: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getInboxEmailCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get a paginated list of emails in an inbox. Does not hold connections open.
     * Get inbox emails paginated
     * @param inboxId Id of inbox that emails belongs to
     * @param page Optional page index in inbox emails list pagination
     * @param size Optional page size in inbox emails list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by received after given date time
     * @param before Optional filter by received before given date time
     * @param syncConnectors Sync connectors before fetching emails
     */
    public getInboxEmailsPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, syncConnectors?: boolean, options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxEmailsPaginated(inboxId, page, size, sort, since, before, syncConnectors, options);
        return result.toPromise();
    }

    /**
     * Get list of inbox IDs
     * Get all inbox IDs
     */
    public getInboxIds(options?: Configuration): Promise<InboxIdsResult> {
        const result = this.api.getInboxIds(options);
        return result.toPromise();
    }

    /**
     * Returns a plus address object based on emails that used the inbox address with a +xyz alias.
     * Get sub address plus address for an inbox
     * @param plusAddressId ID of the plus address you want to fetch
     * @param inboxId ID of the inbox you want to fetch
     */
    public getInboxPlusAddress(plusAddressId: string, inboxId: string, options?: Configuration): Promise<PlusAddressDto> {
        const result = this.api.getInboxPlusAddress(plusAddressId, inboxId, options);
        return result.toPromise();
    }

    /**
     * Returns a plus address object based on emails that used the inbox address with a +xyz alias.
     * Get sub address plus address by ID
     * @param plusAddressId ID of the plus address you want to fetch
     * @param inboxId ID of the inbox you want to filter for
     */
    public getInboxPlusAddressById(plusAddressId: string, inboxId?: string, options?: Configuration): Promise<PlusAddressDto> {
        const result = this.api.getInboxPlusAddressById(plusAddressId, inboxId, options);
        return result.toPromise();
    }

    /**
     * Returns paginated list of all emails for a given plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get emails for a given inbox plus address
     * @param plusAddress The plus address to fetch emails for. If your inbox address is &#x60;123@test.com&#x60; and the email was sent to &#x60;123+abc@test.com&#x60; then the plus address is &#x60;abc&#x60;
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getInboxPlusAddressEmails(plusAddress: string, inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxPlusAddressEmails(plusAddress, inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns paginated list of all emails for a given plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get emails for a given inbox plus address
     * @param plusAddressId The plus address ID to fetch emails for.
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getInboxPlusAddressEmailsForPlusAddressId(plusAddressId: string, inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageEmailPreview> {
        const result = this.api.getInboxPlusAddressEmailsForPlusAddressId(plusAddressId, inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns paginated list of all plus alias addresses found for an inbox based on received emails that used the inbox address with a +xyz alias.
     * Get sub address plus address aliases for an inbox
     * @param inboxId ID of the inbox you want to send the email from
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxPlusAddresses(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PagePlusAddressProjection> {
        const result = this.api.getInboxPlusAddresses(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get sent email count in inbox
     * @param inboxId Id of inbox that emails were sent from
     */
    public getInboxSentCount(inboxId: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getInboxSentCount(inboxId, options);
        return result.toPromise();
    }

    /**
     * Returns an inbox's sent email receipts. Call individual sent email endpoints for more details. Note for privacy reasons the full body of sent emails is never stored. An MD5 hash hex is available for comparison instead.
     * Get Inbox Sent Emails
     * @param inboxId 
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional sent email search
     * @param since Optional filter by sent after given date time
     * @param before Optional filter by sent before given date time
     */
    public getInboxSentEmails(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getInboxSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all inbox tags
     * Get inbox tags
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxTags(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.getInboxTags(page, size, sort, searchFilter, options);
        return result.toPromise();
    }

    /**
     * Get all inbox tags paginated
     * Get inbox tags paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxTagsPaginated(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Promise<PageInboxTags> {
        const result = this.api.getInboxTagsPaginated(page, size, sort, searchFilter, options);
        return result.toPromise();
    }

    /**
     * List the inboxes you have created. Note use of the more advanced `getAllInboxes` is recommended and allows paginated access using a limit and sort parameter.
     * List Inboxes and email addresses
     * @param size Optional result size limit. Note an automatic limit of 100 results is applied. See the paginated &#x60;getAllEmails&#x60; for larger queries.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter by created after given date time
     * @param excludeCatchAllInboxes Optional exclude catch all inboxes
     * @param before Optional filter by created before given date time
     * @param include Optional inboxIds to include in result
     */
    public getInboxes(size?: number, sort?: 'ASC' | 'DESC', since?: Date, excludeCatchAllInboxes?: boolean, before?: Date, include?: Array<string>, options?: Configuration): Promise<Array<InboxDto>> {
        const result = this.api.getInboxes(size, sort, since, excludeCatchAllInboxes, before, include, options);
        return result.toPromise();
    }

    /**
     * Get all inboxes for a given inbox tag
     * Get inboxes for a tag
     * @param tag Tag to filter by
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     */
    public getInboxesByTag(tag: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getInboxesByTag(tag, page, size, sort, searchFilter, options);
        return result.toPromise();
    }

    /**
     * Get the newest email in an inbox or wait for one to arrive
     * Get latest email in an inbox. Use `WaitForController` to get emails that may not have arrived yet.
     * @param inboxId ID of the inbox you want to get the latest email from
     * @param timeoutMillis Timeout milliseconds to wait for latest email
     */
    public getLatestEmailInInbox(inboxId: string, timeoutMillis: number, options?: Configuration): Promise<Email> {
        const result = this.api.getLatestEmailInInbox(inboxId, timeoutMillis, options);
        return result.toPromise();
    }

    /**
     * Looks up an inbox plus address using a full email address like `inbox+alias@domain.com`. Returns an existing plus address if found, otherwise creates one. Rejects the request if the full address is already assigned to a real inbox.
     * Get or create a plus address by full address
     * @param inboxId ID of the inbox you want to target
     * @param fullAddress Full recipient address including +suffix. Example: &#x60;inbox+alias@domain.com&#x60;
     */
    public getOrCreateInboxPlusAddress(inboxId: string, fullAddress: string, options?: Configuration): Promise<PlusAddressDto> {
        const result = this.api.getOrCreateInboxPlusAddress(inboxId, fullAddress, options);
        return result.toPromise();
    }

    /**
     * Looks up an inbox plus address using a full email address like `inbox+alias@domain.com`. Resolves the base inbox from the full address for the authenticated user, then returns an existing plus address if found, otherwise creates one. Rejects the request if the full address is already assigned to a real inbox.
     * Get or create a plus address by full address without inbox ID
     * @param fullAddress Full recipient address including +suffix. Example: &#x60;inbox+alias@domain.com&#x60;
     */
    public getOrCreatePlusAddressByFullAddress(fullAddress: string, options?: Configuration): Promise<PlusAddressDto> {
        const result = this.api.getOrCreatePlusAddressByFullAddress(fullAddress, options);
        return result.toPromise();
    }

    /**
     * List organization inboxes in paginated form. These are inboxes created with `allowTeamAccess` flag enabled. Organization inboxes are `readOnly` for non-admin users. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). 
     * List Organization Inboxes Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public getOrganizationInboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageOrganizationInboxProjection> {
        const result = this.api.getOrganizationInboxes(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * List inboxes that have sent emails
     * List all inboxes with sent emails
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getOutboxes(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.getOutboxes(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get a scheduled email job details.
     * Get a scheduled email job
     * @param jobId 
     */
    public getScheduledJob(jobId: string, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.getScheduledJob(jobId, options);
        return result.toPromise();
    }

    /**
     * Schedule sending of emails using scheduled jobs.
     * Get all scheduled email sending jobs for the inbox
     * @param inboxId 
     * @param page Optional page index in scheduled job list pagination
     * @param size Optional page size in scheduled job list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getScheduledJobsByInboxId(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageScheduledJobs> {
        const result = this.api.getScheduledJobsByInboxId(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get SMTP access usernames and passwords
     * @param inboxId Inbox ID
     */
    public getSmtpAccess(inboxId?: string, options?: Configuration): Promise<SmtpAccessDetails> {
        const result = this.api.getSmtpAccess(inboxId, options);
        return result.toPromise();
    }

    /**
     * Imports a raw RFC822/MIME email into the specified inbox regardless of the original `To` header. V1 accepts MIME-family formats such as `.eml`, `message/rfc822`, and raw MIME bytes only. Outlook `.msg`, `mbox`, and `maildir` are not supported in V1. By default MailSlurp rewrites the MIME `Message-ID` header to avoid imported message identity clashes. Set `runPipeline=true` to run the normal inbound receive pipeline after persistence.
     * Import email into inbox from base64 MIME
     * @param inboxId 
     * @param importEmailOptions 
     */
    public importEmailIntoInbox(inboxId: string, importEmailOptions: ImportEmailOptions, options?: Configuration): Promise<Email> {
        const result = this.api.importEmailIntoInbox(inboxId, importEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Imports a raw RFC822/MIME email stream into the specified inbox regardless of the original `To` header. Supports `message/rfc822` and `application/octet-stream`. V1 does not support Outlook `.msg`, `mbox`, or `maildir`. By default MailSlurp rewrites the MIME `Message-ID` header to avoid imported message identity clashes.
     * Import email into inbox from raw MIME bytes
     * @param inboxId 
     * @param externalId 
     * @param runPipeline 
     * @param overrideMessageId 
     */
    public importEmailIntoInboxBytes(inboxId: string, externalId?: string, runPipeline?: boolean, overrideMessageId?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.importEmailIntoInboxBytes(inboxId, externalId, runPipeline, overrideMessageId, options);
        return result.toPromise();
    }

    /**
     * Imports an uploaded RFC822/MIME file into the specified inbox regardless of the original `To` header. Intended for `.eml` uploads and other MIME-family raw email files. V1 does not support Outlook `.msg`, `mbox`, or `maildir`. By default MailSlurp rewrites the MIME `Message-ID` header to avoid imported message identity clashes.
     * Import email into inbox from multipart EML upload
     * @param inboxId 
     * @param file 
     * @param externalId 
     * @param runPipeline 
     * @param overrideMessageId 
     */
    public importEmailIntoInboxMultipart(inboxId: string, file: HttpFile, externalId?: string, runPipeline?: boolean, overrideMessageId?: boolean, options?: Configuration): Promise<Email> {
        const result = this.api.importEmailIntoInboxMultipart(inboxId, file, externalId, runPipeline, overrideMessageId, options);
        return result.toPromise();
    }

    /**
     * Returns whether an email address is available
     * Is email address available
     * @param emailAddress 
     */
    public isEmailAddressAvailable(emailAddress: string, options?: Configuration): Promise<EmailAvailableResult> {
        const result = this.api.isEmailAddressAvailable(emailAddress, options);
        return result.toPromise();
    }

    /**
     * List all rulesets attached to an inbox
     * List inbox rulesets
     * @param inboxId 
     * @param page Optional page index in inbox ruleset list pagination
     * @param size Optional page size in inbox ruleset list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxRulesets(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageRulesetDto> {
        const result = this.api.listInboxRulesets(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * List all tracking pixels sent from an inbox
     * List inbox tracking pixels
     * @param inboxId 
     * @param page Optional page index in inbox tracking pixel list pagination
     * @param size Optional page size in inbox tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Optional filter by created after given date time
     * @param before Optional filter by created before given date time
     */
    public listInboxTrackingPixels(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.listInboxTrackingPixels(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Search inboxes and return in paginated form. The results are available on the `content` property of the returned object. This method allows for page index (zero based), page size (how many results to return), and a sort direction (based on createdAt time). You Can also filter by whether an inbox is favorited or use email address pattern. This method is the recommended way to query inboxes. The alternative `getInboxes` method returns a full list of inboxes but is limited to 100 results.
     * Search all inboxes and return matching inboxes
     * @param searchInboxesOptions 
     */
    public searchInboxes(searchInboxesOptions: SearchInboxesOptions, options?: Configuration): Promise<PageInboxProjection> {
        const result = this.api.searchInboxes(searchInboxesOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email from an inbox's email address.  The request body should contain the `SendEmailOptions` that include recipients, attachments, body etc. See `SendEmailOptions` for all available properties. Note the `inboxId` refers to the inbox's id not the inbox's email address. See https://www.mailslurp.com/guides/ for more information on how to send emails. This method does not return a sent email entity due to legacy reasons. To send and get a sent email as returned response use the sister method `sendEmailAndConfirm`.
     * Send Email
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmail(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmail(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Sister method for standard `sendEmail` method with the benefit of returning a `SentEmail` entity confirming the successful sending of the email with a link to the sent object created for it.
     * Send email and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     */
    public sendEmailAndConfirm(inboxId: string, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendEmailAndConfirm(inboxId, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send an email using a queue. Will place the email onto a queue that will then be processed and sent. Use this queue method to enable any failed email sending to be recovered. This will prevent lost emails when sending if your account encounters a block or payment issue.
     * Send email with queue
     * @param inboxId ID of the inbox you want to send the email from
     * @param validateBeforeEnqueue Validate before adding to queue
     * @param sendEmailOptions 
     */
    public sendEmailWithQueue(inboxId: string, validateBeforeEnqueue: boolean, sendEmailOptions: SendEmailOptions, options?: Configuration): Promise<void> {
        const result = this.api.sendEmailWithQueue(inboxId, validateBeforeEnqueue, sendEmailOptions, options);
        return result.toPromise();
    }

    /**
     * Send email using an SMTP envelope containing RCPT TO, MAIL FROM, and a SMTP BODY.
     * Send email using an SMTP mail envelope and message body and return sent confirmation
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendSMTPEnvelopeOptions 
     */
    public sendSmtpEnvelope(inboxId: string, sendSMTPEnvelopeOptions: SendSMTPEnvelopeOptions, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendSmtpEnvelope(inboxId, sendSMTPEnvelopeOptions, options);
        return result.toPromise();
    }

    /**
     * Internal SMTP-server endpoint for sending an SMTP envelope whose RFC822 body has already been written to S3.
     * Send SMTP envelope from an S3 body reference
     * @param inboxId ID of the inbox you want to send the email from
     * @param key 
     * @param sendSMTPEnvelopeFromS3Options 
     */
    public sendSmtpEnvelopeFromS3(inboxId: string, key: string, sendSMTPEnvelopeFromS3Options: SendSMTPEnvelopeFromS3Options, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendSmtpEnvelopeFromS3(inboxId, key, sendSMTPEnvelopeFromS3Options, options);
        return result.toPromise();
    }

    /**
     * Internal SMTP-server endpoint for sending an SMTP envelope while streaming the RFC822 body in the request.
     * Send SMTP envelope from a streamed body
     * @param inboxId ID of the inbox you want to send the email from
     * @param key 
     * @param mailFrom 
     * @param rcptTo 
     */
    public sendSmtpEnvelopeStream(inboxId: string, key: string, mailFrom: string, rcptTo: Array<string>, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.sendSmtpEnvelopeStream(inboxId, key, mailFrom, rcptTo, options);
        return result.toPromise();
    }

    /**
     * Send an inbox a test email to test email receiving is working
     * Send a test email to inbox
     * @param inboxId 
     */
    public sendTestEmail(inboxId: string, options?: Configuration): Promise<void> {
        const result = this.api.sendTestEmail(inboxId, options);
        return result.toPromise();
    }

    /**
     * Send an email using a delay. Will place the email onto a scheduler that will then be processed and sent. Use delays to schedule email sending.
     * Send email with with delay or schedule
     * @param inboxId ID of the inbox you want to send the email from
     * @param sendEmailOptions 
     * @param sendAtTimestamp Sending timestamp
     * @param sendAtNowPlusSeconds Send after n seconds
     * @param validateBeforeEnqueue Validate before adding to queue
     */
    public sendWithSchedule(inboxId: string, sendEmailOptions: SendEmailOptions, sendAtTimestamp?: Date, sendAtNowPlusSeconds?: number, validateBeforeEnqueue?: boolean, options?: Configuration): Promise<ScheduledJobDto> {
        const result = this.api.sendWithSchedule(inboxId, sendEmailOptions, sendAtTimestamp, sendAtNowPlusSeconds, validateBeforeEnqueue, options);
        return result.toPromise();
    }

    /**
     * Set and return new favorite state for an inbox
     * Set inbox favourited state
     * @param inboxId ID of inbox to set favourite state
     * @param setInboxFavouritedOptions 
     */
    public setInboxFavourited(inboxId: string, setInboxFavouritedOptions: SetInboxFavouritedOptions, options?: Configuration): Promise<InboxDto> {
        const result = this.api.setInboxFavourited(inboxId, setInboxFavouritedOptions, options);
        return result.toPromise();
    }

    /**
     * Update IMAP access usernames and passwords
     * @param updateImapAccessOptions 
     * @param inboxId Inbox ID
     */
    public updateImapAccess(updateImapAccessOptions: UpdateImapAccessOptions, inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.updateImapAccess(updateImapAccessOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Update editable fields on an inbox
     * Update Inbox. Change name and description. Email address is not editable.
     * @param inboxId 
     * @param updateInboxOptions 
     */
    public updateInbox(inboxId: string, updateInboxOptions: UpdateInboxOptions, options?: Configuration): Promise<InboxDto> {
        const result = this.api.updateInbox(inboxId, updateInboxOptions, options);
        return result.toPromise();
    }

    /**
     * Update SMTP access usernames and passwords
     * @param updateSmtpAccessOptions 
     * @param inboxId Inbox ID
     */
    public updateSmtpAccess(updateSmtpAccessOptions: UpdateSmtpAccessOptions, inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.updateSmtpAccess(updateSmtpAccessOptions, inboxId, options);
        return result.toPromise();
    }


}



import { ObservableInboxForwarderControllerApi } from './ObservableAPI.ts';

import { InboxForwarderControllerApiRequestFactory, InboxForwarderControllerApiResponseProcessor} from "../apis/InboxForwarderControllerApi.ts";
export class PromiseInboxForwarderControllerApi {
    private api: ObservableInboxForwarderControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxForwarderControllerApiRequestFactory,
        responseProcessor?: InboxForwarderControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxForwarderControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for forwarding, blocking, and allowing emails when sending and receiving
     * Create an inbox forwarder
     * @param createInboxForwarderOptions 
     * @param inboxId Inbox id to attach forwarder to
     */
    public createNewInboxForwarder(createInboxForwarderOptions: CreateInboxForwarderOptions, inboxId?: string, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.createNewInboxForwarder(createInboxForwarderOptions, inboxId, options);
        return result.toPromise();
    }

    /**
     * Delete inbox forwarder
     * Delete an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public deleteInboxForwarder(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxForwarder(id, options);
        return result.toPromise();
    }

    /**
     * Delete inbox forwarders. Accepts optional inboxId filter.
     * Delete inbox forwarders
     * @param inboxId Optional inbox id to attach forwarder to
     */
    public deleteInboxForwarders(inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxForwarders(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get all inbox forwarder events
     * Get all inbox forwarder events
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param inboxId Optional inbox ID to filter for
     * @param emailId Optional email ID to filter for
     * @param sentId Optional sent ID to filter for
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllInboxForwarderEvents(page?: number, size?: number, inboxId?: string, emailId?: string, sentId?: string, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxForwarderEvents> {
        const result = this.api.getAllInboxForwarderEvents(page, size, inboxId, emailId, sentId, sort, options);
        return result.toPromise();
    }

    /**
     * Get forwarder event
     * Get a forwarder event
     * @param eventId ID of inbox forwarder event
     */
    public getForwarderEvent(eventId: string, options?: Configuration): Promise<InboxForwarderEventDto> {
        const result = this.api.getForwarderEvent(eventId, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder
     * Get an inbox forwarder
     * @param id ID of inbox forwarder
     */
    public getInboxForwarder(id: string, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.getInboxForwarder(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder event
     * Get an inbox forwarder event
     * @param id ID of inbox forwarder
     * @param eventId ID of inbox forwarder event
     */
    public getInboxForwarderEvent(id: string, eventId: string, options?: Configuration): Promise<InboxForwarderEventDto> {
        const result = this.api.getInboxForwarderEvent(id, eventId, options);
        return result.toPromise();
    }

    /**
     * Get inbox forwarder events
     * Get an inbox forwarder event list
     * @param id ID of inbox forwarder
     * @param page Optional page index in inbox forwarder event list pagination
     * @param size Optional page size in inbox forwarder event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxForwarderEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxForwarderEvents> {
        const result = this.api.getInboxForwarderEvents(id, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all forwarders attached to an inbox
     * List inbox forwarders
     * @param inboxId Optional inbox id to get forwarders from
     * @param page Optional page index in inbox forwarder list pagination
     * @param size Optional page size in inbox forwarder list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxForwarders(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageInboxForwarderDto> {
        const result = this.api.getInboxForwarders(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Test an inbox forwarder
     * Test an inbox forwarder
     * @param id ID of inbox forwarder
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwarder(id: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testInboxForwarder(id, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test inbox forwarders for inbox
     * Test inbox forwarders for inbox
     * @param inboxId ID of inbox
     * @param inboxForwarderTestOptions 
     */
    public testInboxForwardersForInbox(inboxId: string, inboxForwarderTestOptions: InboxForwarderTestOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testInboxForwardersForInbox(inboxId, inboxForwarderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new inbox forwarder
     * Test new inbox forwarder
     * @param testNewInboxForwarderOptions 
     */
    public testNewInboxForwarder(testNewInboxForwarderOptions: TestNewInboxForwarderOptions, options?: Configuration): Promise<InboxForwarderTestResult> {
        const result = this.api.testNewInboxForwarder(testNewInboxForwarderOptions, options);
        return result.toPromise();
    }

    /**
     * Update inbox forwarder
     * Update an inbox forwarder
     * @param id ID of inbox forwarder
     * @param createInboxForwarderOptions 
     */
    public updateInboxForwarder(id: string, createInboxForwarderOptions: CreateInboxForwarderOptions, options?: Configuration): Promise<InboxForwarderDto> {
        const result = this.api.updateInboxForwarder(id, createInboxForwarderOptions, options);
        return result.toPromise();
    }


}



import { ObservableInboxReplierControllerApi } from './ObservableAPI.ts';

import { InboxReplierControllerApiRequestFactory, InboxReplierControllerApiResponseProcessor} from "../apis/InboxReplierControllerApi.ts";
export class PromiseInboxReplierControllerApi {
    private api: ObservableInboxReplierControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxReplierControllerApiRequestFactory,
        responseProcessor?: InboxReplierControllerApiResponseProcessor
    ) {
        this.api = new ObservableInboxReplierControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox rule for reply toing, blocking, and allowing emails when sending and receiving
     * Create an inbox replier
     * @param createInboxReplierOptions 
     */
    public createNewInboxReplier(createInboxReplierOptions: CreateInboxReplierOptions, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.createNewInboxReplier(createInboxReplierOptions, options);
        return result.toPromise();
    }

    /**
     * Delete inbox replier
     * Delete an inbox replier
     * @param id ID of inbox replier
     */
    public deleteInboxReplier(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxReplier(id, options);
        return result.toPromise();
    }

    /**
     * Delete inbox repliers. Accepts optional inboxId filter.
     * Delete inbox repliers
     * @param inboxId Optional inbox id to attach replier to
     */
    public deleteInboxRepliers(inboxId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteInboxRepliers(inboxId, options);
        return result.toPromise();
    }

    /**
     * Get all inbox ruleset events
     * Get inbox replier event list
     * @param inboxReplierId ID of inbox replier
     * @param inboxId ID of inbox
     * @param emailId ID of email
     * @param sentId ID of sent
     * @param page Optional page index in inbox replier event list pagination
     * @param size Optional page size in inbox replier event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllInboxReplierEvents(inboxReplierId?: string, inboxId?: string, emailId?: string, sentId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxReplierEvents> {
        const result = this.api.getAllInboxReplierEvents(inboxReplierId, inboxId, emailId, sentId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get inbox ruleset
     * Get an inbox replier
     * @param id ID of inbox replier
     */
    public getInboxReplier(id: string, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.getInboxReplier(id, options);
        return result.toPromise();
    }

    /**
     * Get inbox ruleset events
     * Get an inbox replier event list
     * @param id ID of inbox replier
     * @param page Optional page index in inbox replier event list pagination
     * @param size Optional page size in inbox replier event list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxReplierEvents(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxReplierEvents> {
        const result = this.api.getInboxReplierEvents(id, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * List all repliers attached to an inbox
     * List inbox repliers
     * @param inboxId Optional inbox id to get repliers from
     * @param page Optional page index in inbox replier list pagination
     * @param size Optional page size in inbox replier list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getInboxRepliers(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageInboxReplierDto> {
        const result = this.api.getInboxRepliers(inboxId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Update inbox ruleset
     * Update an inbox replier
     * @param id ID of inbox replier
     * @param updateInboxReplierOptions 
     */
    public updateInboxReplier(id: string, updateInboxReplierOptions: UpdateInboxReplierOptions, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.updateInboxReplier(id, updateInboxReplierOptions, options);
        return result.toPromise();
    }

    /**
     * Enable or disable an inbox replier without changing its other settings
     * Update an inbox replier's active state
     * @param id ID of inbox replier
     * @param updateInboxReplierActiveOptions 
     */
    public updateInboxReplierActive(id: string, updateInboxReplierActiveOptions: UpdateInboxReplierActiveOptions, options?: Configuration): Promise<InboxReplierDto> {
        const result = this.api.updateInboxReplierActive(id, updateInboxReplierActiveOptions, options);
        return result.toPromise();
    }


}



import { ObservableMFAControllerApi } from './ObservableAPI.ts';

import { MFAControllerApiRequestFactory, MFAControllerApiResponseProcessor} from "../apis/MFAControllerApi.ts";
export class PromiseMFAControllerApi {
    private api: ObservableMFAControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MFAControllerApiRequestFactory,
        responseProcessor?: MFAControllerApiResponseProcessor
    ) {
        this.api = new ObservableMFAControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a virtual TOTP device for a given secret key. This is usually present as an alternative login option when pairing OTP devices.
     * Create a TOTP device from an base32 secret key
     * @param createTotpDeviceBase32SecretKeyOptions 
     */
    public createTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions: CreateTotpDeviceBase32SecretKeyOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.createTotpDeviceForBase32SecretKey(createTotpDeviceBase32SecretKeyOptions, options);
        return result.toPromise();
    }

    /**
     * Create a virtual TOTP device for custom options specifying all parameters of the TOTP device.
     * Create a TOTP device from custom options
     * @param createTotpDeviceCustomOptions 
     */
    public createTotpDeviceForCustom(createTotpDeviceCustomOptions: CreateTotpDeviceCustomOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.createTotpDeviceForCustom(createTotpDeviceCustomOptions, options);
        return result.toPromise();
    }

    /**
     * Create a virtual TOTP device for a given OTP Auth URL such as otpauth://totp/MyApp:alice@example.com?secret=ABC123&issuer=MyApp&period=30&digits=6&algorithm=SHA1. You can provider overrides in the options for each component of the URL.
     * Create a TOTP device from an OTP Auth URL
     * @param createTotpDeviceOtpAuthUrlOptions 
     */
    public createTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions: CreateTotpDeviceOtpAuthUrlOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.createTotpDeviceForOtpAuthUrl(createTotpDeviceOtpAuthUrlOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a Time-Based One-Time Password (TOTP) device by ID.
     * Delete a TOTP device
     * @param id 
     */
    public deleteTotpDevice(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTotpDevice(id, options);
        return result.toPromise();
    }

    /**
     * Get Time-Based One-Time Password (TOTP) device by its ID.
     * Get a TOTP device by ID
     * @param id 
     */
    public getTotpDevice(id: string, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.getTotpDevice(id, options);
        return result.toPromise();
    }

    /**
     * Get Time-Based One-Time Password (TOTP) device by its username and issuer mapping.
     * Get a TOTP device by username, issuer, or name. Returns empty if not found.
     * @param name Optional name filter
     * @param issuer Optional issuer filter
     * @param username Optional username filter
     */
    public getTotpDeviceBy(name?: string, issuer?: string, username?: string, options?: Configuration): Promise<TotpDeviceOptionalDto> {
        const result = this.api.getTotpDeviceBy(name, issuer, username, options);
        return result.toPromise();
    }

    /**
     * Get Time-Based One-Time Password for a device by its ID.
     * Get a TOTP device code by device ID
     * @param id ID of the TOTP device to get the code for
     * @param at Optional time to get code for. If not provided, current time is used.
     * @param minSecondsUntilExpire Optional minimum time until code expires. Will hold thread open until period reached.
     */
    public getTotpDeviceCode(id: string, at?: Date, minSecondsUntilExpire?: number, options?: Configuration): Promise<TotpDeviceCodeDto> {
        const result = this.api.getTotpDeviceCode(id, at, minSecondsUntilExpire, options);
        return result.toPromise();
    }

    /**
     * List Time-Based One-Time Password (TOTP) devices for the calling account.
     * List TOTP devices
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param issuer Optional issuer filter
     * @param username Optional username filter
     */
    public getTotpDevices(page?: number, size?: number, sort?: 'ASC' | 'DESC', issuer?: string, username?: string, options?: Configuration): Promise<PageTotpDeviceProjection> {
        const result = this.api.getTotpDevices(page, size, sort, issuer, username, options);
        return result.toPromise();
    }

    /**
     * Update stored metadata and TOTP settings for a device by ID.
     * Update a TOTP device
     * @param id 
     * @param updateTotpDeviceOptions 
     */
    public updateTotpDevice(id: string, updateTotpDeviceOptions: UpdateTotpDeviceOptions, options?: Configuration): Promise<TotpDeviceDto> {
        const result = this.api.updateTotpDevice(id, updateTotpDeviceOptions, options);
        return result.toPromise();
    }


}



import { ObservableMailServerControllerApi } from './ObservableAPI.ts';

import { MailServerControllerApiRequestFactory, MailServerControllerApiResponseProcessor} from "../apis/MailServerControllerApi.ts";
export class PromiseMailServerControllerApi {
    private api: ObservableMailServerControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailServerControllerApiRequestFactory,
        responseProcessor?: MailServerControllerApiResponseProcessor
    ) {
        this.api = new ObservableMailServerControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get DNS Mail Server records for a domain
     * @param describeDomainOptions 
     */
    public describeMailServerDomain(describeDomainOptions: DescribeDomainOptions, options?: Configuration): Promise<DescribeMailServerDomainResult> {
        const result = this.api.describeMailServerDomain(describeDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup DNS records for a domain
     * @param dNSLookupOptions 
     */
    public getDnsLookup(dNSLookupOptions: DNSLookupOptions, options?: Configuration): Promise<DNSLookupResults> {
        const result = this.api.getDnsLookup(dNSLookupOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup DNS records for multiple domains
     * @param dNSLookupsOptions 
     */
    public getDnsLookups(dNSLookupsOptions: DNSLookupsOptions, options?: Configuration): Promise<DNSLookupResults> {
        const result = this.api.getDnsLookups(dNSLookupsOptions, options);
        return result.toPromise();
    }

    /**
     * Get IP address for a domain
     * @param name 
     */
    public getIpAddress(name: string, options?: Configuration): Promise<IPAddressResult> {
        const result = this.api.getIpAddress(name, options);
        return result.toPromise();
    }

    /**
     * Deprecated. Use the EmailVerificationController methods for more accurate and reliable functionality. Verify the existence of an email address at a given mail server.
     * @param verifyEmailAddressOptions 
     */
    public verifyEmailAddress(verifyEmailAddressOptions: VerifyEmailAddressOptions, options?: Configuration): Promise<EmailVerificationResult> {
        const result = this.api.verifyEmailAddress(verifyEmailAddressOptions, options);
        return result.toPromise();
    }


}



import { ObservableMissedEmailControllerApi } from './ObservableAPI.ts';

import { MissedEmailControllerApiRequestFactory, MissedEmailControllerApiResponseProcessor} from "../apis/MissedEmailControllerApi.ts";
export class PromiseMissedEmailControllerApi {
    private api: ObservableMissedEmailControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedEmailControllerApiRequestFactory,
        responseProcessor?: MissedEmailControllerApiResponseProcessor
    ) {
        this.api = new ObservableMissedEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all MissedEmails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional exact search filter for missed email ID, inbox ID, or from address
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageMissedEmailProjection> {
        const result = this.api.getAllMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * Unknown missed emails are emails that were sent to MailSlurp but could not be assigned to an existing inbox.
     * Get all unknown missed emails in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional exact search filter for missed email ID, inbox ID, or from address
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllUnknownMissedEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageUnknownMissedEmailProjection> {
        const result = this.api.getAllUnknownMissedEmails(page, size, sort, searchFilter, since, before, inboxId, options);
        return result.toPromise();
    }

    /**
     * List emails that were missed due to plan limits.
     * Get MissedEmail
     * @param missedEmailId 
     */
    public getMissedEmail(missedEmailId: string, options?: Configuration): Promise<MissedEmailDto> {
        const result = this.api.getMissedEmail(missedEmailId, options);
        return result.toPromise();
    }

    /**
     * If emails were missed due to a plan limit they are saved as missed emails. If support team enables the canRestore flag these emails can be reload into your account using this method.
     * Restore missed emails
     */
    public restoreMissedEmails(options?: Configuration): Promise<void> {
        const result = this.api.restoreMissedEmails(options);
        return result.toPromise();
    }

    /**
     * Wait for 0 based index missed email
     * Wait for Nth missed email
     * @param index Zero based index of the email to wait for. If 1 missed email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForNthMissedEmail(index: number, inboxId?: string, timeout?: number, since?: Date, before?: Date, options?: Configuration): Promise<MissedEmailDto> {
        const result = this.api.waitForNthMissedEmail(index, inboxId, timeout, since, before, options);
        return result.toPromise();
    }


}



import { ObservableMissedSmsControllerApi } from './ObservableAPI.ts';

import { MissedSmsControllerApiRequestFactory, MissedSmsControllerApiResponseProcessor} from "../apis/MissedSmsControllerApi.ts";
export class PromiseMissedSmsControllerApi {
    private api: ObservableMissedSmsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MissedSmsControllerApiRequestFactory,
        responseProcessor?: MissedSmsControllerApiResponseProcessor
    ) {
        this.api = new ObservableMissedSmsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get all missed SMS messages in paginated format
     * @param phoneNumber Optional receiving phone number to filter missed SMS for
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter missed SMS after given date time
     * @param before Optional filter missed SMS before given date time
     * @param search Optional search filter
     */
    public getAllMissedSmsMessages(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageMissedSmsProjection> {
        const result = this.api.getAllMissedSmsMessages(phoneNumber, page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * Get missed SMS count
     */
    public getMissedSmsCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getMissedSmsCount(options);
        return result.toPromise();
    }

    /**
     * Returns a missed SMS with full content.
     * Get missed SMS content
     * @param missedSmsId 
     */
    public getMissedSmsMessage(missedSmsId: string, options?: Configuration): Promise<MissedSmsDto> {
        const result = this.api.getMissedSmsMessage(missedSmsId, options);
        return result.toPromise();
    }


}



import { ObservablePhoneControllerApi } from './ObservableAPI.ts';

import { PhoneControllerApiRequestFactory, PhoneControllerApiResponseProcessor} from "../apis/PhoneControllerApi.ts";
export class PromisePhoneControllerApi {
    private api: ObservablePhoneControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PhoneControllerApiRequestFactory,
        responseProcessor?: PhoneControllerApiResponseProcessor
    ) {
        this.api = new ObservablePhoneControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Acquire an available phone number from the pool and mark it leased
     * Acquire phone pool lease
     * @param poolId 
     * @param acquirePhonePoolLeaseOptions 
     */
    public acquirePhonePoolLease(poolId: string, acquirePhonePoolLeaseOptions: AcquirePhonePoolLeaseOptions, options?: Configuration): Promise<PhonePoolLeaseDto> {
        const result = this.api.acquirePhonePoolLease(poolId, acquirePhonePoolLeaseOptions, options);
        return result.toPromise();
    }

    /**
     * Add all active owned phone numbers to a pool
     * Add all phone numbers to phone pool
     * @param poolId 
     */
    public addAllPhoneNumbersToPhonePool(poolId: string, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.addAllPhoneNumbersToPhonePool(poolId, options);
        return result.toPromise();
    }

    /**
     * Add one or more tags to a phone number
     * Add phone number tags
     * @param phoneNumberId 
     * @param phoneNumberTagsOptions 
     */
    public addPhoneNumberTags(phoneNumberId: string, phoneNumberTagsOptions: PhoneNumberTagsOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.addPhoneNumberTags(phoneNumberId, phoneNumberTagsOptions, options);
        return result.toPromise();
    }

    /**
     * Add one or more owned phone numbers to a pool
     * Add phone numbers to phone pool
     * @param poolId 
     * @param addPhonePoolNumbersOptions 
     */
    public addPhoneNumbersToPhonePool(poolId: string, addPhonePoolNumbersOptions: AddPhonePoolNumbersOptions, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.addPhoneNumbersToPhonePool(poolId, addPhonePoolNumbersOptions, options);
        return result.toPromise();
    }

    /**
     * Add an emergency address to a phone number
     * Create an emergency address
     * @param createEmergencyAddressOptions 
     */
    public createEmergencyAddress(createEmergencyAddressOptions: CreateEmergencyAddressOptions, options?: Configuration): Promise<EmergencyAddress> {
        const result = this.api.createEmergencyAddress(createEmergencyAddressOptions, options);
        return result.toPromise();
    }

    /**
     * Create new phone number
     * Add phone number to your account. Only works if you have already added a plan and an initial phone number in your account and acknowledged the pricing and terms of service by enabling API phone creation.
     * @param createPhoneNumberOptions 
     */
    public createPhoneNumber(createPhoneNumberOptions: CreatePhoneNumberOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.createPhoneNumber(createPhoneNumberOptions, options);
        return result.toPromise();
    }

    /**
     * Create a reusable pool of phone numbers for coordinated leasing
     * Create phone pool
     * @param createPhonePoolOptions 
     */
    public createPhonePool(createPhonePoolOptions: CreatePhonePoolOptions, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.createPhonePool(createPhonePoolOptions, options);
        return result.toPromise();
    }

    /**
     * Create an advanced phone provisioning job from shortlisted numbers
     * Create a phone provisioning job
     * @param createPhoneProvisioningJobOptions 
     */
    public createPhoneProvisioningJob(createPhoneProvisioningJobOptions: CreatePhoneProvisioningJobOptions, options?: Configuration): Promise<PhoneProvisioningJobDto> {
        const result = this.api.createPhoneProvisioningJob(createPhoneProvisioningJobOptions, options);
        return result.toPromise();
    }

    /**
     * Remove all phone number from account
     * Delete all phone numbers
     */
    public deleteAllPhoneNumber(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllPhoneNumber(options);
        return result.toPromise();
    }

    /**
     * Delete an emergency address
     * Delete an emergency address
     * @param addressId 
     */
    public deleteEmergencyAddress(addressId: string, options?: Configuration): Promise<EmptyResponseDto> {
        const result = this.api.deleteEmergencyAddress(addressId, options);
        return result.toPromise();
    }

    /**
     * Delete all messages in an SMS thread
     * Delete messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     */
    public deletePhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, options?: Configuration): Promise<EmptyResponseDto> {
        const result = this.api.deletePhoneMessageThreadItems(phoneNumberId, otherNumber, options);
        return result.toPromise();
    }

    /**
     * Remove phone number from account
     * Delete a phone number
     * @param phoneNumberId 
     */
    public deletePhoneNumber(phoneNumberId: string, options?: Configuration): Promise<void> {
        const result = this.api.deletePhoneNumber(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Delete a phone pool and release any active leases from that pool
     * Delete phone pool
     * @param poolId 
     */
    public deletePhonePool(poolId: string, options?: Configuration): Promise<void> {
        const result = this.api.deletePhonePool(poolId, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public downloadPhoneNumberMedia(mediaId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadPhoneNumberMedia(mediaId, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public downloadPhoneNumberMediaBase64(mediaId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadPhoneNumberMediaBase64(mediaId, options);
        return result.toPromise();
    }

    /**
     * Download all active phone numbers for account as CSV
     * Export phone numbers CSV
     */
    public exportPhoneNumbersCsv(options?: Configuration): Promise<void> {
        const result = this.api.exportPhoneNumbersCsv(options);
        return result.toPromise();
    }

    /**
     * List all message threads for all phones
     * Get the latest messages for all phones
     * @param page 
     * @param size 
     */
    public getAllPhoneMessageThreads(page?: number, size?: number, options?: Configuration): Promise<PagePhoneMessageThreadProjection> {
        const result = this.api.getAllPhoneMessageThreads(page, size, options);
        return result.toPromise();
    }

    /**
     * List released or deleted phone numbers
     * Get all phone number releases
     * @param page 
     * @param size 
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getAllPhoneNumberReleases(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PagePhoneNumberReleaseProjection> {
        const result = this.api.getAllPhoneNumberReleases(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Get the status of phone usage consent
     * Get consent status
     */
    public getConsentStatus(options?: Configuration): Promise<ConsentStatusDto> {
        const result = this.api.getConsentStatus(options);
        return result.toPromise();
    }

    /**
     * Fetch an emergency address by ID
     * Get an emergency address
     * @param addressId 
     */
    public getEmergencyAddress(addressId: string, options?: Configuration): Promise<EmergencyAddress> {
        const result = this.api.getEmergencyAddress(addressId, options);
        return result.toPromise();
    }

    /**
     * List emergency addresses
     * Get emergency addresses
     */
    public getEmergencyAddresses(options?: Configuration): Promise<Array<EmergencyAddressDto>> {
        const result = this.api.getEmergencyAddresses(options);
        return result.toPromise();
    }

    /**
     * Get a phone pool by name or create it if it does not exist
     * Get or create phone pool
     * @param getOrCreatePhonePoolOptions 
     */
    public getOrCreatePhonePool(getOrCreatePhonePoolOptions: GetOrCreatePhonePoolOptions, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.getOrCreatePhonePool(getOrCreatePhonePoolOptions, options);
        return result.toPromise();
    }

    /**
     * List message thread messages for a phone message thread
     * Get messages in a phone thread
     * @param phoneNumberId 
     * @param otherNumber 
     * @param page 
     * @param size 
     */
    public getPhoneMessageThreadItems(phoneNumberId: string, otherNumber: string, page?: number, size?: number, options?: Configuration): Promise<PagePhoneMessageThreadItemProjection> {
        const result = this.api.getPhoneMessageThreadItems(phoneNumberId, otherNumber, page, size, options);
        return result.toPromise();
    }

    /**
     * List message threads for a phone
     * Get the latest message preview for a thread
     * @param phoneNumberId 
     * @param page 
     * @param size 
     */
    public getPhoneMessageThreads(phoneNumberId: string, page?: number, size?: number, options?: Configuration): Promise<PagePhoneMessageThreadProjection> {
        const result = this.api.getPhoneMessageThreads(phoneNumberId, page, size, options);
        return result.toPromise();
    }

    /**
     * Get a phone number by ID
     * Get a phone number by ID
     * @param phoneNumberId 
     */
    public getPhoneNumber(phoneNumberId: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.getPhoneNumber(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Get a phone number by name
     * Get a phone number by name
     * @param name 
     */
    public getPhoneNumberByName(name: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.getPhoneNumberByName(name, options);
        return result.toPromise();
    }

    /**
     * Get a phone number by phone number
     * Get a phone number by phone number
     * @param phoneNumber 
     */
    public getPhoneNumberByPhoneNumber(phoneNumber: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.getPhoneNumberByPhoneNumber(phoneNumber, options);
        return result.toPromise();
    }

    /**
     * Lookup line type intelligence for a phone number
     * Get line type intelligence for a phone number
     * @param validatePhoneNumberOptions 
     */
    public getPhoneNumberLineTypeIntelligence(validatePhoneNumberOptions: ValidatePhoneNumberOptions, options?: Configuration): Promise<PhoneNumberLineTypeLookupDto> {
        const result = this.api.getPhoneNumberLineTypeIntelligence(validatePhoneNumberOptions, options);
        return result.toPromise();
    }

    /**
     * @param phoneNumberId 
     * @param page Optional page index in SMS media list pagination
     * @param size Optional page size in SMS media list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMS media created after given date time
     * @param before Optional filter SMS media created before given date time
     * @param search Optional search filter
     */
    public getPhoneNumberMedia(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageSmsMessageMedia> {
        const result = this.api.getPhoneNumberMedia(phoneNumberId, page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * @param page Optional page index in SMS media list pagination
     * @param size Optional page size in SMS media list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMS media created after given date time
     * @param before Optional filter SMS media created before given date time
     * @param search Optional search filter
     */
    public getPhoneNumberMedia1(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageSmsMessageMedia> {
        const result = this.api.getPhoneNumberMedia1(page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public getPhoneNumberMediaById(mediaId: string, options?: Configuration): Promise<SmsMessageMediaDto> {
        const result = this.api.getPhoneNumberMediaById(mediaId, options);
        return result.toPromise();
    }

    /**
     * Get a released or deleted phone numbers
     * Get phone number release
     * @param releaseId 
     */
    public getPhoneNumberRelease(releaseId: string, options?: Configuration): Promise<PhoneNumberReleaseProjection> {
        const result = this.api.getPhoneNumberRelease(releaseId, options);
        return result.toPromise();
    }

    /**
     * Get tags for a specific phone number
     * Get phone number tags
     * @param phoneNumberId 
     */
    public getPhoneNumberTags(phoneNumberId: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.getPhoneNumberTags(phoneNumberId, options);
        return result.toPromise();
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
     * @param tag Optional tags to filter by. A phone must include all provided tags
     * @param include Optional phoneIds to include in result
     * @param favourite Optionally filter results for favourites only
     */
    public getPhoneNumbers(phoneCountry?: 'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'CH' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE', lineType?: string, carrierName?: string, mobileCountryCode?: string, mobileNetworkCode?: string, providerLabel?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, tag?: Array<string>, include?: Array<string>, favourite?: boolean, options?: Configuration): Promise<PagePhoneNumberProjection> {
        const result = this.api.getPhoneNumbers(phoneCountry, lineType, carrierName, mobileCountryCode, mobileNetworkCode, providerLabel, page, size, sort, since, before, search, tag, include, favourite, options);
        return result.toPromise();
    }

    /**
     * Get phone number plans
     * Get phone plans
     */
    public getPhonePlans(options?: Configuration): Promise<Array<PhonePlanDto>> {
        const result = this.api.getPhonePlans(options);
        return result.toPromise();
    }

    /**
     * Get phone plans availability
     */
    public getPhonePlansAvailability(options?: Configuration): Promise<PhonePlanAvailability> {
        const result = this.api.getPhonePlansAvailability(options);
        return result.toPromise();
    }

    /**
     * Get phone pool details by ID
     * Get phone pool
     * @param poolId 
     */
    public getPhonePool(poolId: string, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.getPhonePool(poolId, options);
        return result.toPromise();
    }

    /**
     * Get phone pool details by name
     * Get phone pool by name
     * @param name 
     */
    public getPhonePoolByName(name: string, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.getPhonePoolByName(name, options);
        return result.toPromise();
    }

    /**
     * List phone pools for the authenticated user
     * Get phone pools
     */
    public getPhonePools(options?: Configuration): Promise<Array<PhonePoolDto>> {
        const result = this.api.getPhonePools(options);
        return result.toPromise();
    }

    /**
     * Get supported provider-country variant capabilities for advanced provisioning
     * Get phone provisioning capabilities
     * @param phoneCountry 
     * @param providerLabel 
     */
    public getPhoneProvisioningCapabilities(phoneCountry: 'US' | 'GB' | 'AU' | 'CA' | 'EE' | 'HK' | 'PL' | 'CH' | 'PT' | 'NL' | 'IL' | 'FI' | 'SE', providerLabel?: string, options?: Configuration): Promise<PhoneProviderCapabilitiesResult> {
        const result = this.api.getPhoneProvisioningCapabilities(phoneCountry, providerLabel, options);
        return result.toPromise();
    }

    /**
     * Get advanced phone provisioning job status
     * Get phone provisioning job
     * @param jobId 
     */
    public getPhoneProvisioningJob(jobId: string, options?: Configuration): Promise<PhoneProvisioningJobDto> {
        const result = this.api.getPhoneProvisioningJob(jobId, options);
        return result.toPromise();
    }

    /**
     * Get a specific SMS prepaid credit balance for the authenticated account
     * Get SMS prepaid credit
     * @param creditId 
     */
    public getPhoneSmsPrepaidCredit(creditId: string, options?: Configuration): Promise<PhoneSmsPrepaidCreditDto> {
        const result = this.api.getPhoneSmsPrepaidCredit(creditId, options);
        return result.toPromise();
    }

    /**
     * List SMS prepaid credits for the authenticated account
     * Get SMS prepaid credits
     */
    public getPhoneSmsPrepaidCredits(options?: Configuration): Promise<PhoneSmsPrepaidCreditsDto> {
        const result = this.api.getPhoneSmsPrepaidCredits(options);
        return result.toPromise();
    }

    /**
     * Get overview of assigned phones
     * Get phone summary
     */
    public getPhoneSummary(options?: Configuration): Promise<PhoneSummaryDto> {
        const result = this.api.getPhoneSummary(options);
        return result.toPromise();
    }

    /**
     * List all unique tags used by your phone numbers
     * Get phone tags
     * @param search Optional search filter
     */
    public getPhoneTags(search?: string, options?: Configuration): Promise<Array<string>> {
        const result = this.api.getPhoneTags(search, options);
        return result.toPromise();
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
    public getSentSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageSentSmsProjection> {
        const result = this.api.getSentSmsByPhoneNumber(phoneNumberId, page, size, sort, since, before, search, options);
        return result.toPromise();
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
    public getSmsByPhoneNumber(phoneNumberId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', unreadOnly?: boolean, since?: Date, before?: Date, search?: string, favourite?: boolean, options?: Configuration): Promise<PageSmsProjection> {
        const result = this.api.getSmsByPhoneNumber(phoneNumberId, page, size, sort, unreadOnly, since, before, search, favourite, options);
        return result.toPromise();
    }

    /**
     * Reassign phone number that was released or deleted
     * Reassign phone number release
     * @param releaseId 
     */
    public reassignPhoneNumberRelease(releaseId: string, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.reassignPhoneNumberRelease(releaseId, options);
        return result.toPromise();
    }

    /**
     * Release an active phone pool lease
     * Release phone pool lease
     * @param poolId 
     * @param leaseId 
     */
    public releasePhonePoolLease(poolId: string, leaseId: string, options?: Configuration): Promise<void> {
        const result = this.api.releasePhonePoolLease(poolId, leaseId, options);
        return result.toPromise();
    }

    /**
     * Remove a phone number from a pool. If the number is leased from this pool the lease is released.
     * Remove phone number from phone pool
     * @param poolId 
     * @param phoneNumberId 
     */
    public removePhoneNumberFromPhonePool(poolId: string, phoneNumberId: string, options?: Configuration): Promise<void> {
        const result = this.api.removePhoneNumberFromPhonePool(poolId, phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Remove one or more tags from a phone number
     * Remove phone number tags
     * @param phoneNumberId 
     * @param phoneNumberTagsOptions 
     */
    public removePhoneNumberTags(phoneNumberId: string, phoneNumberTagsOptions: PhoneNumberTagsOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.removePhoneNumberTags(phoneNumberId, phoneNumberTagsOptions, options);
        return result.toPromise();
    }

    /**
     * Search available numbers for advanced provisioning
     * Search available phone numbers
     * @param searchAvailablePhoneNumbersOptions 
     */
    public searchAvailablePhoneNumbers(searchAvailablePhoneNumbersOptions: SearchAvailablePhoneNumbersOptions, options?: Configuration): Promise<AvailablePhoneNumbersResult> {
        const result = this.api.searchAvailablePhoneNumbers(searchAvailablePhoneNumbersOptions, options);
        return result.toPromise();
    }

    /**
     * Send SMS from a phone number
     * Send TXT message from a phone number
     * @param phoneNumberId 
     * @param smsSendOptions 
     */
    public sendSmsFromPhoneNumber(phoneNumberId: string, smsSendOptions: SmsSendOptions, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.sendSmsFromPhoneNumber(phoneNumberId, smsSendOptions, options);
        return result.toPromise();
    }

    /**
     * Give or revoke consent for phone usage
     * Set consent status
     * @param agree 
     */
    public setConsentStatus(agree: boolean, options?: Configuration): Promise<ConsentStatusDto> {
        const result = this.api.setConsentStatus(agree, options);
        return result.toPromise();
    }

    /**
     * Set and return new favorite state for a phone
     * Set phone favourited state
     * @param phoneNumberId ID of phone to set favourite state
     * @param setPhoneFavouritedOptions 
     */
    public setPhoneFavourited(phoneNumberId: string, setPhoneFavouritedOptions: SetPhoneFavouritedOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.setPhoneFavourited(phoneNumberId, setPhoneFavouritedOptions, options);
        return result.toPromise();
    }

    /**
     * Replace all tags on a phone number
     * Set phone number tags
     * @param phoneNumberId 
     * @param phoneNumberTagsOptions 
     */
    public setPhoneNumberTags(phoneNumberId: string, phoneNumberTagsOptions: PhoneNumberTagsOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.setPhoneNumberTags(phoneNumberId, phoneNumberTagsOptions, options);
        return result.toPromise();
    }

    /**
     * Test a phone number by sending an SMS to it. NOTE this is only for internal use to check that a phone number is working. For end-to-end phone testing see https://docs.mailslurp.com/txt-sms/
     * Test sending an SMS to a number
     * @param phoneNumberId 
     * @param testPhoneNumberOptions 
     * @param xTestId 
     */
    public testPhoneNumberSendSms(phoneNumberId: string, testPhoneNumberOptions: TestPhoneNumberOptions, xTestId?: string, options?: Configuration): Promise<void> {
        const result = this.api.testPhoneNumberSendSms(phoneNumberId, testPhoneNumberOptions, xTestId, options);
        return result.toPromise();
    }

    /**
     * Set field for phone number
     * Update a phone number
     * @param phoneNumberId ID of phone to set favourite state
     * @param updatePhoneNumberOptions 
     */
    public updatePhoneNumber(phoneNumberId: string, updatePhoneNumberOptions: UpdatePhoneNumberOptions, options?: Configuration): Promise<PhoneNumberDto> {
        const result = this.api.updatePhoneNumber(phoneNumberId, updatePhoneNumberOptions, options);
        return result.toPromise();
    }

    /**
     * Update phone pool metadata such as name or description
     * Update phone pool
     * @param poolId 
     * @param updatePhonePoolOptions 
     */
    public updatePhonePool(poolId: string, updatePhonePoolOptions: UpdatePhonePoolOptions, options?: Configuration): Promise<PhonePoolDetailDto> {
        const result = this.api.updatePhonePool(poolId, updatePhonePoolOptions, options);
        return result.toPromise();
    }

    /**
     * Validate a phone number
     * Verify validity of a phone number
     * @param validatePhoneNumberOptions 
     */
    public validatePhoneNumber(validatePhoneNumberOptions: ValidatePhoneNumberOptions, options?: Configuration): Promise<PhoneNumberValidationDto> {
        const result = this.api.validatePhoneNumber(validatePhoneNumberOptions, options);
        return result.toPromise();
    }


}



import { ObservableRulesetControllerApi } from './ObservableAPI.ts';

import { RulesetControllerApiRequestFactory, RulesetControllerApiResponseProcessor} from "../apis/RulesetControllerApi.ts";
export class PromiseRulesetControllerApi {
    private api: ObservableRulesetControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: RulesetControllerApiRequestFactory,
        responseProcessor?: RulesetControllerApiResponseProcessor
    ) {
        this.api = new ObservableRulesetControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a new inbox or phone number rule for forwarding, blocking, and allowing emails or SMS when sending and receiving
     * Create a ruleset
     * @param createRulesetOptions 
     * @param inboxId Inbox id to attach ruleset to
     * @param phoneId Phone id to attach ruleset to
     */
    public createNewRuleset(createRulesetOptions: CreateRulesetOptions, inboxId?: string, phoneId?: string, options?: Configuration): Promise<RulesetDto> {
        const result = this.api.createNewRuleset(createRulesetOptions, inboxId, phoneId, options);
        return result.toPromise();
    }

    /**
     * Delete ruleset
     * Delete a ruleset
     * @param id ID of ruleset
     */
    public deleteRuleset(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteRuleset(id, options);
        return result.toPromise();
    }

    /**
     * Delete rulesets. Accepts optional inboxId or phoneId filters.
     * Delete rulesets
     * @param inboxId Optional inbox id to attach ruleset to
     * @param phoneId 
     */
    public deleteRulesets(inboxId?: string, phoneId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteRulesets(inboxId, phoneId, options);
        return result.toPromise();
    }

    /**
     * Get ruleset
     * Get a ruleset
     * @param id ID of ruleset
     */
    public getRuleset(id: string, options?: Configuration): Promise<RulesetDto> {
        const result = this.api.getRuleset(id, options);
        return result.toPromise();
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
    public getRulesets(inboxId?: string, phoneId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageRulesetDto> {
        const result = this.api.getRulesets(inboxId, phoneId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Test inbox rulesets for inbox
     * Test inbox rulesets for inbox
     * @param inboxId ID of inbox
     * @param rulesetTestOptions 
     */
    public testInboxRulesetsForInbox(inboxId: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testInboxRulesetsForInbox(inboxId, rulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test new ruleset
     * Test new ruleset
     * @param testNewInboxRulesetOptions 
     */
    public testNewRuleset(testNewInboxRulesetOptions: TestNewInboxRulesetOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testNewRuleset(testNewInboxRulesetOptions, options);
        return result.toPromise();
    }

    /**
     * Test an inbox or phone ruleset
     * Test a ruleset
     * @param id ID of ruleset
     * @param rulesetTestOptions 
     */
    public testRuleset(id: string, rulesetTestOptions: RulesetTestOptions, options?: Configuration): Promise<InboxRulesetTestResult> {
        const result = this.api.testRuleset(id, rulesetTestOptions, options);
        return result.toPromise();
    }

    /**
     * Test whether inbound emails from an email address would be blocked or allowed by inbox rulesets or test if phone number can receive SMS
     * Test receiving with rulesets
     * @param testRulesetReceivingOptions 
     */
    public testRulesetReceiving(testRulesetReceivingOptions: TestRulesetReceivingOptions, options?: Configuration): Promise<TestRulesetReceivingResult> {
        const result = this.api.testRulesetReceiving(testRulesetReceivingOptions, options);
        return result.toPromise();
    }

    /**
     * Test whether outbound emails to an email address would be blocked or allowed by inbox rulesets or whether a phone number can send SMS
     * Test sending with rulesets
     * @param testInboxRulesetSendingOptions 
     */
    public testRulesetSending(testInboxRulesetSendingOptions: TestInboxRulesetSendingOptions, options?: Configuration): Promise<TestRulesetSendingResult> {
        const result = this.api.testRulesetSending(testInboxRulesetSendingOptions, options);
        return result.toPromise();
    }

    /**
     * Update a ruleset's active state
     * Update a ruleset
     * @param id ID of ruleset
     * @param updateRulesetOptions 
     */
    public updateRuleset(id: string, updateRulesetOptions: UpdateRulesetOptions, options?: Configuration): Promise<RulesetDto> {
        const result = this.api.updateRuleset(id, updateRulesetOptions, options);
        return result.toPromise();
    }


}



import { ObservableSCIMApi } from './ObservableAPI.ts';

import { SCIMApiRequestFactory, SCIMApiResponseProcessor} from "../apis/SCIMApi.ts";
export class PromiseSCIMApi {
    private api: ObservableSCIMApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SCIMApiRequestFactory,
        responseProcessor?: SCIMApiResponseProcessor
    ) {
        this.api = new ObservableSCIMApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param slug 
     * @param scimGroupResource 
     */
    public createGroup(slug: string, scimGroupResource: ScimGroupResource, options?: Configuration): Promise<any> {
        const result = this.api.createGroup(slug, scimGroupResource, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param scimUserResource 
     */
    public createUser(slug: string, scimUserResource: ScimUserResource, options?: Configuration): Promise<any> {
        const result = this.api.createUser(slug, scimUserResource, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param groupId 
     */
    public deleteGroup(slug: string, groupId: string, options?: Configuration): Promise<any> {
        const result = this.api.deleteGroup(slug, groupId, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param userId 
     */
    public deleteUser(slug: string, userId: string, options?: Configuration): Promise<any> {
        const result = this.api.deleteUser(slug, userId, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param groupId 
     */
    public getGroup(slug: string, groupId: string, options?: Configuration): Promise<any> {
        const result = this.api.getGroup(slug, groupId, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param resourceType 
     */
    public getResourceType(slug: string, resourceType: string, options?: Configuration): Promise<any> {
        const result = this.api.getResourceType(slug, resourceType, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     */
    public getResourceTypes(slug: string, options?: Configuration): Promise<any> {
        const result = this.api.getResourceTypes(slug, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param schemaId 
     */
    public getSchema(slug: string, schemaId: string, options?: Configuration): Promise<any> {
        const result = this.api.getSchema(slug, schemaId, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     */
    public getSchemas(slug: string, options?: Configuration): Promise<any> {
        const result = this.api.getSchemas(slug, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     */
    public getServiceProviderConfig(slug: string, options?: Configuration): Promise<any> {
        const result = this.api.getServiceProviderConfig(slug, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param userId 
     */
    public getUser(slug: string, userId: string, options?: Configuration): Promise<any> {
        const result = this.api.getUser(slug, userId, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param filter 
     * @param startIndex 
     * @param count 
     */
    public listGroups(slug: string, filter?: string, startIndex?: number, count?: number, options?: Configuration): Promise<any> {
        const result = this.api.listGroups(slug, filter, startIndex, count, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param filter 
     * @param startIndex 
     * @param count 
     */
    public listUsers(slug: string, filter?: string, startIndex?: number, count?: number, options?: Configuration): Promise<any> {
        const result = this.api.listUsers(slug, filter, startIndex, count, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param groupId 
     * @param scimPatchRequest 
     */
    public patchGroup(slug: string, groupId: string, scimPatchRequest: ScimPatchRequest, options?: Configuration): Promise<any> {
        const result = this.api.patchGroup(slug, groupId, scimPatchRequest, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param userId 
     * @param scimPatchRequest 
     */
    public patchUser(slug: string, userId: string, scimPatchRequest: ScimPatchRequest, options?: Configuration): Promise<any> {
        const result = this.api.patchUser(slug, userId, scimPatchRequest, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param groupId 
     * @param scimGroupResource 
     */
    public replaceGroup(slug: string, groupId: string, scimGroupResource: ScimGroupResource, options?: Configuration): Promise<any> {
        const result = this.api.replaceGroup(slug, groupId, scimGroupResource, options);
        return result.toPromise();
    }

    /**
     * @param slug 
     * @param userId 
     * @param scimUserResource 
     */
    public replaceUser(slug: string, userId: string, scimUserResource: ScimUserResource, options?: Configuration): Promise<any> {
        const result = this.api.replaceUser(slug, userId, scimUserResource, options);
        return result.toPromise();
    }


}



import { ObservableSentEmailsControllerApi } from './ObservableAPI.ts';

import { SentEmailsControllerApiRequestFactory, SentEmailsControllerApiResponseProcessor} from "../apis/SentEmailsControllerApi.ts";
export class PromiseSentEmailsControllerApi {
    private api: ObservableSentEmailsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SentEmailsControllerApiRequestFactory,
        responseProcessor?: SentEmailsControllerApiResponseProcessor
    ) {
        this.api = new ObservableSentEmailsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete all sent email receipts
     */
    public deleteAllSentEmails(options?: Configuration): Promise<void> {
        const result = this.api.deleteAllSentEmails(options);
        return result.toPromise();
    }

    /**
     * Delete sent email receipt
     * @param id 
     */
    public deleteSentEmail(id: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get all sent email tracking pixels in paginated form
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllSentTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllSentTrackingPixels(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email. If your client has issues processing the response it is likely due to the response content-type which is text/plain. If you need a JSON response content-type use the getRawSentEmailJson endpoint
     * Get raw sent email string. Returns unparsed raw SMTP message with headers and body.
     * @param emailId ID of email
     */
    public getRawSentEmailContents(emailId: string, options?: Configuration): Promise<void> {
        const result = this.api.getRawSentEmailContents(emailId, options);
        return result.toPromise();
    }

    /**
     * Returns a raw, unparsed, and unprocessed sent email wrapped in a JSON response object for easier handling when compared with the getRawSentEmail text/plain response
     * Get raw sent email in JSON. Unparsed SMTP message in JSON wrapper format.
     * @param emailId ID of email
     */
    public getRawSentEmailJson(emailId: string, options?: Configuration): Promise<RawEmailJson> {
        const result = this.api.getRawSentEmailJson(emailId, options);
        return result.toPromise();
    }

    /**
     * Get a sent email delivery status
     * @param deliveryId 
     */
    public getSentDeliveryStatus(deliveryId: string, options?: Configuration): Promise<DeliveryStatusDto> {
        const result = this.api.getSentDeliveryStatus(deliveryId, options);
        return result.toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatuses(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getSentDeliveryStatuses(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent email delivery statuses
     * @param sentId ID of the sent email that you want to get the delivery status of. Sent email object is returned when sending an email
     * @param page Optional page index in delivery status list pagination
     * @param size Optional page size in delivery status list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentDeliveryStatusesBySentId(sentId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageDeliveryStatus> {
        const result = this.api.getSentDeliveryStatusesBySentId(sentId, page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get sent email receipt
     * @param id 
     */
    public getSentEmail(id: string, options?: Configuration): Promise<SentEmailDto> {
        const result = this.api.getSentEmail(id, options);
        return result.toPromise();
    }

    /**
     * Get sent email HTML content
     * @param id 
     */
    public getSentEmailHTMLContent(id: string, options?: Configuration): Promise<string> {
        const result = this.api.getSentEmailHTMLContent(id, options);
        return result.toPromise();
    }

    /**
     * Get a list of URLs for sent email content as text/html or raw SMTP message for viewing the message in a browser.
     * Get sent email URL for viewing in browser or downloading
     * @param id 
     */
    public getSentEmailPreviewURLs(id: string, options?: Configuration): Promise<EmailPreviewUrls> {
        const result = this.api.getSentEmailPreviewURLs(id, options);
        return result.toPromise();
    }

    /**
     * Get all tracking pixels for a sent email in paginated form
     * @param id 
     * @param page Optional page index in sent email tracking pixel list pagination
     * @param size Optional page size in sent email tracking pixel list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailTrackingPixels(id: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getSentEmailTrackingPixels(id, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional exact search filter for sent email ID, inbox ID, sender, or reply-to address
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get results of email sent with queues in paginated form
     * @param page Optional page index in inbox sent email list pagination
     * @param size Optional page size in inbox sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentEmailsWithQueueResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailWithQueueProjection> {
        const result = this.api.getSentEmailsWithQueueResults(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get all sent organization emails in paginated form
     * @param inboxId Optional inboxId to filter sender of sent emails by
     * @param page Optional page index in sent email list pagination
     * @param size Optional page size in sent email list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional exact search filter for sent email ID, inbox ID, sender, or reply-to address
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getSentOrganizationEmails(inboxId?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageSentEmailProjection> {
        const result = this.api.getSentOrganizationEmails(inboxId, page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Wait for delivery statuses
     * @param sentId Optional sent email ID filter
     * @param inboxId Optional inbox ID filter
     * @param timeout Optional timeout milliseconds
     * @param index Zero based index of the delivery status to wait for. If 1 delivery status already and you want to wait for the 2nd pass index&#x3D;1
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public waitForDeliveryStatuses(sentId?: string, inboxId?: string, timeout?: number, index?: number, since?: Date, before?: Date, options?: Configuration): Promise<DeliveryStatusDto> {
        const result = this.api.waitForDeliveryStatuses(sentId, inboxId, timeout, index, since, before, options);
        return result.toPromise();
    }


}



import { ObservableSmsControllerApi } from './ObservableAPI.ts';

import { SmsControllerApiRequestFactory, SmsControllerApiResponseProcessor} from "../apis/SmsControllerApi.ts";
export class PromiseSmsControllerApi {
    private api: ObservableSmsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SmsControllerApiRequestFactory,
        responseProcessor?: SmsControllerApiResponseProcessor
    ) {
        this.api = new ObservableSmsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete a sent SMS message
     * Delete sent SMS message.
     * @param sentSmsId 
     */
    public deleteSentSmsMessage(sentSmsId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSentSmsMessage(sentSmsId, options);
        return result.toPromise();
    }

    /**
     * Delete all sent SMS messages or all messages for a given phone number
     * Delete all sent SMS messages
     * @param phoneNumberId 
     */
    public deleteSentSmsMessages(phoneNumberId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSentSmsMessages(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Delete an SMS message
     * Delete SMS message.
     * @param smsId 
     */
    public deleteSmsMessage(smsId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * Delete all SMS messages or all messages for a given phone number
     * Delete all SMS messages
     * @param phoneNumberId 
     */
    public deleteSmsMessages(phoneNumberId?: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteSmsMessages(phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public downloadSmsMedia(mediaId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadSmsMedia(mediaId, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public downloadSmsMediaBase64(mediaId: string, options?: Configuration): Promise<void> {
        const result = this.api.downloadSmsMediaBase64(mediaId, options);
        return result.toPromise();
    }

    /**
     * @param phoneNumber Optional receiving phone number to filter SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     * @param favourite Optionally filter results for favourites only
     * @param include Optional list of IDs to include in result
     */
    public getAllSmsMessages(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, favourite?: boolean, include?: Array<string>, options?: Configuration): Promise<PageSmsProjection> {
        const result = this.api.getAllSmsMessages(phoneNumber, page, size, sort, since, before, search, favourite, include, options);
        return result.toPromise();
    }

    /**
     * Get reply for an SMS message.
     * Get reply for an SMS message
     * @param smsId 
     */
    public getReplyForSmsMessage(smsId: string, options?: Configuration): Promise<ReplyForSms> {
        const result = this.api.getReplyForSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * Get number of sent SMS
     * Get sent SMS count
     */
    public getSentSmsCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getSentSmsCount(options);
        return result.toPromise();
    }

    /**
     * Returns an SMS summary object with content.
     * Get sent SMS content including body. Expects sent SMS to exist by ID.
     * @param sentSmsId 
     */
    public getSentSmsMessage(sentSmsId: string, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.getSentSmsMessage(sentSmsId, options);
        return result.toPromise();
    }

    /**
     * By default returns all SMS messages across all phone numbers sorted by ascending created at date. Responses are paginated. You can restrict results to a list of phone number IDs. You can also filter out read messages
     * Get all SMS messages in all phone numbers in paginated form. .
     * @param phoneNumber Optional phone number to filter sent SMS messages for
     * @param page Optional page index in SMS list pagination
     * @param size Optional page size in SMS list pagination. Maximum size is 100. Use page index and sort to page through larger results
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Optional filter SMSs received after given date time
     * @param before Optional filter SMSs received before given date time
     * @param search Optional search filter
     */
    public getSentSmsMessagesPaginated(phoneNumber?: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, search?: string, options?: Configuration): Promise<PageSentSmsProjection> {
        const result = this.api.getSentSmsMessagesPaginated(phoneNumber, page, size, sort, since, before, search, options);
        return result.toPromise();
    }

    /**
     * Extract one-time passcodes and verification tokens from SMS body content. Deterministic `PATTERN` extraction is available now. Use method flags to control fallback behavior for QA.
     * Extract verification codes from an SMS
     * @param smsId ID of SMS to extract codes from
     * @param extractCodesOptions 
     */
    public getSmsCodes(smsId: string, extractCodesOptions?: ExtractCodesOptions, options?: Configuration): Promise<ExtractCodesResult> {
        const result = this.api.getSmsCodes(smsId, extractCodesOptions, options);
        return result.toPromise();
    }

    /**
     * Get number of SMS
     * Get SMS count
     */
    public getSmsCount(options?: Configuration): Promise<CountDto> {
        const result = this.api.getSmsCount(options);
        return result.toPromise();
    }

    /**
     * @param smsId 
     */
    public getSmsMedia(smsId: string, options?: Configuration): Promise<Array<SmsMessageMediaDto>> {
        const result = this.api.getSmsMedia(smsId, options);
        return result.toPromise();
    }

    /**
     * @param mediaId 
     */
    public getSmsMediaById(mediaId: string, options?: Configuration): Promise<SmsMessageMediaDto> {
        const result = this.api.getSmsMediaById(mediaId, options);
        return result.toPromise();
    }

    /**
     * Returns a SMS summary object with content.
     * Get SMS content including body. Expects SMS to exist by ID. For SMS that may not have arrived yet use the WaitForController.
     * @param smsId 
     */
    public getSmsMessage(smsId: string, options?: Configuration): Promise<SmsDto> {
        const result = this.api.getSmsMessage(smsId, options);
        return result.toPromise();
    }

    /**
     * Get number of SMS unread. Unread means has not been viewed in dashboard or returned in an email API response
     * Get unread SMS count
     */
    public getUnreadSmsCount(options?: Configuration): Promise<UnreadCount> {
        const result = this.api.getUnreadSmsCount(options);
        return result.toPromise();
    }

    /**
     * Sets read state for all SMS messages, optionally scoped to a single phone number. Use `read=false` to reset unread state in bulk.
     * Mark all SMS messages as read or unread
     * @param read 
     * @param phoneNumberId 
     */
    public markAllSmsAsRead(read?: boolean, phoneNumberId?: string, options?: Configuration): Promise<void> {
        const result = this.api.markAllSmsAsRead(read, phoneNumberId, options);
        return result.toPromise();
    }

    /**
     * Sets read state for one SMS message. Useful when building custom inbox flows that need to restore unread state after inspection.
     * Mark an SMS as read or unread
     * @param smsId 
     * @param read 
     */
    public markSmsAsRead(smsId: string, read?: boolean, options?: Configuration): Promise<SmsDto> {
        const result = this.api.markSmsAsRead(smsId, read, options);
        return result.toPromise();
    }

    /**
     * Reply to an SMS message.
     * Send a reply to a received SMS message. Replies are sent from the receiving number.
     * @param smsId 
     * @param smsReplyOptions 
     */
    public replyToSmsMessage(smsId: string, smsReplyOptions: SmsReplyOptions, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.replyToSmsMessage(smsId, smsReplyOptions, options);
        return result.toPromise();
    }

    /**
     * @param smsSendOptions 
     * @param fromPhoneNumber Phone number to send from in E.164 format
     * @param fromPhoneId Phone number ID to send from in UUID form
     */
    public sendSms(smsSendOptions: SmsSendOptions, fromPhoneNumber?: string, fromPhoneId?: string, options?: Configuration): Promise<SentSmsDto> {
        const result = this.api.sendSms(smsSendOptions, fromPhoneNumber, fromPhoneId, options);
        return result.toPromise();
    }

    /**
     * @param smsId ID of SMS to set favourite state
     * @param favourited 
     */
    public setSmsFavourited(smsId: string, favourited: boolean, options?: Configuration): Promise<SmsDto> {
        const result = this.api.setSmsFavourited(smsId, favourited, options);
        return result.toPromise();
    }


}



import { ObservableSpamEmailControllerApi } from './ObservableAPI.ts';

import { SpamEmailControllerApiRequestFactory, SpamEmailControllerApiResponseProcessor} from "../apis/SpamEmailControllerApi.ts";
export class PromiseSpamEmailControllerApi {
    private api: ObservableSpamEmailControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SpamEmailControllerApiRequestFactory,
        responseProcessor?: SpamEmailControllerApiResponseProcessor
    ) {
        this.api = new ObservableSpamEmailControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get blocked inbound spam email records in paginated format
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID filter
     */
    public getAllSpamEmails(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, options?: Configuration): Promise<PageSpamEmailProjection> {
        const result = this.api.getAllSpamEmails(page, size, sort, since, before, inboxId, options);
        return result.toPromise();
    }


}



import { ObservableTemplateControllerApi } from './ObservableAPI.ts';

import { TemplateControllerApiRequestFactory, TemplateControllerApiResponseProcessor} from "../apis/TemplateControllerApi.ts";
export class PromiseTemplateControllerApi {
    private api: ObservableTemplateControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TemplateControllerApiRequestFactory,
        responseProcessor?: TemplateControllerApiResponseProcessor
    ) {
        this.api = new ObservableTemplateControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an email template with variables for use with templated transactional emails.
     * Create a Template
     * @param createTemplateOptions 
     */
    public createTemplate(createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.createTemplate(createTemplateOptions, options);
        return result.toPromise();
    }

    /**
     * Delete template
     * Delete email template
     * @param templateId Template ID
     */
    public deleteTemplate(templateId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all templates in paginated format
     * List templates
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTemplates(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, options?: Configuration): Promise<PageTemplateProjection> {
        const result = this.api.getAllTemplates(page, size, sort, since, before, options);
        return result.toPromise();
    }

    /**
     * Get email template
     * Get template
     * @param templateId Template ID
     */
    public getTemplate(templateId: string, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.getTemplate(templateId, options);
        return result.toPromise();
    }

    /**
     * Get email template preview with passed template variables in HTML format for browsers. Pass template variables as query params.
     * Get template preview HTML
     * @param templateId Template ID
     */
    public getTemplatePreviewHtml(templateId: string, options?: Configuration): Promise<string> {
        const result = this.api.getTemplatePreviewHtml(templateId, options);
        return result.toPromise();
    }

    /**
     * Get email template preview with passed template variables in JSON format. Pass template variables as query params.
     * Get template preview Json
     * @param templateId Template ID
     */
    public getTemplatePreviewJson(templateId: string, options?: Configuration): Promise<TemplatePreview> {
        const result = this.api.getTemplatePreviewJson(templateId, options);
        return result.toPromise();
    }

    /**
     * Get all templates
     * List templates
     */
    public getTemplates(options?: Configuration): Promise<Array<TemplateProjection>> {
        const result = this.api.getTemplates(options);
        return result.toPromise();
    }

    /**
     * Update email template
     * Update template
     * @param templateId Template ID
     * @param createTemplateOptions 
     */
    public updateTemplate(templateId: string, createTemplateOptions: CreateTemplateOptions, options?: Configuration): Promise<TemplateDto> {
        const result = this.api.updateTemplate(templateId, createTemplateOptions, options);
        return result.toPromise();
    }


}



import { ObservableToolsControllerApi } from './ObservableAPI.ts';

import { ToolsControllerApiRequestFactory, ToolsControllerApiResponseProcessor} from "../apis/ToolsControllerApi.ts";
export class PromiseToolsControllerApi {
    private api: ObservableToolsControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ToolsControllerApiRequestFactory,
        responseProcessor?: ToolsControllerApiResponseProcessor
    ) {
        this.api = new ObservableToolsControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Parse and summarize a DMARC aggregate XML report
     * @param analyzeDmarcReportOptions 
     */
    public analyzeDmarcReport(analyzeDmarcReportOptions: AnalyzeDmarcReportOptions, options?: Configuration): Promise<AnalyzeDmarcReportResults> {
        const result = this.api.analyzeDmarcReport(analyzeDmarcReportOptions, options);
        return result.toPromise();
    }

    /**
     * Analyze email headers for auth results and delivery path
     * @param analyzeEmailHeadersOptions 
     */
    public analyzeEmailHeaders(analyzeEmailHeadersOptions: AnalyzeEmailHeadersOptions, options?: Configuration): Promise<AnalyzeEmailHeadersResults> {
        const result = this.api.analyzeEmailHeaders(analyzeEmailHeadersOptions, options);
        return result.toPromise();
    }

    /**
     * Run a one-shot free campaign probe preflight check
     * @param checkCampaignProbeOptions 
     */
    public checkCampaignProbe(checkCampaignProbeOptions: CheckCampaignProbeOptions, options?: Configuration): Promise<CheckCampaignProbeResults> {
        const result = this.api.checkCampaignProbe(checkCampaignProbeOptions, options);
        return result.toPromise();
    }

    /**
     * Check DNS propagation for a host and record type across configured resolvers
     * @param checkDnsPropagationOptions 
     */
    public checkDnsPropagation(checkDnsPropagationOptions: CheckDnsPropagationOptions, options?: Configuration): Promise<CheckDnsPropagationResults> {
        const result = this.api.checkDnsPropagation(checkDnsPropagationOptions, options);
        return result.toPromise();
    }

    /**
     * Run a one-shot free domain monitor posture check
     * @param checkDomainMonitorOptions 
     */
    public checkDomainMonitor(checkDomainMonitorOptions: CheckDomainMonitorOptions, options?: Configuration): Promise<CheckDomainMonitorResults> {
        const result = this.api.checkDomainMonitor(checkDomainMonitorOptions, options);
        return result.toPromise();
    }

    /**
     * Run a one-shot free email audit across links, images, HTML, and client support
     * @param checkEmailAuditOptions 
     */
    public checkEmailAudit(checkEmailAuditOptions: CheckEmailAuditOptions, options?: Configuration): Promise<EmailAuditAnalysisResult> {
        const result = this.api.checkEmailAudit(checkEmailAuditOptions, options);
        return result.toPromise();
    }

    /**
     * Run a one-shot combined SPF, DKIM, DMARC, BIMI, MX, MTA-STS, and TLS-RPT check
     * @param checkEmailAuthStackOptions 
     */
    public checkEmailAuthStack(checkEmailAuthStackOptions: CheckEmailAuthStackOptions, options?: Configuration): Promise<CheckEmailAuthStackResults> {
        const result = this.api.checkEmailAuthStack(checkEmailAuthStackOptions, options);
        return result.toPromise();
    }

    /**
     * Check whether a domain or IP appears on configured DNS blacklists
     * @param checkEmailBlacklistOptions 
     */
    public checkEmailBlacklist(checkEmailBlacklistOptions: CheckEmailBlacklistOptions, options?: Configuration): Promise<CheckEmailBlacklistResults> {
        const result = this.api.checkEmailBlacklist(checkEmailBlacklistOptions, options);
        return result.toPromise();
    }

    /**
     * Check email client support for email HTML and CSS features
     * @param checkEmailFeaturesClientSupportOptions 
     */
    public checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions: CheckEmailFeaturesClientSupportOptions, options?: Configuration): Promise<CheckEmailFeaturesClientSupportResults> {
        const result = this.api.checkEmailFeaturesClientSupport(checkEmailFeaturesClientSupportOptions, options);
        return result.toPromise();
    }

    /**
     * Create a new email address using the fake email domains
     */
    public createNewFakeEmailAddress(options?: Configuration): Promise<NewFakeEmailAddressResult> {
        const result = this.api.createNewFakeEmailAddress(options);
        return result.toPromise();
    }

    /**
     * Creates an unauthenticated free email render test and returns a short-lived generated email address.
     * Create a public email render test
     * @param createPublicDeviceRenderTestOptions 
     */
    public createPublicDeviceRenderTest(createPublicDeviceRenderTestOptions: CreatePublicDeviceRenderTestOptions, options?: Configuration): Promise<PublicDeviceRenderTestDto> {
        const result = this.api.createPublicDeviceRenderTest(createPublicDeviceRenderTestOptions, options);
        return result.toPromise();
    }

    /**
     * Create an unauthenticated inbox placement run for public tools users. Returns seed addresses and a tracking token immediately.
     * Create a public spam test
     * @param createPublicSpamTestOptions 
     */
    public createPublicSpamTest(createPublicSpamTestOptions: CreatePublicSpamTestOptions, options?: Configuration): Promise<PublicSpamTestRunDto> {
        const result = this.api.createPublicSpamTest(createPublicSpamTestOptions, options);
        return result.toPromise();
    }

    /**
     * Delete a fake email address using the fake email domains
     * Delete a fake email address using the fake email domains
     * @param emailAddress 
     */
    public deleteNewFakeEmailAddress(emailAddress: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteNewFakeEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Create a BIMI record policy
     * @param generateBimiRecordOptions 
     */
    public generateBimiRecord(generateBimiRecordOptions: GenerateBimiRecordOptions, options?: Configuration): Promise<GenerateBimiRecordResults> {
        const result = this.api.generateBimiRecord(generateBimiRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a DMARC record policy
     * @param generateDmarcRecordOptions 
     */
    public generateDmarcRecord(generateDmarcRecordOptions: GenerateDmarcRecordOptions, options?: Configuration): Promise<GenerateDmarcRecordResults> {
        const result = this.api.generateDmarcRecord(generateDmarcRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a TLS reporting record policy
     * @param generateMtaStsRecordOptions 
     */
    public generateMtaStsRecord(generateMtaStsRecordOptions: GenerateMtaStsRecordOptions, options?: Configuration): Promise<GenerateMtaStsRecordResults> {
        const result = this.api.generateMtaStsRecord(generateMtaStsRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create an SPF record
     * @param generateSpfRecordOptions 
     */
    public generateSpfRecord(generateSpfRecordOptions: GenerateSpfRecordOptions, options?: Configuration): Promise<GenerateSpfRecordResults> {
        const result = this.api.generateSpfRecord(generateSpfRecordOptions, options);
        return result.toPromise();
    }

    /**
     * Create a TLS reporting record policy
     * @param generateTlsReportingRecordOptions 
     */
    public generateTlsReportingRecord(generateTlsReportingRecordOptions: GenerateTlsReportingRecordOptions, options?: Configuration): Promise<GenerateTlsReportingRecordResults> {
        const result = this.api.generateTlsReportingRecord(generateTlsReportingRecordOptions, options);
        return result.toPromise();
    }

    /**
     * @param emailAddress 
     */
    public getFakeEmailByEmailAddress(emailAddress: string, options?: Configuration): Promise<FakeEmailResult> {
        const result = this.api.getFakeEmailByEmailAddress(emailAddress, options);
        return result.toPromise();
    }

    /**
     * Get a fake email by its ID
     * Get a fake email by its ID
     * @param id 
     */
    public getFakeEmailById(id: string, options?: Configuration): Promise<FakeEmailResult> {
        const result = this.api.getFakeEmailById(id, options);
        return result.toPromise();
    }

    /**
     * Retrieve the raw content of a fake email by its ID
     * Get raw fake email content
     * @param id 
     */
    public getFakeEmailRaw(id: string, options?: Configuration): Promise<string> {
        const result = this.api.getFakeEmailRaw(id, options);
        return result.toPromise();
    }

    /**
     * Get fake emails for an address
     * Get fake emails for an address
     * @param emailAddress 
     * @param page 
     */
    public getFakeEmailsForAddress(emailAddress: string, page?: number, options?: Configuration): Promise<Array<FakeEmailPreview>> {
        const result = this.api.getFakeEmailsForAddress(emailAddress, page, options);
        return result.toPromise();
    }

    /**
     * Returns the currently healthy target choices exposed by the free email render tool.
     * List available public email render targets
     */
    public getPublicDeviceRenderTargets(options?: Configuration): Promise<PublicDeviceRenderTargetListDto> {
        const result = this.api.getPublicDeviceRenderTargets(options);
        return result.toPromise();
    }

    /**
     * Returns status for a free email render test and the public share redirect when the render run is ready.
     * Get a public email render test
     * @param id 
     */
    public getPublicDeviceRenderTest(id: string, options?: Configuration): Promise<PublicDeviceRenderTestDto> {
        const result = this.api.getPublicDeviceRenderTest(id, options);
        return result.toPromise();
    }

    /**
     * Get light and dark public email preview content
     * @param id 
     */
    public getPublicEmailPreviewContent(id: string, options?: Configuration): Promise<PublicEmailPreviewContentDto> {
        const result = this.api.getPublicEmailPreviewContent(id, options);
        return result.toPromise();
    }

    /**
     * Returns public spam test run status, token, seed addresses, and free-limit state.
     * Get a public spam test run
     * @param id 
     */
    public getPublicSpamTest(id: string, options?: Configuration): Promise<PublicSpamTestRunDto> {
        const result = this.api.getPublicSpamTest(id, options);
        return result.toPromise();
    }

    /**
     * Returns public spam test run status and any available inbox placement results.
     * Get public spam test results
     * @param id 
     */
    public getPublicSpamTestResults(id: string, options?: Configuration): Promise<PublicSpamTestResultsDto> {
        const result = this.api.getPublicSpamTestResults(id, options);
        return result.toPromise();
    }

    /**
     * Lookup a BIMI record policy
     * @param lookupBimiDomainOptions 
     */
    public lookupBimiDomain(lookupBimiDomainOptions: LookupBimiDomainOptions, options?: Configuration): Promise<LookupBimiDomainResults> {
        const result = this.api.lookupBimiDomain(lookupBimiDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup and validate a DKIM record
     * @param lookupDkimDomainOptions 
     */
    public lookupDkimDomain(lookupDkimDomainOptions: LookupDkimDomainOptions, options?: Configuration): Promise<LookupDkimDomainResults> {
        const result = this.api.lookupDkimDomain(lookupDkimDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a DMARC record policy
     * @param lookupDmarcDomainOptions 
     */
    public lookupDmarcDomain(lookupDmarcDomainOptions: LookupDmarcDomainOptions, options?: Configuration): Promise<LookupDmarcDomainResults> {
        const result = this.api.lookupDmarcDomain(lookupDmarcDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a MTA-STS domain policy
     * @param lookupMtaStsDomainOptions 
     */
    public lookupMtaStsDomain(lookupMtaStsDomainOptions: LookupMtaStsDomainOptions, options?: Configuration): Promise<LookupMtaStsDomainResults> {
        const result = this.api.lookupMtaStsDomain(lookupMtaStsDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a MX records for a domain
     * @param lookupMxRecordsOptions 
     */
    public lookupMxRecord(lookupMxRecordsOptions: LookupMxRecordsOptions, options?: Configuration): Promise<LookupMxRecordsResults> {
        const result = this.api.lookupMxRecord(lookupMxRecordsOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup PTR records for an IP address
     * @param lookupPtrOptions 
     */
    public lookupPtr(lookupPtrOptions: LookupPtrOptions, options?: Configuration): Promise<LookupPtrResults> {
        const result = this.api.lookupPtr(lookupPtrOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup and validate an SPF record
     * @param lookupSpfDomainOptions 
     */
    public lookupSpfDomain(lookupSpfDomainOptions: LookupSpfDomainOptions, options?: Configuration): Promise<LookupSpfDomainResults> {
        const result = this.api.lookupSpfDomain(lookupSpfDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Lookup a TLS reporting domain policy
     * @param lookupTlsReportingDomainOptions 
     */
    public lookupTlsReportingDomain(lookupTlsReportingDomainOptions: LookupTlsReportingDomainOptions, options?: Configuration): Promise<LookupTlsReportingDomainResults> {
        const result = this.api.lookupTlsReportingDomain(lookupTlsReportingDomainOptions, options);
        return result.toPromise();
    }

    /**
     * Submit an EML file to a public email render test
     * @param id 
     */
    public submitPublicDeviceRenderEml(id: string, options?: Configuration): Promise<PublicDeviceRenderTestDto> {
        const result = this.api.submitPublicDeviceRenderEml(id, options);
        return result.toPromise();
    }

    /**
     * Submit HTML to a public email render test
     * @param id 
     * @param submitPublicDeviceRenderHtmlOptions 
     */
    public submitPublicDeviceRenderHtml(id: string, submitPublicDeviceRenderHtmlOptions: SubmitPublicDeviceRenderHtmlOptions, options?: Configuration): Promise<PublicDeviceRenderTestDto> {
        const result = this.api.submitPublicDeviceRenderHtml(id, submitPublicDeviceRenderHtmlOptions, options);
        return result.toPromise();
    }

    /**
     * Records that the caller sent an email to the generated address so submission and delivery failures can be distinguished from setup abandonment.
     * Mark a public email render test as submitted
     * @param id 
     */
    public submitPublicDeviceRenderTest(id: string, options?: Configuration): Promise<PublicDeviceRenderTestDto> {
        const result = this.api.submitPublicDeviceRenderTest(id, options);
        return result.toPromise();
    }

    /**
     * Marks a previously created public spam test as submitted after the caller has sent the test email to the seed addresses.
     * Mark a public spam test as submitted
     * @param id 
     * @param submitPublicSpamTestOptions 
     */
    public submitPublicSpamTest(id: string, submitPublicSpamTestOptions: SubmitPublicSpamTestOptions, options?: Configuration): Promise<PublicSpamTestRunDto> {
        const result = this.api.submitPublicSpamTest(id, submitPublicSpamTestOptions, options);
        return result.toPromise();
    }

    /**
     * Run a conservative SMTP connectivity, TLS, and AUTH diagnostic
     * @param testSmtpServerOptions 
     */
    public testSmtpServer(testSmtpServerOptions: TestSmtpServerOptions, options?: Configuration): Promise<TestSmtpServerResults> {
        const result = this.api.testSmtpServer(testSmtpServerOptions, options);
        return result.toPromise();
    }


}



import { ObservableTrackingControllerApi } from './ObservableAPI.ts';

import { TrackingControllerApiRequestFactory, TrackingControllerApiResponseProcessor} from "../apis/TrackingControllerApi.ts";
export class PromiseTrackingControllerApi {
    private api: ObservableTrackingControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TrackingControllerApiRequestFactory,
        responseProcessor?: TrackingControllerApiResponseProcessor
    ) {
        this.api = new ObservableTrackingControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create a tracking pixel. A tracking pixel is an image that can be embedded in an email. When the email is viewed and the image is seen MailSlurp will mark the pixel as seen. Use tracking pixels to monitor email open events. You can receive open notifications via webhook or by fetching the pixel.
     * Create tracking pixel
     * @param createTrackingPixelOptions 
     */
    public createTrackingPixel(createTrackingPixelOptions: CreateTrackingPixelOptions, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.createTrackingPixel(createTrackingPixelOptions, options);
        return result.toPromise();
    }

    /**
     * List tracking pixels in paginated form
     * Get tracking pixels
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     */
    public getAllTrackingPixels(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, options?: Configuration): Promise<PageTrackingPixelProjection> {
        const result = this.api.getAllTrackingPixels(page, size, sort, searchFilter, since, before, options);
        return result.toPromise();
    }

    /**
     * Get pixel
     * @param id 
     */
    public getTrackingPixel(id: string, options?: Configuration): Promise<TrackingPixelDto> {
        const result = this.api.getTrackingPixel(id, options);
        return result.toPromise();
    }


}



import { ObservableUserControllerApi } from './ObservableAPI.ts';

import { UserControllerApiRequestFactory, UserControllerApiResponseProcessor} from "../apis/UserControllerApi.ts";
export class PromiseUserControllerApi {
    private api: ObservableUserControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserControllerApiRequestFactory,
        responseProcessor?: UserControllerApiResponseProcessor
    ) {
        this.api = new ObservableUserControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create an inbox retention policy for your account
     * @param createInboxRetentionPolicyOptions 
     */
    public createInboxRetentionPolicy(createInboxRetentionPolicyOptions: CreateInboxRetentionPolicyOptions, options?: Configuration): Promise<InboxRetentionPolicyDto> {
        const result = this.api.createInboxRetentionPolicy(createInboxRetentionPolicyOptions, options);
        return result.toPromise();
    }

    /**
     * Start an asynchronous inbox retention policy run for your account
     */
    public createInboxRetentionPolicyRun(options?: Configuration): Promise<InboxRetentionPolicyRunDto> {
        const result = this.api.createInboxRetentionPolicyRun(options);
        return result.toPromise();
    }

    /**
     * Create inbox retention policy for your global account
     * @param createInboxRetentionPolicyForAccountOptions 
     */
    public createOrUpdateInboxRetentionPolicyForAccount(createInboxRetentionPolicyForAccountOptions: CreateInboxRetentionPolicyForAccountOptions, options?: Configuration): Promise<InboxRetentionPolicyDto> {
        const result = this.api.createOrUpdateInboxRetentionPolicyForAccount(createInboxRetentionPolicyForAccountOptions, options);
        return result.toPromise();
    }

    /**
     * Delete an inbox retention policy for your account
     * @param policyId 
     */
    public deleteInboxRetentionPolicy(policyId: string, options?: Configuration): Promise<EmptyResponseDto> {
        const result = this.api.deleteInboxRetentionPolicy(policyId, options);
        return result.toPromise();
    }

    /**
     * Delete inbox retention policy for your global account
     */
    public deleteInboxRetentionPolicyForAccount(options?: Configuration): Promise<EmptyResponseDto> {
        const result = this.api.deleteInboxRetentionPolicyForAccount(options);
        return result.toPromise();
    }

    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param phoneId Optional phone ID
     * @param filter Optional automation type filter
     */
    public getEntityAutomations(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, phoneId?: string, filter?: 'INBOX_FORWARDER' | 'INBOX_REPLIER' | 'INBOX_RULESET', options?: Configuration): Promise<PageEntityAutomationItems> {
        const result = this.api.getEntityAutomations(page, size, sort, since, before, inboxId, phoneId, filter, options);
        return result.toPromise();
    }

    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param inboxId Optional inbox ID
     * @param emailId Optional email ID
     * @param phoneId Optional phone ID
     * @param smsId Optional SMS ID
     * @param attachmentId Optional attachment ID
     * @param filter Optional type filter
     */
    public getEntityEvents(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, inboxId?: string, emailId?: string, phoneId?: string, smsId?: string, attachmentId?: string, filter?: 'WEBHOOK_EVENT' | 'INBOX_FORWARDER_EVENT' | 'INBOX_REPLIER_EVENT' | 'INBOX_RULESET_EVENT' | 'ALIAS_EVENT', options?: Configuration): Promise<PageEntityEventItems> {
        const result = this.api.getEntityEvents(page, size, sort, since, before, inboxId, emailId, phoneId, smsId, attachmentId, filter, options);
        return result.toPromise();
    }

    /**
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param filter Optional type filter
     */
    public getEntityFavorites(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, filter?: 'INBOX' | 'EMAIL' | 'ATTACHMENT' | 'PHONE' | 'SMS', options?: Configuration): Promise<PageEntityFavouriteItems> {
        const result = this.api.getEntityFavorites(page, size, sort, since, before, filter, options);
        return result.toPromise();
    }

    /**
     * Get an inbox retention policy for your account
     * @param policyId 
     */
    public getInboxRetentionPolicy(policyId: string, options?: Configuration): Promise<InboxRetentionPolicyDto> {
        const result = this.api.getInboxRetentionPolicy(policyId, options);
        return result.toPromise();
    }

    /**
     * Get inbox retention policy for your global account
     */
    public getInboxRetentionPolicyForAccount(options?: Configuration): Promise<InboxRetentionPolicyOptionalDto> {
        const result = this.api.getInboxRetentionPolicyForAccount(options);
        return result.toPromise();
    }

    /**
     * Get a previously submitted inbox retention policy run for your account
     * @param runId 
     */
    public getInboxRetentionPolicyRun(runId: string, options?: Configuration): Promise<InboxRetentionPolicyRunDto> {
        const result = this.api.getInboxRetentionPolicyRun(runId, options);
        return result.toPromise();
    }

    /**
     * List recent inbox retention policy runs for your account
     * @param page Optional page index
     * @param size Optional page size
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getInboxRetentionPolicyRuns(page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<PageInboxRetentionPolicyRunProjection> {
        const result = this.api.getInboxRetentionPolicyRuns(page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Utility function to extract properties from JSON objects in language where this is cumbersome.
     * @param property JSON property name or dot separated path selector such as &#x60;a.b.c&#x60;
     * @param jsonNode 
     */
    public getJsonPropertyAsString(property: string, jsonNode: JsonNode, options?: Configuration): Promise<string> {
        const result = this.api.getJsonPropertyAsString(property, jsonNode, options);
        return result.toPromise();
    }

    /**
     * Get account information for your user
     */
    public getUserInfo(options?: Configuration): Promise<UserInfoDto> {
        const result = this.api.getUserInfo(options);
        return result.toPromise();
    }

    /**
     * Get retained storage usage insights for your account
     * @param limit Maximum number of inboxes and domains to return
     */
    public getUserStorageInsights(limit?: number, options?: Configuration): Promise<UserStorageInsightsDto> {
        const result = this.api.getUserStorageInsights(limit, options);
        return result.toPromise();
    }

    /**
     * List inbox retention policies for your account
     */
    public listInboxRetentionPolicies(options?: Configuration): Promise<InboxRetentionPoliciesDto> {
        const result = this.api.listInboxRetentionPolicies(options);
        return result.toPromise();
    }

    /**
     * Update an inbox retention policy for your account
     * @param policyId 
     * @param updateInboxRetentionPolicyOptions 
     */
    public updateInboxRetentionPolicy(policyId: string, updateInboxRetentionPolicyOptions: UpdateInboxRetentionPolicyOptions, options?: Configuration): Promise<InboxRetentionPolicyDto> {
        const result = this.api.updateInboxRetentionPolicy(policyId, updateInboxRetentionPolicyOptions, options);
        return result.toPromise();
    }


}



import { ObservableWaitForControllerApi } from './ObservableAPI.ts';

import { WaitForControllerApiRequestFactory, WaitForControllerApiResponseProcessor} from "../apis/WaitForControllerApi.ts";
export class PromiseWaitForControllerApi {
    private api: ObservableWaitForControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WaitForControllerApiRequestFactory,
        responseProcessor?: WaitForControllerApiResponseProcessor
    ) {
        this.api = new ObservableWaitForControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Generic waitFor method that will wait until an inbox meets given conditions or return immediately if already met
     * Wait for an email to match the provided filter conditions such as subject contains keyword.
     * @param waitForConditions 
     */
    public waitFor(waitForConditions: WaitForConditions, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitFor(waitForConditions, options);
        return result.toPromise();
    }

    /**
     * If inbox contains count or more emails at time of request then return count worth of emails. If not wait until the count is reached and return those or return an error if timeout is exceeded.
     * Wait for and return count number of emails. Hold connection until inbox count matches expected or timeout occurs
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater that 1
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForEmailCount(inboxId: string, count: number, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForEmailCount(inboxId, count, timeout, unreadOnly, before, since, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Will return either the last received email or wait for an email to arrive and return that. If you need to wait for an email for a non-empty inbox set `unreadOnly=true` or see the other receive methods such as `waitForNthEmail` or `waitForEmailCount`.
     * Fetch inbox's latest email or if empty wait for an email to arrive
     * @param inboxId Id of the inbox we are fetching emails from
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only.
     * @param before Filter for emails that were before after the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForLatestEmail(inboxId?: string, timeout?: number, unreadOnly?: boolean, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForLatestEmail(inboxId, timeout, unreadOnly, before, since, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Wait until a phone number meets given conditions or return immediately if already met
     * Wait for the latest SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSingleSmsOptions 
     */
    public waitForLatestSms(waitForSingleSmsOptions: WaitForSingleSmsOptions, options?: Configuration): Promise<SmsDto> {
        const result = this.api.waitForLatestSms(waitForSingleSmsOptions, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If results match expected count then return or else retry the search until results are found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait or return list of emails that match simple matching patterns
     * @param inboxId Id of the inbox we are fetching emails from
     * @param count Number of emails to wait for. Must be greater or equal to 1
     * @param matchOptions 
     * @param before Filter for emails that were received before the given timestamp
     * @param since Filter for emails that were received after the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     */
    public waitForMatchingEmails(inboxId: string, count: number, matchOptions: MatchOptions, before?: Date, since?: Date, sort?: 'ASC' | 'DESC', delay?: number, timeout?: number, unreadOnly?: boolean, options?: Configuration): Promise<Array<EmailPreview>> {
        const result = this.api.waitForMatchingEmails(inboxId, count, matchOptions, before, since, sort, delay, timeout, unreadOnly, options);
        return result.toPromise();
    }

    /**
     * Perform a search of emails in an inbox with the given patterns. If a result if found then return or else retry the search until a result is found or timeout is reached. Match options allow simple CONTAINS or EQUALS filtering on SUBJECT, TO, BCC, CC, and FROM. See the `MatchOptions` object for options. An example payload is `{ matches: [{field: 'SUBJECT',should:'CONTAIN',value:'needle'}] }`. You can use an array of matches and they will be applied sequentially to filter out emails. If you want to perform matches and extractions of content using Regex patterns see the EmailController `getEmailContentMatch` method.
     * Wait for or return the first email that matches provided MatchOptions array
     * @param inboxId Id of the inbox we are matching an email for
     * @param matchOptions 
     * @param timeout Max milliseconds to wait
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForMatchingFirstEmail(inboxId: string, matchOptions: MatchOptions, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForMatchingFirstEmail(inboxId, matchOptions, timeout, unreadOnly, since, before, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Wait-controller alias of the AI message wait. Shares the same contract, billing, deadline, source authorization and Idempotency-Key namespace.
     * Wait for AI-matched email or SMS
     * @param waitForAIMessageOptions 
     * @param idempotencyKey 
     */
    public waitForMessageAI(waitForAIMessageOptions: WaitForAIMessageOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessageResult> {
        const result = this.api.waitForMessageAI(waitForAIMessageOptions, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * Wait-controller alias of the AI message wait. Shares the same contract, billing, deadline, source authorization and Idempotency-Key namespace.
     * Wait for AI-matched email or SMS
     * @param waitForAIMessagesOptions 
     * @param idempotencyKey 
     */
    public waitForMessagesAI(waitForAIMessagesOptions: WaitForAIMessagesOptions, idempotencyKey?: string, options?: Configuration): Promise<AIMessagesResult> {
        const result = this.api.waitForMessagesAI(waitForAIMessagesOptions, idempotencyKey, options);
        return result.toPromise();
    }

    /**
     * If nth email is already present in inbox then return it. If not hold the connection open until timeout expires or the nth email is received and returned.
     * Wait for or fetch the email with a given index in the inbox specified. If index doesn't exist waits for it to exist or timeout to occur.
     * @param inboxId Id of the inbox you are fetching emails from
     * @param index Zero based index of the email to wait for. If an inbox has 1 email already and you want to wait for the 2nd email pass index&#x3D;1
     * @param timeout Max milliseconds to wait for the nth email if not already present
     * @param unreadOnly Optional filter for unread only
     * @param since Filter for emails that were received after the given timestamp
     * @param before Filter for emails that were received before the given timestamp
     * @param sort Sort direction
     * @param delay Max milliseconds delay between calls
     */
    public waitForNthEmail(inboxId?: string, index?: number, timeout?: number, unreadOnly?: boolean, since?: Date, before?: Date, sort?: 'ASC' | 'DESC', delay?: number, options?: Configuration): Promise<Email> {
        const result = this.api.waitForNthEmail(inboxId, index, timeout, unreadOnly, since, before, sort, delay, options);
        return result.toPromise();
    }

    /**
     * Generic waitFor method that will wait until a phone number meets given conditions or return immediately if already met
     * Wait for an SMS message to match the provided filter conditions such as body contains keyword.
     * @param waitForSmsConditions 
     */
    public waitForSms(waitForSmsConditions: WaitForSmsConditions, options?: Configuration): Promise<Array<SmsPreview>> {
        const result = this.api.waitForSms(waitForSmsConditions, options);
        return result.toPromise();
    }


}



import { ObservableWebhookControllerApi } from './ObservableAPI.ts';

import { WebhookControllerApiRequestFactory, WebhookControllerApiResponseProcessor} from "../apis/WebhookControllerApi.ts";
export class PromiseWebhookControllerApi {
    private api: ObservableWebhookControllerApi

    public constructor(
        configuration: Configuration,
        requestFactory?: WebhookControllerApiRequestFactory,
        responseProcessor?: WebhookControllerApiResponseProcessor
    ) {
        this.api = new ObservableWebhookControllerApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Get notified of account level events such as bounce and bounce recipient.
     * Attach a WebHook URL to an inbox
     * @param createWebhookOptions 
     */
    public createAccountWebhook(createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createAccountWebhook(createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Get notified whenever an inbox receives an email via a WebHook URL. An emailID will be posted to this URL every time an email is received for this inbox. The URL must be publicly reachable by the MailSlurp server. You can provide basicAuth values if you wish to secure this endpoint.
     * Attach a WebHook URL to an inbox
     * @param inboxId 
     * @param createWebhookOptions 
     */
    public createWebhook(inboxId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhook(inboxId, createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Get notified whenever AI transformation pipeline converts and email or SMS into structured data via a WebHook URL.
     * Attach a WebHook URL to an AI transformer
     * @param transformerId 
     * @param createWebhookOptions 
     */
    public createWebhookForAITransformer(transformerId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhookForAITransformer(transformerId, createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Get notified whenever a phone number receives an SMS via a WebHook URL.
     * Attach a WebHook URL to a phone number
     * @param phoneNumberId 
     * @param createWebhookOptions 
     */
    public createWebhookForPhoneNumber(phoneNumberId: string, createWebhookOptions: CreateWebhookOptions, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.createWebhookForPhoneNumber(phoneNumberId, createWebhookOptions, options);
        return result.toPromise();
    }

    /**
     * Delete all webhooks
     * @param before before
     */
    public deleteAllWebhooks(before?: Date, options?: Configuration): Promise<void> {
        const result = this.api.deleteAllWebhooks(before, options);
        return result.toPromise();
    }

    /**
     * Delete and disable a Webhook for an Inbox
     * @param inboxId 
     * @param webhookId 
     */
    public deleteWebhook(inboxId: string, webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhook(inboxId, webhookId, options);
        return result.toPromise();
    }

    /**
     * Delete a webhook
     * @param webhookId 
     */
    public deleteWebhookById(webhookId: string, options?: Configuration): Promise<void> {
        const result = this.api.deleteWebhookById(webhookId, options);
        return result.toPromise();
    }

    /**
     * List account webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List account webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Optional event type
     * @param health Filter by webhook health
     * @param searchFilter Optional search filter
     */
    public getAllAccountWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', health?: 'HEALTHY' | 'UNHEALTHY', searchFilter?: string, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllAccountWebhooks(page, size, sort, since, before, eventType, health, searchFilter, options);
        return result.toPromise();
    }

    /**
     * List webhooks URL in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks endpoints Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param inboxId Filter by inboxId
     * @param phoneId Filter by phoneId
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     */
    public getAllWebhookEndpoints(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, inboxId?: string, phoneId?: string, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Promise<PageWebhookEndpointProjection> {
        const result = this.api.getAllWebhookEndpoints(page, size, sort, searchFilter, since, inboxId, phoneId, before, health, eventType, options);
        return result.toPromise();
    }

    /**
     * Get results for all webhooks
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     * @param aiTransformerId AI Transformer ID
     */
    public getAllWebhookResults(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'EXHAUSTED' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, aiTransformerId?: string, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getAllWebhookResults(page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, aiTransformerId, options);
        return result.toPromise();
    }

    /**
     * List webhooks in paginated form. Allows for page index, page size, and sort direction.
     * List Webhooks Paginated
     * @param page Optional page index in list pagination
     * @param size Optional page size for paginated result list.
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param inboxId Filter by inboxId
     * @param aiTransformerId Filter by aiTransformerId
     * @param phoneId Filter by phoneId
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     * @param url Optional url endpoint filter
     * @param eventTypeSource Webhook source type category such as phone, inbox, aiTranformer
     * @param includeAccountWide Include account scope webhooks when passing phoneId, inboxId, or aiTransformerId filters
     */
    public getAllWebhooks(page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, inboxId?: string, aiTransformerId?: string, phoneId?: string, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', url?: string, eventTypeSource?: 'INBOX' | 'PHONE' | 'AI_TRANSFORMER', includeAccountWide?: boolean, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getAllWebhooks(page, size, sort, searchFilter, since, inboxId, aiTransformerId, phoneId, before, health, eventType, url, eventTypeSource, includeAccountWide, options);
        return result.toPromise();
    }

    /**
     * Get paginated webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param health Filter by webhook health
     * @param eventType Optional event type
     * @param includeAccountWide Include account scope inbox webhooks
     */
    public getInboxWebhooksPaginated(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, health?: 'HEALTHY' | 'UNHEALTHY', eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', includeAccountWide?: boolean, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getInboxWebhooksPaginated(inboxId, page, size, sort, searchFilter, since, before, health, eventType, includeAccountWide, options);
        return result.toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload by event
     * @param event 
     */
    public getJsonSchemaForWebhookEvent(event: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Promise<JSONSchemaDto> {
        const result = this.api.getJsonSchemaForWebhookEvent(event, options);
        return result.toPromise();
    }

    /**
     * Get JSON Schema definition for webhook payload
     * @param webhookId 
     */
    public getJsonSchemaForWebhookPayload(webhookId: string, options?: Configuration): Promise<JSONSchemaDto> {
        const result = this.api.getJsonSchemaForWebhookPayload(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get paginated webhooks for a phone number
     * @param phoneId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param eventType Optional event type
     * @param searchFilter Optional search filter
     * @param health Filter by webhook health
     * @param includeAccountWide Include account scope phone webhooks
     */
    public getPhoneNumberWebhooksPaginated(phoneId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', since?: Date, before?: Date, eventType?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', searchFilter?: string, health?: 'HEALTHY' | 'UNHEALTHY', includeAccountWide?: boolean, options?: Configuration): Promise<PageWebhookProjection> {
        const result = this.api.getPhoneNumberWebhooksPaginated(phoneId, page, size, sort, since, before, eventType, searchFilter, health, includeAccountWide, options);
        return result.toPromise();
    }

    /**
     * Get test webhook payload example. Response content depends on eventName passed. Uses `EMAIL_RECEIVED` as default.
     * @param eventName 
     */
    public getTestWebhookPayload(eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', options?: Configuration): Promise<AbstractWebhookPayload> {
        const result = this.api.getTestWebhookPayload(eventName, options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for bounce
     */
    public getTestWebhookPayloadBounce(options?: Configuration): Promise<WebhookBouncePayload> {
        const result = this.api.getTestWebhookPayloadBounce(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for bounce recipient
     */
    public getTestWebhookPayloadBounceRecipient(options?: Configuration): Promise<WebhookBounceRecipientPayload> {
        const result = this.api.getTestWebhookPayloadBounceRecipient(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for delivery status event
     */
    public getTestWebhookPayloadDeliveryStatus(options?: Configuration): Promise<WebhookDeliveryStatusPayload> {
        const result = this.api.getTestWebhookPayloadDeliveryStatus(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailOpened(options?: Configuration): Promise<WebhookEmailOpenedPayload> {
        const result = this.api.getTestWebhookPayloadEmailOpened(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for email opened event
     */
    public getTestWebhookPayloadEmailRead(options?: Configuration): Promise<WebhookEmailReadPayload> {
        const result = this.api.getTestWebhookPayloadEmailRead(options);
        return result.toPromise();
    }

    /**
     * Get example payload for webhook
     * @param webhookId 
     */
    public getTestWebhookPayloadForWebhook(webhookId: string, options?: Configuration): Promise<AbstractWebhookPayload> {
        const result = this.api.getTestWebhookPayloadForWebhook(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new ai transform result event
     */
    public getTestWebhookPayloadNewAITransformResult(options?: Configuration): Promise<WebhookNewAITransformResultPayload> {
        const result = this.api.getTestWebhookPayloadNewAITransformResult(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new attachment event
     */
    public getTestWebhookPayloadNewAttachment(options?: Configuration): Promise<WebhookNewAttachmentPayload> {
        const result = this.api.getTestWebhookPayloadNewAttachment(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new contact event
     */
    public getTestWebhookPayloadNewContact(options?: Configuration): Promise<WebhookNewContactPayload> {
        const result = this.api.getTestWebhookPayloadNewContact(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new email event
     */
    public getTestWebhookPayloadNewEmail(options?: Configuration): Promise<WebhookNewEmailPayload> {
        const result = this.api.getTestWebhookPayloadNewEmail(options);
        return result.toPromise();
    }

    /**
     * Get webhook test payload for new sms event
     */
    public getTestWebhookPayloadNewSms(options?: Configuration): Promise<WebhookNewSmsPayload> {
        const result = this.api.getTestWebhookPayloadNewSms(options);
        return result.toPromise();
    }

    /**
     * Get a webhook
     * @param webhookId 
     */
    public getWebhook(webhookId: string, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.getWebhook(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook result for a webhook
     * @param webhookResultId Webhook Result ID
     */
    public getWebhookResult(webhookResultId: string, options?: Configuration): Promise<WebhookResultDto> {
        const result = this.api.getWebhookResult(webhookResultId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     * @param searchFilter Optional search filter
     * @param since Filter by created at after the given timestamp
     * @param before Filter by created at before the given timestamp
     * @param unseenOnly Filter for unseen exceptions only
     * @param resultType Filter by result type
     * @param eventName Filter by event name
     * @param minStatusCode Minimum response status
     * @param maxStatusCode Maximum response status
     * @param inboxId Inbox ID
     * @param smsId Sms ID
     * @param attachmentId Attachment ID
     * @param emailId Email ID
     * @param phoneId Phone ID
     * @param aiTransformerId AI Transformer ID
     */
    public getWebhookResults(webhookId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', searchFilter?: string, since?: Date, before?: Date, unseenOnly?: boolean, resultType?: 'BAD_RESPONSE' | 'EXCEPTION' | 'EXHAUSTED' | 'SUCCESS' | 'REDRIVEN', eventName?: 'EMAIL_RECEIVED' | 'NEW_AI_TRANSFORM_RESULT' | 'NEW_EMAIL' | 'NEW_CONTACT' | 'NEW_ATTACHMENT' | 'EMAIL_OPENED' | 'EMAIL_READ' | 'DELIVERY_STATUS' | 'BOUNCE' | 'BOUNCE_RECIPIENT' | 'NEW_SMS' | 'NEW_GUEST_USER', minStatusCode?: number, maxStatusCode?: number, inboxId?: string, smsId?: string, attachmentId?: string, emailId?: string, phoneId?: string, aiTransformerId?: string, options?: Configuration): Promise<PageWebhookResult> {
        const result = this.api.getWebhookResults(webhookId, page, size, sort, searchFilter, since, before, unseenOnly, resultType, eventName, minStatusCode, maxStatusCode, inboxId, smsId, attachmentId, emailId, phoneId, aiTransformerId, options);
        return result.toPromise();
    }

    /**
     * Get a webhook results count for a webhook
     * @param webhookId ID of webhook to get results for
     */
    public getWebhookResultsCount(webhookId: string, options?: Configuration): Promise<CountDto> {
        const result = this.api.getWebhookResultsCount(webhookId, options);
        return result.toPromise();
    }

    /**
     * Get count of unseen webhook results with error status
     */
    public getWebhookResultsUnseenErrorCount(options?: Configuration): Promise<UnseenErrorCountDto> {
        const result = this.api.getWebhookResultsUnseenErrorCount(options);
        return result.toPromise();
    }

    /**
     * Get all webhooks for an Inbox
     * @param inboxId 
     * @param page Optional page index in list pagination
     * @param size Optional page size in list pagination
     * @param sort Optional createdAt sort direction ASC or DESC
     */
    public getWebhooks(inboxId: string, page?: number, size?: number, sort?: 'ASC' | 'DESC', options?: Configuration): Promise<Array<WebhookProjection>> {
        const result = this.api.getWebhooks(inboxId, page, size, sort, options);
        return result.toPromise();
    }

    /**
     * Allows you to resend webhook payloads for any recorded webhook result that failed to deliver the payload.
     * Redrive all webhook results that have failed status
     */
    public redriveAllWebhookResults(options?: Configuration): Promise<WebhookRedriveAllResult> {
        const result = this.api.redriveAllWebhookResults(options);
        return result.toPromise();
    }

    /**
     * Allows you to resend a webhook payload that was already sent. Webhooks that fail are retried automatically for 24 hours and then put in a dead letter queue. You can retry results manually using this method.
     * Get a webhook result and try to resend the original webhook payload
     * @param webhookResultId Webhook Result ID
     */
    public redriveWebhookResult(webhookResultId: string, options?: Configuration): Promise<WebhookRedriveResult> {
        const result = this.api.redriveWebhookResult(webhookResultId, options);
        return result.toPromise();
    }

    /**
     * Send webhook test data
     * @param webhookId 
     */
    public sendTestData(webhookId: string, options?: Configuration): Promise<WebhookTestResult> {
        const result = this.api.sendTestData(webhookId, options);
        return result.toPromise();
    }

    /**
     * Update a webhook
     * @param webhookId 
     * @param createWebhookOptions 
     * @param inboxId 
     * @param aiTransformerId 
     * @param phoneNumberId 
     * @param overrideAuth 
     */
    public updateWebhook(webhookId: string, createWebhookOptions: CreateWebhookOptions, inboxId?: string, aiTransformerId?: string, phoneNumberId?: string, overrideAuth?: boolean, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.updateWebhook(webhookId, createWebhookOptions, inboxId, aiTransformerId, phoneNumberId, overrideAuth, options);
        return result.toPromise();
    }

    /**
     * Update a webhook request headers
     * @param webhookId 
     * @param webhookHeaders 
     */
    public updateWebhookHeaders(webhookId: string, webhookHeaders: WebhookHeaders, options?: Configuration): Promise<WebhookDto> {
        const result = this.api.updateWebhookHeaders(webhookId, webhookHeaders, options);
        return result.toPromise();
    }

    /**
     * Verify a webhook payload using the messageId and signature. This allows you to be sure that MailSlurp sent the payload and not another server.
     * Verify a webhook payload signature
     * @param verifyWebhookSignatureOptions 
     */
    public verifyWebhookSignature(verifyWebhookSignatureOptions: VerifyWebhookSignatureOptions, options?: Configuration): Promise<VerifyWebhookSignatureResults> {
        const result = this.api.verifyWebhookSignature(verifyWebhookSignatureOptions, options);
        return result.toPromise();
    }

    /**
     * Wait for webhook results for a webhook
     * @param webhookId ID of webhook to get results for
     * @param expectedCount Expected result count
     * @param timeout Max time to wait in milliseconds
     */
    public waitForWebhookResults(webhookId: string, expectedCount: number, timeout: number, options?: Configuration): Promise<Array<WebhookResultDto>> {
        const result = this.api.waitForWebhookResults(webhookId, expectedCount, timeout, options);
        return result.toPromise();
    }


}



