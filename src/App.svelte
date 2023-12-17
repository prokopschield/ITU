<script lang="ts">
	import Auth from "./pages/Auth/Auth.svelte";
	import AuthForgotPassword from "./pages/Auth/ForgotPassword.svelte";
	import AuthLogin from "./pages/Auth/Login.svelte";
	import AuthRegister from "./pages/Auth/Register.svelte";
	import Header from "./pages/Header.svelte";
	import Home from "./pages/Home.svelte";
	import Main from "./pages/Main.svelte";
	import OrganizerCamp from "./pages/Organizer/Camp.svelte";
	import OrganizerMyCamps from "./pages/Organizer/MyCamps.svelte";
	import OrganizerNewCamp from "./pages/Organizer/NewCamp.svelte";
	import UcastniciMyCamps from "./pages/Ucastnici/MyCamps.svelte";
	import UcastniciAcountview from "./pages/Ucastnici/acountview.svelte";
	import UcastniciOverview from "./pages/Ucastnici/overview.svelte";
	import VedouciActivities from "./pages/Vedouci/Activities.svelte";
	import VedouciEditActivity from "./pages/Vedouci/EditActivity.svelte";
	import VedouciEditPerson from "./pages/Vedouci/EditPerson.svelte";
	import VedouciMultiPointTable from "./pages/Vedouci/MultiPointTable.svelte";
	import VedouciMyCamps from "./pages/Vedouci/MyCamps.svelte";
	import VedouciParticipantOverview from "./pages/Vedouci/ParticipantOverview.svelte";
	import VedouciPointDistribution from "./pages/Vedouci/PointDistribution.svelte";
	import VedouciPointTable from "./pages/Vedouci/PointTable.svelte";
	import Tabory from "./pages/tabory.svelte";
	import { page } from "./lib/state";
</script>

{#if $page === ""}
	<Home />
{:else if $page === "Auth"}
	<Auth />
{:else if $page === "AuthForgotPassword"}
	<AuthForgotPassword />
{:else if $page === "AuthLogin"}
	<AuthLogin />
{:else if $page === "AuthRegister"}
	<AuthRegister />
{:else if $page === "Header"}
	<Header />
{:else if $page === "Home"}
	<Home />
{:else if $page === "Main"}
	<Main />
{:else if $page === "OrganizerCamp"}
	<OrganizerCamp />
{:else if $page === "OrganizerMyCamps"}
	<OrganizerMyCamps />
{:else if $page === "OrganizerNewCamp"}
	<OrganizerNewCamp />
{:else if $page === "UcastniciMyCamps"}
	<UcastniciMyCamps />
{:else if $page === "UcastniciAcountview"}
	<UcastniciAcountview />
{:else if $page === "UcastniciOverview"}
	<UcastniciOverview />
{:else if $page === "VedouciActivities"}
	<VedouciActivities />
{:else if $page === "VedouciEditActivity"}
	<VedouciEditActivity />
{:else if $page === "VedouciEditPerson"}
	<VedouciEditPerson />
{:else if $page === "VedouciMultiPointTable"}
	<VedouciMultiPointTable />
{:else if $page === "VedouciMyCamps"}
	<VedouciMyCamps />
{:else if $page === "VedouciParticipantOverview"}
	<VedouciParticipantOverview />
{:else if $page === "VedouciPointDistribution"}
	<VedouciPointDistribution />
{:else if $page === "VedouciPointTable"}
	<VedouciPointTable />
{:else if $page === "Tabory"}
	<Tabory />
{:else}
	<h1>Page not found: {$page}</h1>
	<button on:click={() => page.set("Home")}>Na hlavní stránku</button>
{/if}
