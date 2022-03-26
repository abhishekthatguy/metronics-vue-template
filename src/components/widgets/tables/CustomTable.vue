<template>
  <div class="card">
    <div class="card-header border-0 pt-6">
      <!--begin::Card title-->
      <div class="card-title">
        <!--begin::Search-->
        <div class="d-flex align-items-center position-relative my-1">
          <span class="svg-icon svg-icon-1 position-absolute ms-6">
            <inline-svg src="media/icons/duotune/general/gen021.svg" />
          </span>
          <input
            type="text"
            v-model="search"
            @input="searchItems()"
            class="form-control form-control-solid w-250px ps-15"
            placeholder="Search Quotes"
          />
        </div>
        <!--end::Search-->
      </div>
      <!--begin::Card title-->
      <!--begin::Card toolbar-->
      <div class="card-toolbar">
        <!--begin::Toolbar-->
        <div
          v-if="checkedQuotes.length === 0"
          class="d-flex justify-content-end"
          data-kt-customer-table-toolbar="base"
        >
          <!--begin::Export-->
          <button
            type="button"
            class="btn btn-light-primary me-3"
            data-bs-toggle="modal"
            data-bs-target="#kt_customers_export_modal"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotune/arrows/arr078.svg" />
            </span>
            Export
          </button>
          <!--end::Export-->
          <!--begin::Add customer-->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#kt_modal_add_customer"
          >
            <span class="svg-icon svg-icon-2">
              <inline-svg src="media/icons/duotone/Navigation/Plus.svg" />
            </span>
            Add Customer
          </button>
          <!--end::Add customer-->
        </div>
        <!--end::Toolbar-->
        <!--begin::Group actions-->
        <div
          v-else
          class="d-flex justify-content-end align-items-center"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span class="me-2">{{ checkedQuotes.length }}</span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            @click="deleteFewCustomers()"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
        <!--begin::Group actions-->
        <div
          class="d-flex justify-content-end align-items-center d-none"
          data-kt-customer-table-toolbar="selected"
        >
          <div class="fw-bolder me-5">
            <span
              class="me-2"
              data-kt-customer-table-select="selected_count"
            ></span
            >Selected
          </div>
          <button
            type="button"
            class="btn btn-danger"
            data-kt-customer-table-select="delete_selected"
          >
            Delete Selected
          </button>
        </div>
        <!--end::Group actions-->
      </div>
      <!--end::Card toolbar-->
    </div>
    <div class="card-body pt-0">
      <!-- temporary replaced from tableData to data -->
      <Datatable
        :table-data="data"
        :table-header="tableHeader"
        :enable-items-per-page-dropdown="true"
      >
        <template v-slot:cell-checkbox="{ row: quote }">
          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="quote.id"
              v-model="checkedQuotes"
            />
          </div>
        </template>
        <template v-slot:cell-companyName="{ row: quote }">
          {{ quote.companyName }}
        </template>
        <template v-slot:cell-productName="{ row: quote }">
          <a href="#" class="text-gray-600 text-hover-primary mb-1">
            {{ quote.productName }}
          </a>
        </template>
        <template v-slot:cell-policyType="{ row: quote }">
          {{ quote.policyType }}
        </template>
        <template v-slot:cell-healthClass="{ row: quote }">
          <!-- <img :src="quote.healthClass" class="w-35px me-3" alt="" /> -->
          {{ quote.healthClass }}
        </template>
        <template v-slot:cell-premium="{ row: quote }">
          {{ quote.premium }}
        </template>
        <template v-slot:cell-annualPremium="{ row: quote }">
          {{ quote.annualPremium }}
        </template>
        <template v-slot:cell-productNote="{ row: quote }">
          {{ quote.productNote }}
        </template>
        <template v-slot:cell-actions="{ row: quote }">
          <a
            href="#"
            class="btn btn-sm btn-light btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
            >Actions
            <span class="svg-icon svg-icon-5 m-0">
              <inline-svg src="media/icons/duotune/arrows/arr072.svg" />
            </span>
          </a>
          <!--begin::Menu-->
          <div
            class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4"
            data-kt-menu="true"
          >
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <router-link
                to="/apps/customers/customer-details"
                class="menu-link px-3"
                >View</router-link
              >
            </div>
            <!--end::Menu item-->
            <!--begin::Menu item-->
            <div class="menu-item px-3">
              <a @click="deleteCustomer(quote.id)" class="menu-link px-3"
                >Delete</a
              >
            </div>
            <!--end::Menu item-->
          </div>
          <!--end::Menu-->
        </template>
      </Datatable>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRefs, onMounted, computed } from "vue";
import Datatable from "@/components/kt-datatable/KTDatatable.vue";
import { setCurrentPageBreadcrumbs } from "@/core/helpers/breadcrumb";
import quotes from "@/core/data/quotes";
import { IQuotes } from "@/core/data/quotes";

export default defineComponent({
  name: "customers-listing",
  props: {
    data: Array,
  },
  components: {
    Datatable,
  },
  setup(props) {
    const checkedQuotes = ref([]);
    const { data } = toRefs(props);
    const { value } = data;

    const tableHeader = ref([
      {
        key: "checkbox",
        sortable: false,
      },
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
      {
        name: "Actions",
        key: "actions",
      },
    ]);
    const getData = computed((data) => {
      return data ? data : quotes;
    });
    const tableData = ref<Array<IQuotes>>(quotes);
    const initCustomers = ref<Array<IQuotes>>([]);

    onMounted(() => {
      setCurrentPageBreadcrumbs("Critical illness quotes", [
        "Critical Illness",
        "Quotes",
      ]);
      initCustomers.value.splice(0, tableData.value.length, ...tableData.value);
    });

    const deleteFewCustomers = () => {
      checkedQuotes.value.forEach((item) => {
        deleteCustomer(item);
      });
      checkedQuotes.value.length = 0;
    };

    const deleteCustomer = (id) => {
      for (let i = 0; i < tableData.value.length; i++) {
        if (tableData.value[i].id === id) {
          tableData.value.splice(i, 1);
        }
      }
    };

    const search = ref<string>("");
    const searchItems = () => {
      tableData.value.splice(0, tableData.value.length, ...initCustomers.value);
      if (search.value !== "") {
        let results: Array<IQuotes> = [];
        for (let j = 0; j < tableData.value.length; j++) {
          if (searchingFunc(tableData.value[j], search.value)) {
            results.push(tableData.value[j]);
          }
        }
        tableData.value.splice(0, tableData.value.length, ...results);
      }
    };

    const searchingFunc = (obj, value): boolean => {
      for (let key in obj) {
        if (!Number.isInteger(obj[key]) && !(typeof obj[key] === "object")) {
          if (obj[key].indexOf(value) != -1) {
            return true;
          }
        }
      }
      return false;
    };

    return {
      tableData,
      tableHeader,
      deleteCustomer,
      search,
      searchItems,
      checkedQuotes,
      deleteFewCustomers,
      getData,
    };
  },
});
</script>

function data(data: any) { throw new Error("Function not implemented."); }
