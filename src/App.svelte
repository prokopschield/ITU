<script lang="ts">
	import Auth from "./pages/Auth/Auth.svelte";
	import AuthLogin from "./pages/Auth/Login.svelte";
	import AuthRegister from "./pages/Auth/Register.svelte";
	import ChatMessage from "./pages/Chat/Message.svelte";
	import Header from "./pages/Header.svelte";
	import Main from "./pages/Main.svelte";
	import UcastniciAcountview from "./pages/Ucastnici/acountview.svelte";
	import UcastniciChat from "./pages/Ucastnici/chat.svelte";
	import UcastniciEvents from "./pages/Ucastnici/events.svelte";
	import UcastniciLeaderboard from "./pages/Ucastnici/leaderboard.svelte";
	import UcastniciOverview from "./pages/Ucastnici/overview.svelte";
	import VedouciActionBox from "./pages/Vedouci/ActionBox.svelte";
	import VedouciActions from "./pages/Vedouci/Actions.svelte";
	import VedouciEditAction from "./pages/Vedouci/EditAction.svelte";
	import VedouciEditPerson from "./pages/Vedouci/EditPerson.svelte";
	import VedouciHeadOverview from "./pages/Vedouci/HeadOverview.svelte";
	import VedouciMultiPointTable from "./pages/Vedouci/MultiPointTable.svelte";
	import VedouciOverviewTable from "./pages/Vedouci/OverviewTable.svelte";
	import VedouciParticipantOverview from "./pages/Vedouci/ParticipantOverview.svelte";
	import VedouciPointDistribution from "./pages/Vedouci/PointDistribution.svelte";
	import VedouciPointTable from "./pages/Vedouci/PointTable.svelte";
	import Tabory from "./pages/tabory.svelte";
	import { page } from "./lib/state";
</script>

{#if $page === ""}
	<Main />
{:else if $page === "Auth"}
	<Auth />
{:else if $page === "AuthLogin"}
	<AuthLogin />
{:else if $page === "AuthRegister"}
	<AuthRegister />
{:else if $page === "ChatMessage"}
	<ChatMessage />
{:else if $page === "Header"}
	<Header />
{:else if $page === "Main"}
	<Main />
{:else if $page === "UcastniciAcountview"}
	<UcastniciAcountview />
{:else if $page === "UcastniciChat"}
	<UcastniciChat />
{:else if $page === "UcastniciEvents"}
	<UcastniciEvents />
{:else if $page === "UcastniciLeaderboard"}
	<UcastniciLeaderboard />
{:else if $page === "UcastniciOverview"}
	<UcastniciOverview />
{:else if $page === "VedouciActionBox"}
	<VedouciActionBox />
{:else if $page === "VedouciActions"}
	<VedouciActions />
{:else if $page === "VedouciEditAction"}
	<VedouciEditAction />
{:else if $page === "VedouciEditPerson"}
	<VedouciEditPerson />
{:else if $page === "VedouciHeadOverview"}
	<VedouciHeadOverview />
{:else if $page === "VedouciMultiPointTable"}
	<VedouciMultiPointTable />
{:else if $page === "VedouciOverviewTable"}
	<VedouciOverviewTable />
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
	<button on:click={() => page.set("Main")}>Na hlavní stránku</button>
{/if}
