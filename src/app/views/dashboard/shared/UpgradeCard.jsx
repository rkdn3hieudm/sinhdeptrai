import React from 'react'
import { Card, Button } from '@mui/material'
import { styled } from '@mui/system'
import { convertHexToRGB } from 'app/utils/utils'

const CardRoot = styled(Card)(({ theme }) => ({
    marginBottom: '24px',
    padding: '24px !important',
    [theme.breakpoints.down('sm')]: {
        paddingLeft: '16px !important',
    },
}))

const StyledCard = styled(Card)(({ theme }) => ({
    boxShadow: 'none',
    textAlign: 'center',
    position: 'relative',
    background: `rgb(${convertHexToRGB(
        theme.palette.primary.main
    )}, 0.15) !important`,
    padding: '24px !important',
    [theme.breakpoints.down('sm')]: {
        padding: '16px !important',
    },
}))

const Paragraph = styled('p')(({ theme }) => ({
    margin: 0,
    paddingTop: '24px',
    paddingBottom: '24px',
    color: theme.palette.text.secondary,
}))

const UpgradeCard = () => {
    return (
        <CardRoot>
            <StyledCard elevation={0}>
                <img
                    src="/assets/images/illustrations/upgrade.svg"
                    alt="upgrade"
                />
                <Paragraph>
                    Mua hàng xịn xò tại <b>Sinh VIP PRO</b> Và <br /> Nhiều hơn nữa
                </Paragraph>
                <Button
                    size="large"
                    color="primary"
                    variant="contained"
                    sx={{ textTransform: 'uppercase' }}
                >
                    Mua Ngay
                </Button>
            </StyledCard>
        </CardRoot>
    )
}

export default UpgradeCard
