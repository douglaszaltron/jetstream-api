import app from '@/app';

const permissions = {
  zaltron_store_sandbox: {
    'freight-api': [
      'CHANNEL_READ',
      'IMPORT_CANCEL',
      'IMPORT_READ',
      'IMPORT_UPLOAD',
      'MEDIA_CREATE',
      'MEDIA_READ',
      'MEDIA_UPDATE',
      'PACKAGE_READ',
      'PRICE_CREATE',
      'PRICE_READ',
      'PRICE_UPDATE',
      'PRODUCT_CREATE',
      'PRODUCT_READ',
      'PRODUCT_UPDATE',
      'REPORT_CREATE',
      'REPORT_READ',
      'REPORT_UPDATE',
      'STOCK_CREATE',
      'STOCK_READ',
      'STOCK_UPDATE',
    ],
    'product-api': [
      'CHANNEL_READ',
      'IMPORT_CANCEL',
      'IMPORT_READ',
      'IMPORT_UPLOAD',
      'MEDIA_CREATE',
      'MEDIA_READ',
      'MEDIA_UPDATE',
      'PACKAGE_READ',
      'PRICE_CREATE',
      'PRICE_READ',
      'PRICE_UPDATE',
      'PRODUCT_CREATE',
      'PRODUCT_READ',
      'PRODUCT_UPDATE',
      'REPORT_CREATE',
      'REPORT_READ',
      'REPORT_UPDATE',
      'STOCK_CREATE',
      'STOCK_READ',
      'STOCK_UPDATE',
    ],
  },
};

const handler = async (_request, response) => {
  response.status(200);

  response.json(permissions);
};

export default app({ cache: 172800 }).get(handler);
