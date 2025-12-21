<template>
    <section
        class="bg-yetdarker h-full text-bodily flex flex-col items-center"
    >
        <WipRibbon />
        <div class="flex flex-col items-center md:w-2xl">
            <main class="p-5 min-h-screen gap-5 flex flex-col items-center">
                <section class="flex flex-col items-center text-center w-full">
                    <Avatar />
                </section>
                <section class="flex flex-col items-center text-center w-full">
                    <p>Nika <em>(aka nikableh)</em></p>
                </section>
                <section class="flex flex-col">
                    <div class="grid grid-cols-[auto_auto] gap-y-1 gap-x-7">
                        <span>Location:</span>
                        <p>Moscow, Russia</p>

                        <span>Gender:</span>
                        <p>she/her 🏳️‍⚧️</p>

                        <span>Telegram:</span>
                        <p>
                            <NuxtLink
                                to="https://t.me/nikableh"
                                class="text-link"
                                >@nikableh</NuxtLink
                            >
                        </p>

                        <span>Github:</span>
                        <p>
                            <NuxtLink
                                to="https://github.com/nikableh"
                                class="text-link"
                                >@nikableh</NuxtLink
                            >
                        </p>

                        <span>Email:</span>
                        <p>
                            <NuxtLink
                                to="mailto:nika@nikableh.moe"
                                class="text-link break-all"
                                >nika@nikableh.moe</NuxtLink
                            >
                        </p>
                    </div>
                </section>
                <section class="flex flex-col w-full">
                    <Heading>About me</Heading>
                    <div class="flex flex-col gap-2">
                        <p>
                            A burned-out Systems Programmer, a trans girl and a
                            huge dum-dum.
                        </p>
                        <p>
                            Fueled by estradiol, vortioxetine, and,
                            occasionally, a cherry-flavored beer.
                        </p>
                    </div>
                </section>
                <section class="flex flex-col items-start w-full">
                    <Heading>My badge</Heading>
                    <Badge88x31
                        website="https://nikableh.moe"
                        image="https://nikableh.moe/88x31.png"
                        alt="nikableh's 88x31 badge"
                    />
                </section>
                <section class="text-center w-full">
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
                        image="https://catboy.page/images/catboybinary.png"
                        alt="catboybinary's 88x31 badge"
                    />
                    <Badge88x31
                        website="https://keetsta.me/"
                        image="https://keetsta.me/88x31.png"
                        alt="keet's 88x31 badge"
                    />
                    <Badge88x31
                        website="https://puppy.support/"
                        image="https://puppy.support/88x31/shutup.gif"
                        alt="oljoi's 88x31 badge"
                    />
                    <Badge88x31
                        website="https://preview.about.akarpov.ru/"
                        image="/88x31-unknown.png"
                        alt="sanspie's 88x31 badge"
                    />
                    <Badge88x31
                        website="https://femboy.page/"
                        image="/88x31-unknown.png"
                        alt="devilreef's 88x31 badge"
                    />
                </section>
            </main>
            <WebringNavBar />
        </div>
    </section>
</template>
