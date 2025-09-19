import { BACKEND_API } from '../config';

export type ShiftsQueryParams = {
  latitude?: number;
  longitude?: number;
};

export type ShiftCoordinates = {
  latitude: number;
  longitude: number;
};

export type ShiftWorkType = {
  id: number;
  name: string;
  nameGt5: string;
  nameL5: string;
  nameOne: string;
};

export type Shift = {
  id: number;
  /** ссылка на логотип нанимателя */
  logo: string;
  coordinates: ShiftCoordinates;
  /** адрес проведения смены */
  address: string;
  /** имя компании нанимателя */
  companyName: string;
  /** дата начала смены */
  dateStartByCity: string;
  /** время начала смены */
  timeStartByCity: string;
  /** время окончания смены */
  timeEndByCity: string;
  /** сколько людей уже набрано (может быть больше требуемого) */
  currentWorkers: number;
  /** сколько людей требуется */
  planWorkers: number;
  /** наименование типа услуги */
  workTypes: ShiftWorkType[];
  /** сумма выплаты за смену (в рублях) */
  priceWorker: number;
  bonusPriceWorker: number;
  /** количество отзывов о клиенте */
  customerFeedbacksCount: number;
  /** рейтинг нанимателя (максимум 5) */
  customerRating: number;
  isPromotionEnabled: boolean;
};

export const getShifts = async (params?: ShiftsQueryParams) => {
  const ENDPOINT = 'api/shifts/map-list-unauthorized';
  const searchParams = new URLSearchParams(JSON.stringify(params));
  return fetch(`${BACKEND_API}${ENDPOINT}?${searchParams}`, { method: 'GET' })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<{ data: Shift[] }>;
    })
    .then(data => {
      return data.data;
    });
};
