import { OdhDocumentType } from '../types';
import { store } from '../redux/store/store';

const DEV_MODE = process.env.APP_ENV === 'development';
const API_PORT = process.env.BACKEND_PORT || 8080;
const POLL_INTERVAL = process.env.POLL_INTERVAL ? parseInt(process.env.POLL_INTERVAL) : 30000;
const DOC_LINK = process.env.DOC_LINK;
const COMMUNITY_LINK = process.env.COMMUNITY_LINK;
const SUPPORT_LINK = process.env.SUPPORT_LINK;

export { DEV_MODE, API_PORT, POLL_INTERVAL, DOC_LINK, COMMUNITY_LINK, SUPPORT_LINK };

export const DOC_TYPE_TOOLTIPS = {
  [OdhDocumentType.Documentation]: 'Technical information for using the service',
  [OdhDocumentType.Tutorial]: 'End-to-end guides for solving business problems in data science',
  [OdhDocumentType.QuickStart]: 'Step-by-step instructions and tasks',
  [OdhDocumentType.HowTo]: 'Instructions and code for everyday procedures',
};

export const ODH_MANAGED_ANNOTATION = 'opendatahub.io/odh-managed';
export const CATEGORY_ANNOTATION = 'opendatahub.io/categories';
export const LABEL_NOTEBOOK_IMAGE = 'opendatahub.io/notebook-image';
export const ANNOTATION_NOTEBOOK_IMAGE_NAME = 'opendatahub.io/notebook-image-name';
export const ANNOTATION_NOTEBOOK_IMAGE_DESC = 'opendatahub.io/notebook-image-desc';
export const ANNOTATION_NOTEBOOK_IMAGE_TAG_SOFTWARE = 'opendatahub.io/notebook-software';
export const ANNOTATION_NOTEBOOK_IMAGE_TAG_DEPENDENCIES = 'opendatahub.io/notebook-python-dependencies';
