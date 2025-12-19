<template>
    <div class="bg-neutral-900 h-full text-bodily">
        <main class="p-5 h-screen gap-3 flex flex-col items-center">
            <img
                src="/nikableh.png"
                alt="nikableh's profile picture"
                width="50%"
                class="select-none"
            />
            <div class="flex flex-col items-center text-center">
                <p>Nika <em>(aka nikableh)</em></p>
            </div>
            <div
                class="w-full grid grid-cols-2 gap-x-10 gap-y-0 justify-items-start items-center"
            >
                <span>Current location:</span>
                <p>Moscow, Russia</p>

                <span>Telegram:</span>
                <p>
                    <NuxtLink to="https://t.me/nikableh" class="text-link"
                        >@nikableh</NuxtLink
                    >
                </p>

                <span>Github:</span>
                <p>
                    <NuxtLink to="https://github.com/nikableh" class="text-link"
                        >@nikableh</NuxtLink
                    >
                </p>
            </div>
            <div class="w-full">
                <Heading>My badge</Heading>
                <Badge88x31
                    website="https://nikableh.moe"
                    image="https://nikableh.moe/88x31.png"
                    alt="nikableh's 88x31 badge"
                />
            </div>
            <div class="w-full">
                <Heading>Frens</Heading>
                <Badge88x31
                    website="https://otomir23.me/"
                    image="https://otomir23.me/88x31.png"
                    alt="damir's 88x31 badge"
                />
                <Badge88x31
                    website="https://cesa.rs/"
                    image="https://cesa.rs/badges/cesarean.png"
                    alt="cesarean's 88x31 badge"
                />
                <Badge88x31
                    website="https://std.mem.transmute.me/"
                    image="https://std.mem.transmute.me/88x31/transmute.png"
                    alt="polina4096's 88x31 badge"
                />
                 <Badge88x31
                    website="https://catboy.page/"
                    image="https://std.mem.transmute.me/88x31/transmute.png"
                    alt="catboybinary's 88x31 badge"
                />
            </div>
        </main>
        <WebringNavBar />
    </div>
</template>
