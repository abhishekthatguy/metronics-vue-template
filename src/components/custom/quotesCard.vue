<template>
	<div>
		<div
			class="card card-flush my-5 h-380px"
			v-for="(quote, index) in data"
			:key="index"
		>
			<div class="d-flex">
				<div
					class="col-3 text-left border border-2 border-top-0 border-start-0 border-bottom-0 border-gray-100"
				>
					<div class="card-header border-0">
							<div class="card-title">
								<img :src="quote.company_logo" class="img-fluid" />
							</div>
						<!-- <p>Company Code : {{ quote.companyCode }}</p> -->
					</div>
					<div class="card-body">
						<p class="text-muted fw-bolder">Company Code</p>
						<p class="mb-5">{{ quote.companyCode }}</p>
						
						<br />
						<p class="text-muted fw-bolder">Gross Premium</p>
						<p class="mb-5">{{ quote.annualPremium }}</p>
						<br />
						<p class="text-muted fw-bolder">Financial Strength</p>
						<p class="">{{ quote.healthUnderwritingClass }}</p>
					</div>
				</div>
				<div class="col-6">
					<div class="card-header border-0">
						<h3 class="card-title fw-bolder">{{ quote.companyName }}</h3>
					</div>
					<div class="card-body text-center pt-0">
						<div class="d-flex">
							<ul class="list list-unstyled">
								<li class="d-flex justify-content-start">
									<p class="text-muted me-5">Policy Type: &nbsp;
									 <span class="text-black fw-bolder me-2">{{ quote.policyType }}</span>
									</p>
								</li>
								<li class="d-flex justify-content-start">
									<p class="text-muted me-5">Renewable:
									<i class="bi bi-check text-primary me-2 fs-2x" style="vertical-align: middle;"></i> 
									Upto age 80</p>
								</li>
								<li class="d-flex justify-content-start">
									<p class="me-5 text-muted">Convertible:
									<i class="bi bi-check text-primary me-2 fs-2x" style="vertical-align: middle;"></i>
									Before age 65</p>
								</li>
							</ul>
							<ul
								class="list list-unstyled w-50 d-flex justify-content-end flex-wrap h-50px"
							>
								<li class="text-danger fw-bolder w-50">Family Discount</li>
								<li class="text-danger fw-bolder w-50">Express</li>
								<li class="text-danger fw-bolder w-50">Illness Advance</li>
								<li class="text-danger fw-bolder w-50">e-Policy</li>
							</ul>
						</div>
						<div class="d-flex justify-content-between mt-5 text-center">
							<i class="bi bi-person-x-fill text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Accidental Death</span
								></i
							>
							<i class="bi bi-person-x text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Accidental Disimbursment</span
								></i
							>
							<i class="bi bi-person-lines-fill text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Child Term</span
								></i
							>
							<i class="bi bi-activity text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Critical Illness</span
								></i
							>
							<i class="bi bi-coin text-muted fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Disability Credit</span
								></i
							>
							<i class="bi bi-dpad-fill text-muted fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Extreme  Disability</span
								></i
							>
							<i class="bi bi-award-fill text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Guaranteed Insurability</span
								></i
							>
							<i class="bi bi-droplet-half text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Terminal Illness</span
								></i
							>
							<i class="bi bi-joystick text-primary fs-2x ">
								<span class="fs-12 lh-sm d-inline-block mt-2 text-muted"
									>Waiver of Premium on Disability Death</span
								></i
							>
						</div>
					</div>
					<div class="card-footer border-0 text-center">
						<a
							href="#"
							class="btn btn-outline btn-outline btn-outline-primary btn-active-primary btn-sm me-2 mb-2"
							>Add to Compare</a
						>
						<a
							href="#"
							class="btn btn-outline btn-outline btn-outline-primary btn-active-primary btn-sm me-2 mb-2"
							>More Info</a
						>
					</div>
				</div>
				<div class="col-3 bg-light-primary text-center text-muted text-center">
					<div class="card-header border-0">
						<h1 class="card-title fs-3x fw-bolder">{{ quote.premium }}/MO</h1>
						<div>
							<p class="text-danger fw-bolder">Save $893</p>
							<p class="text-muted">over policy term when paid annually</p>
						</div>
					</div>
					<div class="card-body py-5">
						<ul class="list">
							<li class="d-flex justify-content-between">
								<p>&nbsp;</p>
								<p>Per Month</p>
							</li>
							<li class="d-flex justify-content-between">
								<p>Self</p>
								<p>$48.80</p>
							</li>
							<li class="d-flex justify-content-between">
								<p>Partner</p>
								<p>$48.80</p>
							</li>
							<li class="d-flex justify-content-between">
								<p>Less Discount</p>
								<p class="text-danger">$48.80</p>
							</li>
							<li class="d-flex justify-content-between">
								<p>Net Premium</p>
								<p>{{ quote.premium }}</p>
							</li>
						</ul>
					</div>
					<div class="card-footer border-0 pt-0">
						<a href="#" class="btn btn-primary btn-sm">Select Quote</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { reactive, toRefs } from "vue";
	import quotes from "@/core/data/quotes";
	import { IQuotes } from "@/core/data/quotes";

	export default {
		name: "quotes",
		props: {
			// data: Array,
		},
		setup(props) {
			const state = reactive({
				count: 10,
				data: quotes,
			});

			return {
				...toRefs(state),
			};
		},
	};
</script>

<style lang="scss" scoped>
	.fs-12 {
		font-size: 10px;
	}
</style>
