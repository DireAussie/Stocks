<script>
    import { navigate } from "svelte-routing";
    import { PortfolioApi } from '../api/portfolioApi.js'
    import TextInput from "../Components/TextInput.svelte";
    import Button from "../Components/Button.svelte";
    import ServerError from "../Components/ServerError.svelte";

    const portfolioApi = new PortfolioApi();

    let name = "";
    let holderIdentificationNumber = "";

    let portfolio = {};
    let errors = [];

    $: { portfolio = { name, holderIdentificationNumber } }

    let isSaving = false;

    async function handleSubmit(event) {

        isSaving = true;

        let response = await portfolioApi.addPortfolio(portfolio);
        
        if (response.ok === true)
        {
            navigate("/portfolios");
        }
        else
        {
            errors = response.response.errors;
            isSaving = false;
        }
    }

</script>

<style>
    .formContainer {
        padding: 10px 0px 10px 0px;
        max-width: 500px;
    }
</style>

<h3>Add Portfolio</h3>

<div class="formContainer">
    <form novalidate on:submit|preventDefault={handleSubmit}>
        <TextInput id="Name" label="Name" bind:value={name} {errors} required={true} />
        <TextInput id="HolderIdentificationNumber" label="Holder Identification Number (HIN)" bind:value={holderIdentificationNumber} {errors} />
        <div>
            <Button showSpinner={isSaving} disabled={isSaving}>Save</Button>
        </div>
    </form>
</div>
<ServerError></ServerError>