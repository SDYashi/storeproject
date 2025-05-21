import { Component } from '@angular/core';
import { MystoreServicesService } from '../storeServices/mystore-services.service';

@Component({
  selector: 'app-store-reports-v1',
  templateUrl: './store-reports-v1.component.html',
  styleUrls: ['./store-reports-v1.component.css']
})
export class StoreReportsV1Component {


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
    remark_3: '',
    remark_4: '',
    remark_5: ''
  };

  constructor(private storeServices: MystoreServicesService) { }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.testReport);
      // Add your submission logic here
    } else {
      console.log('Form is invalid');
    }
  }

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
  calculate_loadloss_test() {
    const Reference_Temp	= 75
    const Metal_Value_For_CuAl = 225
    const Rated_Frequency =	50
    const Rated_Current_HV_50 =  String(Number(this.testReport.hv_kv)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_LV_50 =   String(Number(this.testReport.lv_v)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_HV_100 =  String(Number(this.testReport.hv_kv)/ (Number(this.testReport.job_rating)*1.732));
    const Rated_Current_LV_100 =   String(Number(this.testReport.lv_v)/ (Number(this.testReport.job_rating)*1.732));
    const Cal_Avg_Resistance_LV_Ohm_50= ((Number(this.testReport.avg_resist_lv)/1000)/2);
    const Cal_Avg_Resistance_LV_Ohm_100= ((Number(this.testReport.avg_resist_lv)/1000)/2);
    const I_2_R_hv_50  =((3*((Number(Rated_Current_HV_50)/1.732)^2)* Number(this.testReport.avg_resist))*1.5)
    const I_2_R_hv_100  =((3*((Number(Rated_Current_HV_100)/1.732)^2)* Number(this.testReport.avg_resist))*1.5)
    const I_2_R_lv_50  =((3*((Number(Rated_Current_LV_50)/1.732)^2)* Number(this.testReport.avg_resist_lv))*1.5)
    const I_2_R_lv_100  =((3*((Number(Rated_Current_LV_100)/1.732)^2)* Number(this.testReport.avg_resist_lv))*1.5)
    const Total_Copper_Losses_At_Oil_Temp_50= I_2_R_hv_50+I_2_R_lv_50;
    const Total_Copper_Losses_At_Oil_Temp_100= I_2_R_hv_100+I_2_R_lv_100;
    const Total_Copper_Losses_at_Avg_Temp_50 = (((Metal_Value_For_CuAl+Number(this.testReport.temp_50))/(Metal_Value_For_CuAl+(Number(this.testReport.avg_temp_hv))))*Total_Copper_Losses_At_Oil_Temp_50)
    const Total_Copper_Losses_at_Avg_Temp_100 = (((Metal_Value_For_CuAl+Number(this.testReport.temp_100))/(Metal_Value_For_CuAl+(Number(this.testReport.avg_temp_hv))))*Total_Copper_Losses_At_Oil_Temp_100)
    const Corrected_Load_Loss_LLC_50 =((Number(Rated_Current_HV_50)/Number(this.testReport.curr_50))^2*Number(this.testReport.pm_50))
    const Corrected_Load_Loss_LLC_100 =((Number(Rated_Current_HV_100)/Number(this.testReport.curr_100))^2*Number(this.testReport.pm_100))
    const Stray_Loss_At_AvgTemp_50 = Corrected_Load_Loss_LLC_50-Total_Copper_Losses_at_Avg_Temp_50
    const Stray_Loss_At_AvgTemp_100 = Corrected_Load_Loss_LLC_100-Total_Copper_Losses_at_Avg_Temp_100
    const Total_Copper_Losses_At_Ref_Temp_50 =(((Metal_Value_For_CuAl+Reference_Temp)/(Metal_Value_For_CuAl+(Number(this.testReport.avg_temp_hv))))*Total_Copper_Losses_at_Avg_Temp_50)
    const Total_Copper_Losses_At_Ref_Temp_100 =(((Metal_Value_For_CuAl+Reference_Temp)/(Metal_Value_For_CuAl+(Number(this.testReport.avg_temp_hv))))*Total_Copper_Losses_at_Avg_Temp_100)
    const Stray_Loss_at_Rated_Frequency_75_50 = (((Metal_Value_For_CuAl+Number(this.testReport.avg_temp_hv))/(Metal_Value_For_CuAl+Reference_Temp))*Stray_Loss_At_AvgTemp_50)
    const Stray_Loss_at_Rated_Frequency_75_100 = (((Metal_Value_For_CuAl+Number(this.testReport.avg_temp_hv))/(Metal_Value_For_CuAl+Reference_Temp))*Stray_Loss_At_AvgTemp_100)
    const Stray_Loss_at_Test_Frequency_75_50=(((Rated_Frequency/Number(this.testReport.freq_50))^2)*Stray_Loss_at_Rated_Frequency_75_50)
    const Stray_Loss_at_Test_Frequency_75_100=(((Rated_Frequency/Number(this.testReport.freq_100))^2)*Stray_Loss_at_Rated_Frequency_75_100)
    const Load_Loss_at_Rated_Frequency_75_50 = Stray_Loss_at_Rated_Frequency_75_50+Total_Copper_Losses_At_Ref_Temp_50
    const Load_Loss_at_Rated_Frequency_75_100 =Stray_Loss_at_Rated_Frequency_75_100+Total_Copper_Losses_At_Ref_Temp_100
    const Load_Loss_at_Test_Frequency_75_50 = Stray_Loss_at_Test_Frequency_75_50+Total_Copper_Losses_At_Ref_Temp_50
    const Load_Loss_at_Test_Frequency_75_100 =Stray_Loss_at_Test_Frequency_75_100+Total_Copper_Losses_At_Ref_Temp_100
    this.testReport.load_loss_50 = String(Load_Loss_at_Test_Frequency_75_50)
    this.testReport.load_loss_100 = String(Load_Loss_at_Test_Frequency_75_100)
    const Total_Losses_NLL_LL_50 =this.testReport.pc_nl + Load_Loss_at_Test_Frequency_75_50
    const Total_Losses_NLL_LL_100 =this.testReport.pc_nl + Load_Loss_at_Test_Frequency_75_100
    const Total_Losses_NLL_LL_With_Two_Decimal_InReport_50 = this.testReport.pc_nl + Load_Loss_at_Test_Frequency_75_50
    const Total_Losses_NLL_LL_With_Two_Decimal_InReport_100 = this.testReport.pc_nl + Load_Loss_at_Test_Frequency_75_100
    const V_Meas_From_Load_Loss_Test_50=Number(this.testReport.volt_50)
    const V_Meas_From_Load_Loss_Test_100=Number(this.testReport.volt_100)
    const Corr_Volt_V_50=V_Meas_From_Load_Loss_Test_50*(Number(this.testReport.curr_50)/Number(Rated_Current_HV_50))
    const Corr_Volt_V_100=V_Meas_From_Load_Loss_Test_100*(Number(this.testReport.curr_100)/Number(Rated_Current_HV_100))
    const Impedance_Z_At_AvgTemp_C_50 =((Corr_Volt_V_50/1000)/Number(this.testReport.vector_group))
    const Impedance_Z_At_AvgTemp_C_100 =((Corr_Volt_V_100/1000)/Number(this.testReport.vector_group))
    const Resistance_CorR_At_AvgTemp_C_50 = Corrected_Load_Loss_LLC_50/(Number(this.testReport.job_rating)*1000)*100
    const Resistance_CorR_At_AvgTemp_C_100 = Corrected_Load_Loss_LLC_100/(Number(this.testReport.job_rating)*1000)*100
    const Reactance_CorR_At_AvgTemp_C_50 = Math.sqrt((Impedance_Z_At_AvgTemp_C_50*Impedance_Z_At_AvgTemp_C_50)-(Resistance_CorR_At_AvgTemp_C_50*Resistance_CorR_At_AvgTemp_C_50))
    const Reactance_CorR_At_AvgTemp_C_100 = Math.sqrt((Impedance_Z_At_AvgTemp_C_100*Impedance_Z_At_AvgTemp_C_100)-(Resistance_CorR_At_AvgTemp_C_100*Resistance_CorR_At_AvgTemp_C_100))
    const Resistance_R_At_AvgTemp_C_50 = Stray_Loss_At_AvgTemp_50/(Number(this.testReport.job_rating)*1000)*100
    const Resistance_R_At_AvgTemp_C_100 = Stray_Loss_At_AvgTemp_100/(Number(this.testReport.job_rating)*1000)*100
    const final_Impedance_Z_At_AvgTemp_C_50 = Math.sqrt((Reactance_CorR_At_AvgTemp_C_50*Reactance_CorR_At_AvgTemp_C_50)-(Resistance_R_At_AvgTemp_C_50*Resistance_R_At_AvgTemp_C_50))
    const final_Impedance_Z_At_AvgTemp_C_100 = Math.sqrt((Reactance_CorR_At_AvgTemp_C_100*Reactance_CorR_At_AvgTemp_C_100)-(Resistance_R_At_AvgTemp_C_100*Resistance_R_At_AvgTemp_C_100))
    const Impedance_ZAt_RefTemp_C_At_TestFreq_RefFreqHz_50 = (Rated_Frequency/Number(this.testReport.freq_50))*final_Impedance_Z_At_AvgTemp_C_50  
    const Impedance_ZAt_RefTemp_C_At_TestFreq_RefFreqHz_100 = (Rated_Frequency/Number(this.testReport.freq_100))*final_Impedance_Z_At_AvgTemp_C_100
     this.testReport.percent_z_50=String(Impedance_ZAt_RefTemp_C_At_TestFreq_RefFreqHz_50)
     this.testReport.percent_z_100=String(Impedance_ZAt_RefTemp_C_At_TestFreq_RefFreqHz_100)
     this.total_load_50and100()

  }

  total_load_50and100() {
    this.testReport.obtained_2 = String(Number(this.testReport.pc_nl) + Number(this.testReport.load_loss_50));
    this.testReport.obtained_3 = String(Number(this.testReport.pc_nl) + Number(this.testReport.load_loss_100));
  }

  load_complied() {
    if (Number(this.testReport.percent_z_100) > 4.5 && Number(this.testReport.percent_z_100) < 10) {
      this.testReport.remark_1 = "Complied";
    } else {
      this.testReport.remark_1 = "Not Complied";
    }
    if (Number(this.testReport.obtained_2) < 218.5)  {
      this.testReport.remark_2 = "Complied";
    } else {
      this.testReport.remark_2 = "Not Complied";
    }
    if (Number(this.testReport.obtained_3) < 730.25) {
      this.testReport.remark_3 = "Complied";
    } else {
      this.testReport.remark_3 = "Not Complied";
    }
  }

  getsamplecodelist() {
    this.storeServices.getsamplecode().subscribe({
       next: (data) => {
         this.testReport.sample_code = data;
       },
       error: (err) => {
         this.testReport.sample_code = err;
         console.log(err);
       }

    });
  }


}

