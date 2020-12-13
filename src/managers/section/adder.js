import { Line } from '../../classes/line.js';
import { makeTable } from '../../util/util-table.js';
import { addSubItemToLocalStroage } from '../../util/util-local-storage.js';
import { emptyElement } from '../../util/util-ui.js';
import { EXCEPTION_MESSAGE } from '../../configuration.js';

// 3. 구간 관리 - 신규 구간 추가 요청
export const requestToAddSection = (menu, lineSelected) => {
  const line = new Line(lineSelected.name, lineSelected.stationList);
  const stationSelector = document.getElementById(`${menu}-station-selector`);
  const orderInput = document.getElementById(`${menu}-order-input`);
  const exception = line.unableToAddSection(
    stationSelector.value,
    orderInput.value
  );

  if (exception) {
    return processException(exception, stationSelector, orderInput);
  }
  addNewSection(menu, line, stationSelector.value, orderInput.value);
  emptyElement(orderInput);
};

const processException = (exception, select, input) => {
  alert(EXCEPTION_MESSAGE[exception]);
  if (exception === 'sectionAleardyRegistered') {
    return select.focus();
  }
  emptyElement(input);
  return input.focus();
};

const addNewSection = (menu, line, stationName, order) => {};
