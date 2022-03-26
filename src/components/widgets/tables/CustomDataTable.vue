<template>
  <!--begin::Tables Widget 13-->
  <div :class="widgetClasses" class="card">
    <!--begin::Header-->
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fw-bolder fs-3 mb-1">All Quotes</span>

        <span class="text-muted mt-1 fw-bold fs-7">Over 500 orders</span>
      </h3>
      <div class="card-toolbar">
        <!--begin::Menu-->
        <a
          href="#"
          class="btn btn-sm btn-light-primary me-5"
          @click="clearFilter"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          Reset Filter
        </a>

        <a href="#" class="btn btn-sm btn-light-primary">
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/arrows/arr075.svg" />
          </span>
          New Quotes
        </a>

        <button
          type="button"
          class="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <span class="svg-icon svg-icon-2">
            <inline-svg src="media/icons/duotune/general/gen024.svg" />
          </span>
        </button>
        <Dropdown2></Dropdown2>
        <!--end::Menu-->
      </div>
    </div>
    <!--end::Header-->
    <!-- Sr. No	Company Name	Product Name	Policy Type	Health Class	Monthly Premium	Annual Premium	Product Note -->
    <!--begin::Body-->
    <div class="card-body py-3">
      <!--begin::Table container-->
      <div class="table-responsive">
        <el-table
          :data="list"
          height="500"
          stripe
          style="width: 100%"
          ref="multipleTable"
          :default-sort="{ prop: 'companyName', order: 'descending' }"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" />
          <el-table-column
            fixed
            label="Sr No."
            width="100"
            type="index"
            :index="indexMethod"
          />
          <el-table-column
            prop="companyName"
            label="Company Name"
            width="150"
            sortable
          />
          <el-table-column
            prop="productName"
            label="Product Name"
            width="150"
            sortable
          />
          <el-table-column
            prop="policyType"
            label="Policy Type"
            width="150"
            sortable
          />
          <el-table-column
            prop="healthClass"
            label="Health Class"
            width="150"
            sortable
          />
          <el-table-column
            prop="premium"
            label="Monthly Premium"
            width="150"
            sortable
          />
          <el-table-column
            prop="annualPremium"
            label="Annual Premium"
            width="150"
            sortable
          />
          <el-table-column
            prop="productNote"
            label="Product Note"
            width="200"
          />
        </el-table>
        <!--end::Table-->
      </div>
      <!--end::Table container-->
    </div>
    <!--begin::Body-->
  </div>
  <!--end::Tables Widget 13-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Dropdown2 from "@/components/dropdown/Dropdown2.vue";

export default defineComponent({
  name: "kt-widget-14",
  components: {
    Dropdown2,
  },
  props: {
    widgetClasses: String,
  },
  setup() {
    const tableHeader = ref([
      {
        name: "Company Name",
        key: "companyName",
      },
      {
        name: "Product Name",
        key: "productName",
      },
      {
        name: "Policy Type",
        key: "policyType",
      },
      {
        name: "Health Class",
        key: "healthClass",
      },
      {
        name: "Monthly Premium",
        key: "premium",
      },
      {
        name: "Annual Premium",
        key: "annualPremium",
      },
      {
        name: "Product Note",
        key: "productNote",
      },
    ]);
    const multipleSelection = [];
    const list = [
      {
        companyCode: "IAFINANC",
        companyFileCode: "6847974",
        ageApplied: "41",
        companyName: "iA Financial Group",
        productName: "Transition T20 4CI [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$51.30",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "INDG",
        compCode: "INDU",
        productInternalCode: "INDG-5-WCI",
        policyType: "basic",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/16/INDU.png",
        amb: "A+",
        company_short_name: "iA Financial",
        rop: false,
        email_text:
          "4 conditions covered - most number of partial conditions covered also",
        alt_text: "Industrial - Alliance Life Insurance",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$570",
        modeUsed: "M",
      },
      {
        companyCode: "IAFINANC",
        companyFileCode: "9729510",
        ageApplied: "41",
        companyName: "iA Financial Group",
        productName: "Transition T20 25CI [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$67.23",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "INDC",
        compCode: "INDU",
        productInternalCode: "INDC-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/16/INDU.png",
        amb: "A+",
        company_short_name: "iA Financial",
        rop: false,
        email_text:
          "25 conditions covered - most number of partial conditions covered also",
        alt_text: "Industrial - Alliance Life Insurance",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$747",
        modeUsed: "M",
      },
      {
        companyCode: "DESJARDI",
        companyFileCode: "10890030",
        ageApplied: "41",
        companyName: "Desjardins Financial Security",
        productName: "Health Priorities T20 [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$67.86",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "DESO",
        compCode: "DESJ",
        productInternalCode: "DESO-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/7/DESJ.png",
        amb: "NA",
        company_short_name: "Desjardins",
        rop: false,
        email_text:
          "26 conditions covered - most number of partial conditions covered also",
        alt_text: "Desjardins Financial Security",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$754",
        modeUsed: "M",
      },
      {
        companyCode: "CANADALI",
        companyFileCode: "3801590",
        ageApplied: "41",
        companyName: "Canada Life",
        productName: "LifeAdvance T20 (LOIE) [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$67.95",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "CANG",
        compCode: "CANA",
        productInternalCode: "CANG-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/4/CANA.png",
        amb: "A+",
        company_short_name: "Canada Life",
        rop: false,
        email_text: "26 conditions covered - ",
        alt_text: "The Canada Life Assurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$755",
        modeUsed: "M",
      },
      {
        companyCode: "EMPIRELI",
        companyFileCode: "16876590",
        ageApplied: "41",
        companyName: "Empire Life",
        productName: "CI Protect Plus 20 [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$68.22",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "EMPK",
        compCode: "EMPI",
        productInternalCode: "EMPK-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/8/EMPI.png",
        amb: "A",
        company_short_name: "Empire Life",
        rop: false,
        email_text:
          "25 conditions covered - most number of partial conditions covered also",
        alt_text: "The Empire Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$758",
        modeUsed: "M",
      },
      {
        companyCode: "BMOINSUR",
        companyFileCode: "475418",
        ageApplied: "41",
        companyName: "BMO Insurance",
        productName: "Living Benefit 20 [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$69.21",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "BMOC",
        compCode: "BMOL",
        productInternalCode: "BMOC-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/3/BMOL.png",
        amb: "A",
        company_short_name: "BMO",
        rop: false,
        email_text:
          "25 conditions covered - most number of partial conditions covered also",
        alt_text: "BMO Life Assurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$769",
        modeUsed: "M",
      },
      {
        companyCode: "LACAPITA",
        companyFileCode: "1985390",
        ageApplied: "41",
        companyName: "La Capitale",
        productName: "Fixed-Term Critical Illness (25 Illnesses) T20 [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$71.33",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "CAPC",
        compCode: "CAPI",
        productInternalCode: "CAPC-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/5/CAPI.png",
        amb: "NA",
        company_short_name: "La Capitale",
        rop: false,
        email_text:
          "25 conditions covered - most number of partial conditions covered also",
        alt_text: "La Capitale",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$792",
        modeUsed: "M",
      },
      {
        companyCode: "MANULIFE",
        companyFileCode: "240018",
        ageApplied: "41",
        companyName: "Manulife Financial",
        productName: "Renewable Lifecheque T20 [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$72.90",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "MANC",
        compCode: "MANU",
        productInternalCode: "MANC-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/18/MANU.png",
        amb: "A+",
        company_short_name: "ManuLife",
        rop: false,
        email_text: " - can only claim once in partial conditions",
        alt_text: "The Manufacturers Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$810",
        modeUsed: "M",
      },
      {
        companyCode: "FORESTER",
        companyFileCode: "2905790",
        ageApplied: "41",
        companyName: "Foresters Life",
        productName: "Live Well T20 [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$75.60",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "FORG",
        compCode: "FORE",
        productInternalCode: "FORG-5-WCI",
        policyType: "basic",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/12/FORE.png",
        amb: "A",
        company_short_name: "Foresters",
        rop: false,
        email_text:
          "4 conditions covered - most number of partial conditions covered also",
        alt_text: "Foresters Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$840",
        modeUsed: "M",
      },
      {
        companyCode: "ASSUMPTI",
        companyFileCode: "187054",
        ageApplied: "41",
        companyName: "Assumption Life",
        productName: "Critical Protection T20 [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$77.31",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "ASSG",
        compCode: "ASSU",
        productInternalCode: "ASSG-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/1/ASSU.png",
        amb: "A-",
        company_short_name: "Assumptio",
        rop: false,
        email_text:
          "16 conditions covered - most number of partial conditions covered also",
        alt_text: "Assumption Mutual Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$859",
        modeUsed: "M",
      },
      {
        companyCode: "FORESTER",
        companyFileCode: "3010238",
        ageApplied: "41",
        companyName: "Foresters Life",
        productName: "Live Well Plus T20 [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$82.53",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "FORC",
        compCode: "FORE",
        productInternalCode: "FORC-5-WCI",
        policyType: "basic",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/12/FORE.png",
        amb: "A",
        company_short_name: "Foresters",
        rop: false,
        email_text:
          "25 conditions covered - most number of partial conditions covered also",
        alt_text: "Foresters Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$917",
        modeUsed: "M",
      },
      {
        companyCode: "EMPIRELI",
        companyFileCode: "16907310",
        ageApplied: "41",
        companyName: "Empire Life",
        productName: "CI Protect Plus 20 (ROP75) [NT]",
        healthClass: "Non-Smoker",
        paymentMode: "M",
        premium: "$113.22",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable & Convertible; Level Benefit",
        productCode: "EMPG",
        compCode: "EMPI",
        productInternalCode: "EMPG-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/8/EMPI.png",
        amb: "A",
        company_short_name: "Empire Life",
        rop: true,
        email_text:
          "25 conditions covered, also includes ROP - most number of partial conditions covered also",
        alt_text: "The Empire Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$1258",
        modeUsed: "M",
      },
      {
        companyCode: "FORESTER",
        companyFileCode: "2942654",
        ageApplied: "41",
        companyName: "Foresters Life",
        productName: "Live Well T20 (ROP) [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$120.96",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "FORE",
        compCode: "FORE",
        productInternalCode: "FORE-5-WCI",
        policyType: "basic",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/12/FORE.png",
        amb: "A",
        company_short_name: "Foresters",
        rop: true,
        email_text:
          "4 conditions covered, also includes ROP - most number of partial conditions covered also",
        alt_text: "Foresters Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$1344",
        modeUsed: "M",
      },
      {
        companyCode: "ASSUMPTI",
        companyFileCode: "365230",
        ageApplied: "41",
        companyName: "Assumption Life",
        productName: "Critical Protection T20 (FlexROP) [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$125.46",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "ASSC",
        compCode: "ASSU",
        productInternalCode: "ASSC-5-WCI",
        policyType: "enhanced",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/1/ASSU.png",
        amb: "A-",
        company_short_name: "Assumptio",
        rop: true,
        email_text:
          "16 conditions covered, includes ROP - most number of partial conditions covered also",
        alt_text: "Assumption Mutual Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$1394",
        modeUsed: "M",
      },
      {
        companyCode: "FORESTER",
        companyFileCode: "3120830",
        ageApplied: "41",
        companyName: "Foresters Life",
        productName: "Live Well Plus T20 (ROP) [NT]",
        healthClass: "Non-Tobacco",
        paymentMode: "M",
        premium: "$134.55",
        healthUnderwritingClass: "Regular",
        productNote: "Renewable; Level Benefit",
        productCode: "FORA",
        compCode: "FORE",
        productInternalCode: "FORA-5-WCI",
        policyType: "basic",
        company_logo:
          "http://localhost:3000/uploads/core/company/logo/12/FORE.png",
        amb: "A",
        company_short_name: "Foresters",
        rop: true,
        email_text:
          "25 conditions covered also includes ROP - most number of partial conditions covered also",
        alt_text: "Foresters Life Insurance Company",
        category: "5",
        coverageAmount: "100000",
        coverageTerm: "20",
        annualPremium: "$1495",
        modeUsed: "M",
      },
    ];

    return {
      list,
      multipleSelection,
    };
  },
  data() {
    return {};
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          // multipleTable.toggleRowSelection(row)
        });
      } else {
        // this.$refs.multipleTable.clearSelection()
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    indexMethod(index) {
      return index + 1;
    },
  },
});
</script>
