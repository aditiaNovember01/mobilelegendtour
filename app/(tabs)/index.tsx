import { Link } from 'expo-router';
import React from 'react';
import {
  Dimensions,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      {/* Hero Section */}
      <View style={styles.hero}>
        <View style={styles.heroBackground}>
          <View style={styles.circleDecor1} />
          <View style={styles.circleDecor2} />
          <View style={styles.circleDecor3} />
        </View>

        <View style={styles.heroContent}>
          <Image
            source={require('@/assets/images/mau 1 vs 1.png')}
            style={styles.heroLogo}
            resizeMode="contain"
          />
          <Text style={styles.heroTitle}>Mobile Legends</Text>
          <Text style={styles.heroSubtitle}>Tournament Registration</Text>
          <Text style={styles.heroDescription}>
            Daftar sekarang dan tunjukkan skill terbaikmu!
          </Text>

          <Link href="/registration" asChild>
            <TouchableOpacity style={styles.ctaButton}>
              <Text style={styles.ctaButtonText}>🏆 Daftar Sekarang</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>

      {/* Features Section */}
      <View style={styles.featuresSection}>
        <Text style={styles.sectionTitle}>✨ Kenapa Harus Ikut?</Text>

        <View style={styles.featuresGrid}>
          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>⚡</Text>
            <Text style={styles.featureTitle}>Pendaftaran Cepat</Text>
            <Text style={styles.featureDescription}>
              Proses pendaftaran mudah dan cepat hanya dalam hitungan menit
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>💰</Text>
            <Text style={styles.featureTitle}>Hadiah Menarik</Text>
            <Text style={styles.featureDescription}>
              Total hadiah jutaan rupiah menanti para pemenang
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🎯</Text>
            <Text style={styles.featureTitle}>Fair Play</Text>
            <Text style={styles.featureDescription}>
              Sistem pertandingan yang adil dan transparan
            </Text>
          </View>

          <View style={styles.featureCard}>
            <Text style={styles.featureIcon}>🔒</Text>
            <Text style={styles.featureTitle}>Aman & Terpercaya</Text>
            <Text style={styles.featureDescription}>
              Pembayaran aman melalui DANA dengan konfirmasi WhatsApp
            </Text>
          </View>
        </View>
      </View>

      {/* Tournament Types */}
      <View style={styles.tournamentSection}>
        <Text style={styles.sectionTitle}>⚔️ Jenis Pertandingan</Text>

        <View style={styles.tournamentCards}>
          <View style={styles.tournamentCard}>
            <Text style={styles.tournamentEmoji}>🎯</Text>
            <Text style={styles.tournamentType}>1 vs 1</Text>
            <Text style={styles.tournamentDesc}>Adu skill individual</Text>
            <View style={styles.tournamentPrices}>
              <Text style={styles.priceTag}>Rp 5k - 50k</Text>
            </View>
          </View>

          <View style={styles.tournamentCard}>
            <Text style={styles.tournamentEmoji}>👥</Text>
            <Text style={styles.tournamentType}>5 vs 5</Text>
            <Text style={styles.tournamentDesc}>Kerja sama tim</Text>
            <View style={styles.tournamentPrices}>
              <Text style={styles.priceTag}>Rp 5k - 50k</Text>
            </View>
          </View>
        </View>
      </View>

      {/* How It Works */}
      <View style={styles.howItWorksSection}>
        <Text style={styles.sectionTitle}>📋 Cara Daftar</Text>

        <View style={styles.stepsContainer}>
          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>1</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Isi Form Pendaftaran</Text>
              <Text style={styles.stepDescription}>
                Lengkapi data diri dan pilih jenis pertandingan
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>2</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Pilih Insert & Bayar</Text>
              <Text style={styles.stepDescription}>
                Pilih nominal insert dan scan QR untuk pembayaran
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>3</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Upload Bukti</Text>
              <Text style={styles.stepDescription}>
                Upload bukti pembayaran dan kirim via WhatsApp
              </Text>
            </View>
          </View>

          <View style={styles.step}>
            <View style={styles.stepNumber}>
              <Text style={styles.stepNumberText}>4</Text>
            </View>
            <View style={styles.stepContent}>
              <Text style={styles.stepTitle}>Siap Bertanding!</Text>
              <Text style={styles.stepDescription}>
                Tunggu konfirmasi dan bersiaplah untuk bertanding
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* CTA Section */}
      <View style={styles.ctaSection}>
        <Text style={styles.ctaTitle}>Siap Menjadi Juara?</Text>
        <Text style={styles.ctaDescription}>
          Jangan lewatkan kesempatan emas ini! Daftar sekarang dan buktikan kehebatanmu.
        </Text>
        <Link href="/registration" asChild>
          <TouchableOpacity style={styles.ctaButtonLarge}>
            <Text style={styles.ctaButtonLargeText}>🚀 Mulai Pendaftaran</Text>
          </TouchableOpacity>
        </Link>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Mobile Legends Tournament</Text>
        <Text style={styles.footerSubtext}>Powered by DANA Payment</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  scrollContent: {
    paddingBottom: 0,
  },
  hero: {
    minHeight: Platform.OS === 'web' ? 500 : 600,
    position: 'relative',
    overflow: 'hidden',
  },
  heroBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#1e293b',
  },
  circleDecor1: {
    position: 'absolute',
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'rgba(220, 38, 38, 0.15)',
    top: -100,
    right: -100,
  },
  circleDecor2: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'rgba(239, 68, 68, 0.1)',
    bottom: -50,
    left: -50,
  },
  circleDecor3: {
    position: 'absolute',
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: 'rgba(220, 38, 38, 0.1)',
    top: '50%',
    left: '50%',
  },
  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'web' ? 80 : 100,
    paddingBottom: 60,
  },
  heroLogo: {
    width: Platform.OS === 'web' ? 600 : 350,
    height: Platform.OS === 'web' ? 300 : 180,
    marginBottom: 30,
  },
  heroEmoji: {
    fontSize: 80,
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(220, 38, 38, 0.5)',
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 20,
  },
  heroSubtitle: {
    fontSize: 24,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '600',
  },
  heroDescription: {
    fontSize: 16,
    color: '#cbd5e1',
    textAlign: 'center',
    marginBottom: 40,
    maxWidth: 400,
    lineHeight: 24,
  },
  ctaButton: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 40,
    paddingVertical: 18,
    borderRadius: 30,
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  ctaButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  featuresSection: {
    padding: 30,
    backgroundColor: '#0f172a',
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    justifyContent: 'center',
  },
  featureCard: {
    backgroundColor: '#1e293b',
    borderRadius: 20,
    padding: 24,
    width: Platform.OS === 'web' ? Math.min(width / 2 - 40, 280) : '100%',
    borderWidth: 2,
    borderColor: '#334155',
  },
  featureIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  featureDescription: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 22,
  },
  tournamentSection: {
    padding: 30,
    backgroundColor: '#1e293b',
  },
  tournamentCards: {
    flexDirection: Platform.OS === 'web' ? 'row' : 'column',
    gap: 20,
    justifyContent: 'center',
  },
  tournamentCard: {
    backgroundColor: '#0f172a',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    flex: Platform.OS === 'web' ? 1 : undefined,
    maxWidth: Platform.OS === 'web' ? 350 : undefined,
    borderWidth: 2,
    borderColor: '#334155',
  },
  tournamentEmoji: {
    fontSize: 64,
    marginBottom: 16,
  },
  tournamentType: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  tournamentDesc: {
    fontSize: 16,
    color: '#94a3b8',
    marginBottom: 20,
  },
  tournamentPrices: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  priceTag: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  howItWorksSection: {
    padding: 30,
    backgroundColor: '#0f172a',
  },
  stepsContainer: {
    gap: 20,
  },
  step: {
    flexDirection: 'row',
    gap: 20,
    alignItems: 'flex-start',
  },
  stepNumber: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#dc2626',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepNumberText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  stepDescription: {
    fontSize: 14,
    color: '#94a3b8',
    lineHeight: 22,
  },
  ctaSection: {
    padding: 40,
    backgroundColor: '#1e293b',
    alignItems: 'center',
  },
  ctaTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 16,
  },
  ctaDescription: {
    fontSize: 16,
    color: '#94a3b8',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 500,
    lineHeight: 24,
  },
  ctaButtonLarge: {
    backgroundColor: '#dc2626',
    paddingHorizontal: 48,
    paddingVertical: 20,
    borderRadius: 30,
    shadowColor: '#dc2626',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 16,
    elevation: 10,
  },
  ctaButtonLargeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  footer: {
    padding: 30,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#334155',
  },
  footerText: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  footerSubtext: {
    fontSize: 12,
    color: '#475569',
  },
});
