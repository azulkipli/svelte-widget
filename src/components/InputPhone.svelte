<script lang="ts">
	import TelInput, { normalizedCountries } from 'svelte-tel-input';
	import type { NormalizedTelNumber, CountryCode, E164Number } from 'svelte-tel-input/types';

	// Any Country Code Alpha-2 (ISO 3166)
	let country: CountryCode | null = 'ID';

	// You must use E164 number format. It's guarantee the parsing and storing consistency.
	let value: E164Number | null = null;

    // Validity
    let valid = true;

	// Optional - Extended details about the parsed phone number
	let parsedTelInput: NormalizedTelNumber | null = null;

    let selectedCountry = 'ID'
</script>

<div class="wrapper my-3">
    <label for="phonenumber" class="block">Phone Number</label>
	<select
        id="phonenumber-country-code"
		class="bg-gray-200 py-0.8rem pr-12 {!valid && 'invalid'}"
		aria-label="Default select example"
		name="Country"
		bind:value={selectedCountry}
	>
		<option 
        class="p-2"
        value={null} hidden={selectedCountry !== null}>Country Code</option>
		{#each normalizedCountries as country (country.id)}
			<option
                class="p-2"
				value={country.iso2}
				selected={country.iso2 === selectedCountry}
				aria-selected={country.iso2 === selectedCountry}
			>
				{country.iso2} (+{country.dialCode})
			</option>
		{/each}
	</select>
    <TelInput id="phonenumber" bind:country bind:value bind:valid bind:parsedTelInput class="bg-gray-200 {!valid && 'invalid'}" />
</div>

<style>
  .wrapper :global(.invalid) {
    border-color: red;
  }
</style>