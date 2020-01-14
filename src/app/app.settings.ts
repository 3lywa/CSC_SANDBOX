// import * as jwt_decode from 'jwt-decode';
// import { environment } from '../environments/environment';
// import { User } from './pojo';

export class AppSettings {

  // public static user_accountNt = '';
  // public static user_object = null;

  // public static API_RRS_USER = (environment.useCloud ? environment.api_rrs_cloud : environment.api_rrs_prod)
  // + 'user';

  // API Cloud
  // http://localhost:3000/api/v1/users
  public static API_URL = 'http://localhost:3000/';

  public static API_USER = AppSettings.API_URL + 'api/v1/users/';
  public static API_ROLE = AppSettings.API_URL + 'api/v1/roles/';


  // PAGINATION
  public static CP_INITIAL_SIZE = 1;
  public static MAX_FONT_SIZE = 2;
  public static MAX_PAGE_SIZE = 20;
  public static MAX_RECORD_SIZE = 5;
  public static TOAST_POSITION = 'toast-bottom-right';

  public static TOTAL_NUM_OF_HOURS_IN_DAY = 24;
  public static TOTAL_NUM_OF_HOURS_IN_WEEK = 37.5;

  public static getDatePickerOptions() {
    return { dateInputFormat: 'YYYY-MM-DD', containerClass: 'theme-default', showWeekNumbers: false };
  }

  // //////////////////////////////
  // // User helper methods
  // //////////////////////////////
  // public static getLoggedInUser() {
  //   if (localStorage.getItem('token') != null) {
  //     try {
  //       const tokenPayload = jwt_decode(localStorage.getItem('token'));
  //       if (tokenPayload) {
  //         this.user_object = new User();
  //         this.user_object.id = tokenPayload.userId;
  //         this.user_object.firstName = tokenPayload.firstName;
  //         this.user_object.lastName = tokenPayload.lastName;
  //         this.user_object.fullName = tokenPayload.fullName;
  //         this.user_object.accountNt = tokenPayload.accountNt;
  //         this.user_object.roleId = tokenPayload.roleId;
  //         this.user_object.admin = tokenPayload.admin;
  //         this.user_object._id = tokenPayload.id;
  //         this.user_object.IMadmin = tokenPayload.IMadmin;
  //         this.user_object.active = tokenPayload.active;
  //         this.user_accountNt = tokenPayload.accountNt;

  //         return this.user_object;
  //       }
  //     } catch (error) {
  //       // console.log(error);
  //     }
  //   }

  //   return this.user_object;
  // }

  // public static getPrincipal() {
  //   return this.user_accountNt == null ? '' : this.user_accountNt;
  // }

  // public static isAdmin(user: User) {
  //   return user.IMadmin === 1;
  // }


  public static getCardAccent(status) {
    let cssClass = 'card card-accent-';

    if (status === 0) {
      cssClass += 'primary';
    } else if (status === 1) {
      cssClass += 'warning';
    } else if (status === 2) {
      cssClass += 'success';
    } else if (status === 3) {
      cssClass += 'danger';
    }

    return cssClass;
  }

  public static treatAsUTC(date) {
    return date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  }

  public static daysBetween(startDate, endDate) {
    const millisecondsPerDay = 24 * 60 * 60 * 1000;
    return Math.round(Math.abs((this.treatAsUTC(endDate) - this.treatAsUTC(startDate)) / (millisecondsPerDay)));
  }
}
