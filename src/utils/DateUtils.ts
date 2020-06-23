import { date } from 'quasar'
import moment from 'moment';
const { addToDate } = date

export default class DateUtils {
  private static defaultDateFormat: string = 'YYYY/MM/DD'
  private static dateTimeFormatJp: string = 'YYYY年MM月DD日 HH時mm分'

  public static dateFromNow(diffDays) : string{
    let newDate = addToDate(new Date(), { days: diffDays}); // only allow choose 3 days later
    return  date.formatDate(newDate, this.defaultDateFormat)
  }

  public static dateNowJpFormat(strDate){
    let now = new Date(strDate)
    return date.formatDate(now, 'YYYY年MM月DD日')
  }

  public static dateTimeJpFormat(strDate){
    let now = new Date(strDate)
    return date.formatDate(now, this.dateTimeFormatJp)
  }

  public static dateDefaultStr(strDate){
    return moment(strDate).format(this.defaultDateFormat);
  }

  public static dateBeforeMonths(months){
    return date.addToDate(new Date(), {month: - months }).toISOString()
  }
}
