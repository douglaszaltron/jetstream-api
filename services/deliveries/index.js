import InternalError from '@/errors/internal';
import BadRequestError from '@/errors/bad-request';
import deliveries from '@/services/deliveries/data/deliveries.json';
import regions from '@/services/deliveries/data/regions.json';
import filter from '@/services/cities/filter';
import paginate from '@/services/deliveries/paginate';

export const findAll = async ({ page = 1, per_page = 10 }) => {
  try {
    return paginate(deliveries.items, { page, per_page });
  } catch (error) {
    throw new InternalError(error);
  }
};

export const findDeliveriesByName = async (search) => {
  try {
    if (!search) {
      throw new BadRequestError({ message: 'O campo name é requirido.' });
    }

    const collator = new Intl.Collator('pt-BR', {
      usage: 'search',
      sensitivity: 'base',
    });

    const { startsWith } = filter(collator);

    const matches = deliveries.items.filter((composer) => {
      return startsWith(composer.regions[0].name, search);
    });

    return matches;
  } catch (error) {
    throw new InternalError(error);
  }
};

export const findDeliveryById = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError({ message: 'O campo id é requirido.' });
    }

    return deliveries.items.filter((collator) => collator.id === id).shift();
  } catch (error) {
    throw new InternalError(error);
  }
};

export const findDeliveryRegions = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError({ message: 'O campo id é requirido.' });
    }

    return regions.items
      .filter((collator) => collator.id === id)
      .map((item) => item.regions)
      .shift();
  } catch (error) {
    throw new InternalError(error);
  }
};
