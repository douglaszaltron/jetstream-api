import InternalError from '@/errors/internal';
import BadRequestError from '@/errors/bad-request';
import datasheets from '@/services/datasheets/data/datasheets.json';
import filter from '@/services/datasheets/filter';

export const findAllByIdentifier = async ({ search }) => {
  try {
    if (search) {
      if (!search.type && !search.value) {
        throw new BadRequestError({ message: 'Missing search parameters' });
      }

      return filter(datasheets.items).equal(search);
    }

    return datasheets.items;
  } catch (error) {
    throw new InternalError(error);
  }
};

export const findDatasheetById = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError({ message: 'O campo id é requirido.' });
    }

    return datasheets.items
      .filter((collator) => collator.datasheet_uuid === id)
      .shift();
  } catch (error) {
    throw new InternalError(error);
  }
};
