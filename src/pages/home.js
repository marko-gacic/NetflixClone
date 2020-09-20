import React from 'react'
import { Feature, OptForm } from '../components'
import { FaqsContainer } from "../containers/faqs";
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header';
import { JumbotronContainer } from '../containers/jumbotron'


export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited movies, TV shows, and more.
                        </Feature.Title>
                    <Feature.SubTitle>
                        Watch anywhere. Cancel anytime.
                        </Feature.SubTitle>

                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership.

                    </OptForm.Text>
                    <OptForm>
                        <OptForm.Input placeholder="Email address" />
                        <OptForm.Button to="/signup">TRY 30 DAYS FREE</OptForm.Button>
                        <OptForm.Break />

                    </OptForm>
                </Feature>

            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />

        </>
    )
}