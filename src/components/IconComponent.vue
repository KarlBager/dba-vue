<script setup>

const props = defineProps({ icon: String, lightdark: String });

</script>

<template>


<svg v-if="icon == 'search' & lightdark == 'light'" class="button-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.02 123.03">

            <g>
                <path d="m48.15,92.8c-24.62,0-44.65-20.03-44.65-44.65S23.53,3.5,48.15,3.5s44.65,20.03,44.65,44.65-20.03,44.65-44.65,44.65Z" style="fill: var(--dba-lightblue); stroke-width: 0px;"/>
                <path d="m48.15,7c22.73,0,41.15,18.42,41.15,41.15s-18.42,41.15-41.15,41.15S7,70.88,7,48.15,25.42,7,48.15,7m0-7C21.6,0,0,21.6,0,48.15s21.6,48.15,48.15,48.15,48.15-21.6,48.15-48.15S74.7,0,48.15,0h0Z" style="fill: var(--dba-primary); stroke-width: 0px;"/>
            </g>
            <line x1="81.65" y1="81.65" x2="88.16" y2="88.16" style="fill: none; stroke: var(--dba-primary); stroke-miterlimit: 10; stroke-width: 7px;"/>
            <path d="m94.25,82.6h17.04v31.81c0,4.7-3.82,8.52-8.52,8.52h0c-4.7,0-8.52-3.82-8.52-8.52v-31.81h0Z" transform="translate(-42.57 102.77) rotate(-45)" style="fill: var(--dba-red); stroke: var(--dba-primary); stroke-miterlimit: 10; stroke-width: 7px;"/>
            <line x1="100.17" y1="30.79" x2="119.38" y2="30.79" style="fill: none; stroke: var(--dba-primary); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>
            <line x1="119.38" y1="18.89" x2="94.94" y2="18.89" style="fill: none; stroke: var(--dba-primary); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>
            <line x1="119.38" y1="7" x2="86.18" y2="7" style="fill: none; stroke: var(--dba-primary); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>

</svg>




<svg v-if="icon == 'paperplane' & lightdark == 'light'" class="button-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.39 115.02">
  
  <g>
    <polygon points="61.46 107.38 145.91 12.56 76.69 79.03 61.46 107.38" style="fill: #e6214e; stroke-width: 0px;"/>
    <path d="m9.78,75.47L145.91,12.56l-15.74,60.81c-.83,3.22-4.1,5.66-7.53,5.66h-45.75c-.12,0-.23.07-.29.17l-15.04,27.99c-.64,1.2-2.57,1.1-2.87-.15l-6.81-27.8c-.03-.12-.15-.21-.27-.21H10.66c-2.12,0-2.79-2.68-.88-3.56Z" style="fill: var(--dba-lightblue); stroke-width: 0px;"/>
    <path d="m52.25,78.73L145.91,12.56,7.85,76.36c-1.43.66-.93,2.67.67,2.67h42.78c.34,0,.68-.11.96-.3Z" style="fill: var(--dba-white); stroke-width: 0px;"/>
    <path d="m76.69,79.03L145.91,12.56l-16.05,62.03c-.65,2.52-3.22,4.45-5.92,4.45h-47.24Z" style="fill: var(--dba-white); stroke-width: 0px;"/>
  </g>
  <polyline points="60.29 109.13 76.69 79.03 145.91 12.56 47.73 83.35" style="fill: none; stroke: var(--dba-primary); stroke-miterlimit: 10; stroke-width: 7px;"/>
  <path d="m145.91,12.56l-16.05,62.03c-.65,2.52-3.22,4.45-5.92,4.45h-37.23l-25.18,28.24c-.39.49-.97.74-1.52.74-.61,0-1.16-.32-1.32-.98l-6.81-27.8c-.03-.12-.15-.21-.27-.21H8.51c-1.59,0-2.1-2.01-.67-2.67L145.91,12.56m10.48-12.56l-13.42,6.2L4.91,70.01c-3.62,1.67-5.56,5.54-4.71,9.4.86,3.9,4.28,6.62,8.31,6.62h37.82l5.56,22.68c.91,3.71,4.25,6.31,8.12,6.31,2.61,0,5.14-1.18,6.83-3.18l23-25.81h34.1c5.9,0,11.24-4.08,12.69-9.69l16.05-62.03,3.7-14.31h0Z" style="fill: var(--dba-primary); stroke-width: 0px;"/>

</svg>


<svg v-if="icon == 'list' & lightdark == 'light'" class="button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">

                    <rect width="3.94" height="3.986" x="5.92" y="7.128" fill="#fff" rx=".4"></rect>
                    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M6.182 6.4h3.417c.542 0 .981.445.981.993v3.456c0 .549-.44.993-.981.993H6.182a.987.987 0 0 1-.982-.993V7.393c0-.548.44-.993.982-.993Zm2.945 3.972V7.856H6.64v2.516h2.487Z" clip-rule="evenodd"></path>
                    <rect width="3.94" height="3.986" x="5.92" y="13.914" fill="#fff" rx=".4"></rect>
                    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M6.182 13.186h3.417c.542 0 .981.445.981.993v3.476a.999.999 0 0 1-.287.702.976.976 0 0 1-.694.291H6.182a.987.987 0 0 1-.982-.993v-3.476c0-.548.44-.993.982-.993Zm2.945 3.986v-2.53H6.64v2.53h2.487Z" clip-rule="evenodd"></path>
                    <rect width="3.94" height="3.986" x="5.92" y="20.694" fill="#fff" rx=".4"></rect>
                    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M6.182 19.966h3.403l.014.006c.542 0 .981.445.981.993v3.456c0 .549-.44.993-.981.993H6.182a.987.987 0 0 1-.982-.993v-3.456a1 1 0 0 1 .285-.706.976.976 0 0 1 .697-.293Zm2.945 3.985v-2.529H6.64v2.53h2.487ZM26.067 9.85H12.616a.724.724 0 0 1-.72-.729c0-.402.322-.728.72-.728h13.45c.399 0 .72.326.72.728a.724.724 0 0 1-.72.728Zm0 6.786H12.616a.724.724 0 0 1-.72-.729c0-.402.322-.728.72-.728h13.45c.399 0 .72.326.72.728a.724.724 0 0 1-.72.729Zm0 6.779H12.616a.724.724 0 0 1-.72-.728c0-.402.322-.729.72-.729h13.45c.399 0 .72.327.72.729a.724.724 0 0 1-.72.728Z" clip-rule="evenodd"></path>

</svg>




<svg v-if="icon == 'grid' & lightdark == 'light'" class="button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">

    <rect width="8.467" height="8.467" x="6.15" y="6.15" fill="#fff" rx=".55"></rect>
    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M6.626 5.2h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426H6.626A1.425 1.425 0 0 1 5.2 14.142V6.626c0-.788.638-1.426 1.426-1.426Zm7.041 8.467V7.101H7.101v6.566h6.566Z" clip-rule="evenodd"></path>
    <rect width="8.467" height="8.467" x="6.15" y="17.382" fill="#fff" rx=".55"></rect>
    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M6.626 16.432h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426H6.626A1.425 1.425 0 0 1 5.2 25.374v-7.516c0-.788.638-1.426 1.426-1.426Zm7.041 8.467v-6.566H7.101v6.566h6.566Z" clip-rule="evenodd"></path>
    <rect width="8.467" height="8.467" x="17.382" y="17.382" fill="#fff" rx=".55"></rect>
    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M17.858 16.432h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426h-7.516a1.425 1.425 0 0 1-1.426-1.426v-7.516c0-.788.638-1.426 1.426-1.426Zm7.041 8.467v-6.566h-6.566v6.566h6.566Z" clip-rule="evenodd"></path>
    <rect width="8.467" height="8.467" x="17.382" y="6.15" fill="#fff" rx=".55"></rect>
    <path fill="var(--dba-primary)" fill-rule="evenodd" d="M17.858 5.2h7.516c.788 0 1.426.638 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426h-7.516a1.425 1.425 0 0 1-1.426-1.426V6.626A1.425 1.425 0 0 1 17.858 5.2Zm7.041 8.467V7.101h-6.566v6.566h6.566Z" clip-rule="evenodd"></path>

</svg>


<svg v-if="icon == 'phone' & lightdark == 'light'" class="button-svg" focusable="false" viewBox="0 0 40 40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  
    <path d="M25.752 15.395a.92.92 0 01-.653-1.574 1.482 1.482 0 000-2.093.924.924 0 111.306-1.306 3.349 3.349 0 010 4.697.921.921 0 01-.653.276zm6.823 7.343a.92.92 0 01-.653-1.574c4.61-4.63 4.61-12.115 0-16.744a.926.926 0 111.306-1.315c5.335 5.35 5.335 14.007 0 19.356a.921.921 0 01-.653.277z" fill="var(--dba-primary)"></path>
    <path d="M28.908 19.07a.92.92 0 01-.653-1.573 6.698 6.698 0 000-9.427.92.92 0 111.306-1.298 8.514 8.514 0 010 12.03.921.921 0 01-.653.269z" fill="var(--dba-primary)"></path>
    <path d="M18.652 4.913H7.023A3.215 3.215 0 003.842 8.12v24.857a3.207 3.207 0 003.181 3.231h11.63a3.207 3.207 0 003.206-3.231V8.12a3.215 3.215 0 00-3.207-3.207z" fill="var(--dba-white)"></path>
    <path fill="var(--dba-red)" d="M7.802 8.698v19.255h10.105V8.698z"></path><path d="M18.652 3.072H7.023A5.023 5.023 0 002 8.095v24.882A5.023 5.023 0 007.023 38h11.63a5.023 5.023 0 005.022-5.023V8.12a5.024 5.024 0 00-5.023-5.048zm3.207 29.905a3.207 3.207 0 01-3.207 3.206H7.023a3.207 3.207 0 01-3.181-3.206V8.12a3.215 3.215 0 013.181-3.207h11.63a3.215 3.215 0 013.206 3.207v24.857z" fill="var(--dba-primary)" fill-rule="nonzero"></path>
    <path d="M5.96 6.864v22.89h13.78V6.863H5.96zm11.947 21.09H7.802V8.697h10.105v19.255z" fill="var(--dba-primary)" fill-rule="nonzero"></path><path d="M12.833 33.496h.05a.88.88 0 00.838-.921.946.946 0 00-.938-.921.92.92 0 000 1.842h.05z" fill="var(--dba-primary)"></path>

</svg>















<svg v-if="icon == 'search' & lightdark == 'dark'" class="button-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.02 123.03">

<g>
    <path d="m48.15,92.8c-24.62,0-44.65-20.03-44.65-44.65S23.53,3.5,48.15,3.5s44.65,20.03,44.65,44.65-20.03,44.65-44.65,44.65Z" style="fill: var(--dba-lightblue); stroke-width: 0px;"/>
    <path d="m48.15,7c22.73,0,41.15,18.42,41.15,41.15s-18.42,41.15-41.15,41.15S7,70.88,7,48.15,25.42,7,48.15,7m0-7C21.6,0,0,21.6,0,48.15s21.6,48.15,48.15,48.15,48.15-21.6,48.15-48.15S74.7,0,48.15,0h0Z" style="fill: var(--dba-darkblue); stroke-width: 0px;"/>
</g>
<line x1="81.65" y1="81.65" x2="88.16" y2="88.16" style="fill: none; stroke: var(--dba-darkblue); stroke-miterlimit: 10; stroke-width: 7px;"/>
<path d="m94.25,82.6h17.04v31.81c0,4.7-3.82,8.52-8.52,8.52h0c-4.7,0-8.52-3.82-8.52-8.52v-31.81h0Z" transform="translate(-42.57 102.77) rotate(-45)" style="fill: var(--dba-red); stroke: var(--dba-darkblue); stroke-miterlimit: 10; stroke-width: 7px;"/>
<line x1="100.17" y1="30.79" x2="119.38" y2="30.79" style="fill: none; stroke: var(--dba-darkblue); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>
<line x1="119.38" y1="18.89" x2="94.94" y2="18.89" style="fill: none; stroke: var(--dba-darkblue); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>
<line x1="119.38" y1="7" x2="86.18" y2="7" style="fill: none; stroke: var(--dba-darkblue); stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 7px;"/>

</svg>




<svg v-if="icon == 'paperplane' & lightdark == 'dark'" class="button-svg" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 156.39 115.02">

<g>
<polygon points="61.46 107.38 145.91 12.56 76.69 79.03 61.46 107.38" style="fill: var(--dba-red); stroke-width: 0px;"/>
<path d="m9.78,75.47L145.91,12.56l-15.74,60.81c-.83,3.22-4.1,5.66-7.53,5.66h-45.75c-.12,0-.23.07-.29.17l-15.04,27.99c-.64,1.2-2.57,1.1-2.87-.15l-6.81-27.8c-.03-.12-.15-.21-.27-.21H10.66c-2.12,0-2.79-2.68-.88-3.56Z" style="fill: #deddf0; stroke-width: 0px;"/>
<path d="m52.25,78.73L145.91,12.56,7.85,76.36c-1.43.66-.93,2.67.67,2.67h42.78c.34,0,.68-.11.96-.3Z" style="fill: var(--dba-lightgray); stroke-width: 0px;"/>
<path d="m76.69,79.03L145.91,12.56l-16.05,62.03c-.65,2.52-3.22,4.45-5.92,4.45h-47.24Z" style="fill: var(--dba-lightgray); stroke-width: 0px;"/>
</g>
<polyline points="60.29 109.13 76.69 79.03 145.91 12.56 47.73 83.35" style="fill: none; stroke: var(--dba-darkblue); stroke-miterlimit: 10; stroke-width: 7px;"/>
<path d="m145.91,12.56l-16.05,62.03c-.65,2.52-3.22,4.45-5.92,4.45h-37.23l-25.18,28.24c-.39.49-.97.74-1.52.74-.61,0-1.16-.32-1.32-.98l-6.81-27.8c-.03-.12-.15-.21-.27-.21H8.51c-1.59,0-2.1-2.01-.67-2.67L145.91,12.56m10.48-12.56l-13.42,6.2L4.91,70.01c-3.62,1.67-5.56,5.54-4.71,9.4.86,3.9,4.28,6.62,8.31,6.62h37.82l5.56,22.68c.91,3.71,4.25,6.31,8.12,6.31,2.61,0,5.14-1.18,6.83-3.18l23-25.81h34.1c5.9,0,11.24-4.08,12.69-9.69l16.05-62.03,3.7-14.31h0Z" style="fill: var(--dba-darkblue); stroke-width: 0px;"/>

</svg>


<svg v-if="icon == 'list' & lightdark == 'dark'" class="button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">

        <rect width="3.94" height="3.986" x="5.92" y="7.128" fill="#fff" rx=".4"></rect>
        <path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M6.182 6.4h3.417c.542 0 .981.445.981.993v3.456c0 .549-.44.993-.981.993H6.182a.987.987 0 0 1-.982-.993V7.393c0-.548.44-.993.982-.993Zm2.945 3.972V7.856H6.64v2.516h2.487Z" clip-rule="evenodd"></path>
        <rect width="3.94" height="3.986" x="5.92" y="13.914" fill="#fff" rx=".4"></rect>
        <path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M6.182 13.186h3.417c.542 0 .981.445.981.993v3.476a.999.999 0 0 1-.287.702.976.976 0 0 1-.694.291H6.182a.987.987 0 0 1-.982-.993v-3.476c0-.548.44-.993.982-.993Zm2.945 3.986v-2.53H6.64v2.53h2.487Z" clip-rule="evenodd"></path>
        <rect width="3.94" height="3.986" x="5.92" y="20.694" fill="#fff" rx=".4"></rect>
        <path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M6.182 19.966h3.403l.014.006c.542 0 .981.445.981.993v3.456c0 .549-.44.993-.981.993H6.182a.987.987 0 0 1-.982-.993v-3.456a1 1 0 0 1 .285-.706.976.976 0 0 1 .697-.293Zm2.945 3.985v-2.529H6.64v2.53h2.487ZM26.067 9.85H12.616a.724.724 0 0 1-.72-.729c0-.402.322-.728.72-.728h13.45c.399 0 .72.326.72.728a.724.724 0 0 1-.72.728Zm0 6.786H12.616a.724.724 0 0 1-.72-.729c0-.402.322-.728.72-.728h13.45c.399 0 .72.326.72.728a.724.724 0 0 1-.72.729Zm0 6.779H12.616a.724.724 0 0 1-.72-.728c0-.402.322-.729.72-.729h13.45c.399 0 .72.327.72.729a.724.724 0 0 1-.72.728Z" clip-rule="evenodd"></path>

      </svg>




<svg v-if="icon == 'grid' & lightdark == 'dark'" class="button-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32">

<rect width="8.467" height="8.467" x="6.15" y="6.15" fill="#fff" rx=".55"></rect>
<path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M6.626 5.2h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426H6.626A1.425 1.425 0 0 1 5.2 14.142V6.626c0-.788.638-1.426 1.426-1.426Zm7.041 8.467V7.101H7.101v6.566h6.566Z" clip-rule="evenodd"></path>
<rect width="8.467" height="8.467" x="6.15" y="17.382" fill="#fff" rx=".55"></rect>
<path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M6.626 16.432h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426H6.626A1.425 1.425 0 0 1 5.2 25.374v-7.516c0-.788.638-1.426 1.426-1.426Zm7.041 8.467v-6.566H7.101v6.566h6.566Z" clip-rule="evenodd"></path>
<rect width="8.467" height="8.467" x="17.382" y="17.382" fill="#fff" rx=".55"></rect>
<path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M17.858 16.432h7.516a1.426 1.426 0 0 1 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426h-7.516a1.425 1.425 0 0 1-1.426-1.426v-7.516c0-.788.638-1.426 1.426-1.426Zm7.041 8.467v-6.566h-6.566v6.566h6.566Z" clip-rule="evenodd"></path>
<rect width="8.467" height="8.467" x="17.382" y="6.15" fill="#fff" rx=".55"></rect>
<path fill="var(--dba-darkblue)" fill-rule="evenodd" d="M17.858 5.2h7.516c.788 0 1.426.638 1.426 1.426v7.516a1.426 1.426 0 0 1-1.426 1.426h-7.516a1.425 1.425 0 0 1-1.426-1.426V6.626A1.425 1.425 0 0 1 17.858 5.2Zm7.041 8.467V7.101h-6.566v6.566h6.566Z" clip-rule="evenodd"></path>

</svg>


<svg v-if="icon == 'phone' & lightdark == 'dark'" class="button-svg" focusable="false" viewBox="0 0 40 40" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">

<path d="M25.752 15.395a.92.92 0 01-.653-1.574 1.482 1.482 0 000-2.093.924.924 0 111.306-1.306 3.349 3.349 0 010 4.697.921.921 0 01-.653.276zm6.823 7.343a.92.92 0 01-.653-1.574c4.61-4.63 4.61-12.115 0-16.744a.926.926 0 111.306-1.315c5.335 5.35 5.335 14.007 0 19.356a.921.921 0 01-.653.277z" fill="var(--dba-darkblue)"></path>
<path d="M28.908 19.07a.92.92 0 01-.653-1.573 6.698 6.698 0 000-9.427.92.92 0 111.306-1.298 8.514 8.514 0 010 12.03.921.921 0 01-.653.269z" fill="var(--dba-darkblue)"></path>
<path d="M18.652 4.913H7.023A3.215 3.215 0 003.842 8.12v24.857a3.207 3.207 0 003.181 3.231h11.63a3.207 3.207 0 003.206-3.231V8.12a3.215 3.215 0 00-3.207-3.207z" fill="var(--dba-lightblue)"></path>
<path fill="var(--dba-red)" d="M7.802 8.698v19.255h10.105V8.698z"></path><path d="M18.652 3.072H7.023A5.023 5.023 0 002 8.095v24.882A5.023 5.023 0 007.023 38h11.63a5.023 5.023 0 005.022-5.023V8.12a5.024 5.024 0 00-5.023-5.048zm3.207 29.905a3.207 3.207 0 01-3.207 3.206H7.023a3.207 3.207 0 01-3.181-3.206V8.12a3.215 3.215 0 013.181-3.207h11.63a3.215 3.215 0 013.206 3.207v24.857z" fill="var(--dba-darkblue)" fill-rule="nonzero"></path>
<path d="M5.96 6.864v22.89h13.78V6.863H5.96zm11.947 21.09H7.802V8.697h10.105v19.255z" fill="var(--dba-darkblue)" fill-rule="nonzero"></path><path d="M12.833 33.496h.05a.88.88 0 00.838-.921.946.946 0 00-.938-.921.92.92 0 000 1.842h.05z" fill="var(--dba-darkblue)"></path>

</svg>




</template>


<style>

.button-svg{
    max-width: 100%;
    max-height: 100%;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    overflow: visible;
}

</style>