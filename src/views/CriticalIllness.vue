<template>
  <div>
    <div class="card mb-10">
      <!--begin::Header-->
      <div class="card-header">
        <h3 class="card-title">Critical Illness</h3>
      </div>
      <!--begin::Form-->
        <!--begin::Body-->
        <div class="row m-5">
          <div class="col-lg-4 col-xl-4">
            <label class="col-form-label">Date of birth:</label>
            <div class="block">
              <el-date-picker
                v-model="dob"
                placeholder="dd/mm/yyyy"
                :disabled-date="disabledDate"
                :default-value="new Date(1990, 9, 1)"
                format="DD-MM-YYYY"
                value-format="DD-MM-YYYY"
              >
              </el-date-picker>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4">
            <label class="col-form-label">Gender:</label>
            <div>
              <el-radio-group v-model="gender">
                <el-radio-button label="Male"></el-radio-button>
                <el-radio-button label="Female"></el-radio-button>
              </el-radio-group>
            </div>
          </div>
          <div class="col-lg-4 col-xl-4">
            <label class="col-form-label">Smoking Status:</label>
            <div>
              <el-radio-group v-model="smokingStatus">
                <el-radio-button label="Smoker"></el-radio-button>
                <el-radio-button label="Non Smoker"></el-radio-button>
              </el-radio-group>
            </div>
            <!-- ended -->
          </div>
        </div>
        <div class="row m-5">
          <div class="col-lg-4 col-xl-4">
            <label class="form-label text-lg-end">Coverage Amount:</label>
            <currency-input
              v-model="coverageAmount"
              class="form-control"
              :options="{
                currency: 'USD',
                currencyDisplay: 'narrowSymbol',
                hideCurrencySymbolOnFocus: false,
                hideGroupingSeparatorOnFocus: false,
                hideNegligibleDecimalDigitsOnFocus: true,
                autoDecimalDigits: false,
                autoSign: true,
                useGrouping: true,
              }"
            />
          </div>

          <div class="col-lg-4 col-xl-4">
            <label class="form-label">Coverage Term:</label>
            <!--begin::Input-->
            <div>
              <el-select
                class="form-select-solid"
                placeholder="Select option"
                v-model="coverageTerm"
                clearable
              >
                <el-option
                v-for="(item, index) in termList"
                :key="index"
                :label="item"
                :value="item"
              >
                {{ item }}
              </el-option>
              </el-select>
            </div>
            <!--end::Input-->
          </div>
        </div>
        <!--end::Body-->
        <!--begin::Footer-->
        <div class="card-footer py-6">
          <div class="row">
            <div class="col-lg-12">
              <button
                @click="fetchquotes"
                id="kt_layout_builder_preview"
                class="btn btn-primary me-2"
              >
                <span class="indicator-label"> Get Quotes </span>
                <span class="indicator-progress">
                  Please wait...
                  <span
                    class="spinner-border spinner-border-sm align-middle ms-2"
                  ></span>
                </span>
              </button>
              <button
                @click="showData = !showData"
                id="kt_layout_builder_reset"
                class="btn btn-outline btn-outline-danger btn-active-danger fw-bold"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
        <!--end::Footer-->
      <!--end::Form-->
    </div>
    <CustomTable
      widget-classes="my-5 mb-xl-8"
      v-if="showData"
      :data="tableData"
    ></CustomTable>
    <quotes-card v-if="showData" ></quotes-card>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs, ref } from "vue";
import { config } from "@/core/helpers/config";
import { themeName } from "@/core/helpers/documentation";
import { setCurrentPageTitle } from "@/core/helpers/breadcrumb";
import CurrencyInput from "@/components/custom/currency-input.vue";
import CustomTable from "@/components/widgets/tables/CustomTable.vue";
import QuotesCard from "@/components/custom/quotesCard.vue";

export default defineComponent({
  name: "CriticalIllness",
  components: {
    CurrencyInput,
    CustomTable,
    QuotesCard
  },
  setup(props) {
    const state = reactive({
      disabledDate(time) {
        return time.getTime() > Date.now();
      },
      shortcuts: [
        {
          text: "Today",
          value: new Date(),
        },
        {
          text: "Yesterday",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24);
            return date;
          },
        },
        {
          text: "A week ago",
          value: () => {
            const date = new Date();
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
            return date;
          },
        },
      ],
      dob: null,
      gender: ref("Male"),
      smokingStatus: ref("Non Smoker"),
      coverageAmount: null,
      coverageTerm: null,
      showData: false,
      tableData: null,
      termList: ["10", "15", "20", "25", "30", "Age 65", "Age 75", "Age 100"],
    });
    const toggleDataTable = (x) => {
      return (x = !x);
    };

    return {
      config,
      themeName,
      ...toRefs(state),
      toggleDataTable,
    };
  },
  methods: {
    fetchquotes() {
      const url = "/api/v2/critical_illness_quick";
      this.axios
        .post(
          url,
          Object.assign({
            coverage_amount: this.coverageAmount,
            coverage_term: this.coverageTerm,
            date_of_birth: this.dob,
            format_type: "with_dollar_and_separator",
            gender: (this.gender == "Male") ? "male" : "female",
            payment_mode: "M:A",
            smoker: (this.smokingStatus === "Smoker") ? "true" : "false",
          })
        )
        .then((response) => {
          this.showData = true;
          this.tableData = response.data;
        });
    },
  },
});
</script>
<style src="@vueform/multiselect/themes/default.css"></style>
<style lang="scss">
.el-select {
  width: 100%;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 100%;
}
</style>
