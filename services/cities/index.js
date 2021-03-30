import InternalError from '@/errors/internal';
import BadRequestError from '@/errors/bad-request';
import cities from '@/services/cities/data/cities.json';
import filter from '@/services/cities/filter';

export const findCitiesByName = async (search) => {
  try {
    if (!search) {
      throw new BadRequestError({ message: 'O campo name é requirido.' });
    }

    const collator = new Intl.Collator('pt-BR', {
      usage: 'search',
      sensitivity: 'base',
    });

    const { startsWith } = filter(collator);

    const matches = cities.items.filter((composer) =>
      startsWith(composer.name, search)
    );

    return matches.slice(0, 10);
  } catch (error) {
    throw new InternalError(error);
  }
};

export const findCityById = async (id) => {
  try {
    if (!id) {
      throw new BadRequestError({ message: 'O campo id é requirido.' });
    }

    return cities.items
      .filter((collator) => collator.id === Number(id))
      .shift();
  } catch (error) {
    throw new InternalError(error);
  }
};
