
import * as XLSX from "xlsx";
import {formatDateTime} from "./format-date-time";
export const exportExel = (data) => {
    const updatedata = data.map(item => {
    return (
      {
        'Номер номенклатури': item.inventarNumber,
        "Дата підписання": formatDateTime(item.dateSigning),
        "Замовник": item.nameCustomer,
        "Тип документа": item.typeDocument,
        "Назва документа": item.nameDocument,
        "Договір": item.numberDogovir,
        "Рахунок": item.numberRachunok,
        "Дата початку дії": formatDateTime(item.contractStartDate)
      }
    )
  })

    const wb = XLSX.utils.book_new();
    let ws = XLSX.utils.json_to_sheet(updatedata );
    ws['!cols']= [
      {wch: 20},
      {wch: 20},
      {wch: 40},
      {wch: 20},
      {wch: 30},
      {wch: 20},
      {wch: 20},
      {wch: 20},
    ];

    XLSX.utils.book_append_sheet(wb, ws, "Інформація з архіву");

    XLSX.writeFile(wb, "Archive.xlsx");
}
