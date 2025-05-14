import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-store-generate-reportsv1',
  templateUrl: './store-generate-reportsv1.component.html',
  styleUrls: ['./store-generate-reportsv1.component.css']
})
export class StoreGenerateReportsv1Component{
  testReport = {
    sample_code: '',
    serial_no: '',
    manufacturer: '',
    job_rating: '',
    reference_standard: '',
    date_of_receipt: '',
    date_of_testing: '',
    date_of_issue: '',
    customer_name_and_address: '',
    sample_remarks1: '',
    vector_group: '',
    hv_kv: '',
    lv_v: '',
    hv: '',
    lv: '',
    value_1: '',
    value_2: '',
    value_3: '',
    limit_1: '',
    sample_remarks2: '',
    avg_temp_hv: '',
    resist_1: '',
    resist_2: '',
    resist_3: '',
    avg_resist: '',
    phase_resist_hv: '',
    avg_temp_lv: '',
    resist_lv_1: '',
    resist_lv_2: '',
    resist_lv_3: '',
    avg_resist_lv: '',
    phase_resist_lv: '',
    time: '',
    temp_ir: '',
    hv_e: '',
    lv_e: '',
    hv_lv: '',
    voltage_nl: '',
    freq_nl: '',
    current_nl: '',
    pm_nl: '',
    pc_nl: '',
    temp_50: '',
    freq_50: '',
    volt_50: '',
    curr_50: '',
    pm_50: '',
    load_loss_50: '',
    percent_z_50: '',
    temp_100: '',
    freq_100: '',
    volt_100: '',
    curr_100: '',
    pm_100: '',
    load_loss_100: '',
    percent_z_100: '',
    required_1: '',
    obtained_1: '',
    remark_1: '',
    required_2: '',
    obtained_2: '',
    remark_2: '',
    required_3: '',
    obtained_3: '',
    remark_3: ''
  };

  calculateHV() {
    this.testReport.hv = String(Number(this.testReport.hv_kv)* Number(this.testReport.job_rating));
  }
  calculateLV() {
    this.testReport.lv = String(Number(this.testReport.lv_v)* Number(this.testReport.job_rating));
  }

  calculateAvgResist() {
    this.testReport.avg_resist = String((Number(this.testReport.resist_1) + Number(this.testReport.resist_2) + Number(this.testReport.resist_3)) / 3);
  }
  calculatePhaseResist1() {
    this.testReport.phase_resist_hv = String((Number(this.testReport.avg_resist)*((225+75)/(225+ (Number(this.testReport.avg_temp_hv))))));
  }

  calculateAvgResistLv() {
    this.testReport.avg_resist_lv = String((Number(this.testReport.resist_lv_1) + Number(this.testReport.resist_lv_2) + Number(this.testReport.resist_lv_3)) / 3);
  }
  calculatePhaseResistLv2() {
    this.testReport.phase_resist_lv = String((Number(this.testReport.avg_resist_lv)*((225+75)/(225+ (Number(this.testReport.avg_temp_lv))))));
  }
  calculatenoload_testPCW() {
    this.testReport.pc_nl = String(Number(Math.sqrt(Number(this.testReport.voltage_nl) * Number(this.testReport.voltage_nl) + Number(this.testReport.pm_nl) * Number(this.testReport.pm_nl))))
  }
  calculate_loadtest() {
    const Rated_Current_HV_50 =  String(Number(this.testReport.hv_kv)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_LV_50 =   String(Number(this.testReport.lv_v)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_HV_100 =  String(Number(this.testReport.hv_kv)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_LV_100 =   String(Number(this.testReport.lv_v)/ (Number(this.testReport.job_rating)*1.732));
    const Cal_Avg_Resistance_LV_Ohm= ((Number(this.testReport.avg_resist_lv)/1000)/2);
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.testReport);
    
    } else {
      console.log('Form is invalid');
    }
  }
}